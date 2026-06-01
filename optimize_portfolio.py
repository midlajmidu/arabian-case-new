#!/usr/bin/env python3
"""
optimize_portfolio.py
Processes portfolio images from two source folders, resolves duplicates,
converts HEIC, crops transparent PNGs, compresses to WebP, and writes
a JSON manifest consumed by the React portfolio page.
"""

import json
import os
import re
import subprocess
import tempfile
from pathlib import Path
from PIL import Image

# ── Paths ──────────────────────────────────────────────────────────────
ROOT = Path(__file__).resolve().parent
PRIMARY_DIR = ROOT / "output_images"
SECONDARY_DIR = ROOT / "Website picture 2"
OUTPUT_LARGE = ROOT / "public" / "portfolio" / "large"
OUTPUT_THUMB = ROOT / "public" / "portfolio" / "thumbs"
JSON_OUT = ROOT / "src" / "data" / "portfolio-items.json"

LARGE_MAX = 1200
THUMB_MAX = 600
LARGE_QUALITY = 85
THUMB_QUALITY = 80

VALID_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".heic"}

# ── Category mapping ──────────────────────────────────────────────────
CATEGORY_RULES: list[tuple[list[str], str, str]] = [
    # (keywords, slug, label)
    (["rack case", "rackcase"], "flight-cases", "Flight Cases"),
    (["cable trunk"], "flight-cases", "Flight Cases"),
    (["speaker case", "speakercase", "speaker"], "audio-equipment-cases", "Audio Equipment Cases"),
    (["mixer case", "mixer"], "audio-equipment-cases", "Audio Equipment Cases"),
    (["audio"], "audio-equipment-cases", "Audio Equipment Cases"),
    (["keyboard case"], "flight-cases", "Flight Cases"),
    (["utility case", "utility box", "utility cover", "utility"], "utility-covers", "Utility Covers"),
    (["foam insert", "foam", "tool control", "tool box", "toolbox"], "foam-inserts", "Foam Inserts"),
    (["wooden crate", "shipping crate", "crate", "wooden"], "shipping-crates", "Shipping Crates"),
    (["belt pouch"], "custom-bags", "Custom Bags"),
    (["medical bag"], "custom-bags", "Custom Bags"),
    (["equipment bag", "equipment & tools bag", "equipment"], "custom-bags", "Custom Bags"),
    (["custom cover"], "utility-covers", "Utility Covers"),
    (["pelican case", "pelican"], "flight-cases", "Flight Cases"),
    (["screen case", "tv"], "flight-cases", "Flight Cases"),
    (["dj table", "dj"], "flight-cases", "Flight Cases"),
    (["exhibition", "shell scheme"], "custom-manufacturing", "Custom Manufacturing"),
    (["outdoor kiosk", "outdoor kioxk", "outdoor kisok", "kiosk"], "custom-manufacturing", "Custom Manufacturing"),
    (["event photo", "photobs", "eventphoto", "photo op", "photo backdrop"], "custom-manufacturing", "Custom Manufacturing"),
    (["display stand", "display unit", "custom display"], "furniture", "Furniture"),
    (["sofa"], "furniture", "Furniture"),
    (["furniture"], "furniture", "Furniture"),
    (["premium exhibition", "premuim exhibition"], "custom-manufacturing", "Custom Manufacturing"),
    (["bag"], "custom-bags", "Custom Bags"),
    (["cover"], "utility-covers", "Utility Covers"),
    (["packaging", "package"], "packaging-solutions", "Packaging Solutions"),
]


def normalise_stem(name: str) -> str:
    """Normalise a filename stem for duplicate detection."""
    stem = Path(name).stem.lower().strip()
    # Remove trailing (1), (2), etc.
    stem = re.sub(r"\s*\(\d+\)\s*$", "", stem)
    # Remove trailing .jpg, .jpeg etc that may be embedded in the name
    stem = re.sub(r"\.(jpg|jpeg|png|webp|bmp|heic)$", "", stem, flags=re.IGNORECASE)
    return stem


def categorise(filename: str) -> tuple[str, str]:
    """Return (slug, label) for a filename."""
    lower = filename.lower()
    for keywords, slug, label in CATEGORY_RULES:
        for kw in keywords:
            if kw in lower:
                return slug, label
    return "projects", "Projects"


def convert_heic(src: Path) -> Path:
    """Convert a HEIC file to PNG via macOS sips, return path to PNG."""
    tmp = Path(tempfile.mkdtemp())
    dest = tmp / (src.stem + ".png")
    subprocess.run(
        ["sips", "-s", "format", "png", str(src), "--out", str(dest)],
        check=True,
        capture_output=True,
    )
    return dest


def process_image(
    src: Path, slug: str, is_product: bool
) -> tuple[str, str]:
    """Process one image: crop if product PNG, resize, save as WebP.
    Returns (large_path, thumb_path) relative to /portfolio/.
    """
    # Open the image
    if src.suffix.lower() == ".heic":
        converted = convert_heic(src)
        img = Image.open(converted).convert("RGBA")
    else:
        img = Image.open(src)
        if img.mode == "RGBA" or img.mode == "PA":
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")

    # Auto-crop transparent PNGs (product images)
    if is_product and img.mode == "RGBA":
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            # Add ~5% padding around the product
            pw = int(img.width * 0.05)
            ph = int(img.height * 0.05)
            padded = Image.new("RGBA", (img.width + pw * 2, img.height + ph * 2), (0, 0, 0, 0))
            padded.paste(img, (pw, ph))
            img = padded

    # Convert to RGB for WebP saving (flatten alpha onto white for products)
    if img.mode == "RGBA":
        bg = Image.new("RGBA", img.size, (255, 255, 255, 0))
        # For WebP we keep transparency for product images
        composite = Image.alpha_composite(bg, img)
        # Actually, let's save product PNGs as WebP with alpha
        if is_product:
            save_img = img  # keep RGBA
        else:
            save_img = composite.convert("RGB")
    else:
        save_img = img

    out_name = slug + ".webp"

    # Large version
    large_img = save_img.copy()
    large_img.thumbnail((LARGE_MAX, LARGE_MAX), Image.LANCZOS)
    large_path = OUTPUT_LARGE / out_name
    if save_img.mode == "RGBA":
        large_img.save(large_path, "WEBP", quality=LARGE_QUALITY, lossless=False)
    else:
        large_img.save(large_path, "WEBP", quality=LARGE_QUALITY)

    # Thumbnail version
    thumb_img = save_img.copy()
    thumb_img.thumbnail((THUMB_MAX, THUMB_MAX), Image.LANCZOS)
    thumb_path = OUTPUT_THUMB / out_name
    if save_img.mode == "RGBA":
        thumb_img.save(thumb_path, "WEBP", quality=THUMB_QUALITY, lossless=False)
    else:
        thumb_img.save(thumb_path, "WEBP", quality=THUMB_QUALITY)

    return f"/portfolio/large/{out_name}", f"/portfolio/thumbs/{out_name}"


def main():
    OUTPUT_LARGE.mkdir(parents=True, exist_ok=True)
    OUTPUT_THUMB.mkdir(parents=True, exist_ok=True)

    # ── Gather files ──────────────────────────────────────────────────
    primary_files: dict[str, Path] = {}
    if PRIMARY_DIR.exists():
        for f in PRIMARY_DIR.iterdir():
            if f.is_file() and f.suffix.lower() in VALID_EXTENSIONS:
                key = normalise_stem(f.name)
                primary_files[key] = f

    secondary_files: dict[str, Path] = {}
    if SECONDARY_DIR.exists():
        for f in SECONDARY_DIR.iterdir():
            if f.is_file() and f.suffix.lower() in VALID_EXTENSIONS:
                key = normalise_stem(f.name)
                if key not in primary_files:
                    secondary_files[key] = f

    print(f"Primary (output_images): {len(primary_files)} files")
    print(f"Secondary (Website picture 2, unique): {len(secondary_files)} files")
    total = len(primary_files) + len(secondary_files)
    print(f"Total to process: {total}")

    # ── Process ───────────────────────────────────────────────────────
    items: list[dict] = []
    idx = 0

    # Track used slugs to prevent collisions
    used_slugs: set[str] = set()

    def make_slug(stem: str) -> str:
        s = re.sub(r"[^a-z0-9]+", "-", stem.lower()).strip("-")
        if s in used_slugs:
            n = 2
            while f"{s}-{n}" in used_slugs:
                n += 1
            s = f"{s}-{n}"
        used_slugs.add(s)
        return s

    # Primary files (product PNGs)
    for key, fpath in sorted(primary_files.items()):
        idx += 1
        cat_slug, cat_label = categorise(fpath.name)
        slug = make_slug(key)
        print(f"  [{idx}/{total}] (product) {fpath.name} → {cat_label}")
        try:
            large, thumb = process_image(fpath, slug, is_product=True)
            items.append({
                "id": slug,
                "category": cat_slug,
                "categoryLabel": cat_label,
                "large": large,
                "thumb": thumb,
                "type": "product",
            })
        except Exception as e:
            print(f"    ⚠ Error: {e}")

    # Secondary files (project photos)
    for key, fpath in sorted(secondary_files.items()):
        idx += 1
        cat_slug, cat_label = categorise(fpath.name)
        slug = make_slug(key)
        print(f"  [{idx}/{total}] (project) {fpath.name} → {cat_label}")
        try:
            large, thumb = process_image(fpath, slug, is_product=False)
            items.append({
                "id": slug,
                "category": cat_slug,
                "categoryLabel": cat_label,
                "large": large,
                "thumb": thumb,
                "type": "project",
            })
        except Exception as e:
            print(f"    ⚠ Error: {e}")

    # ── Write JSON ────────────────────────────────────────────────────
    JSON_OUT.parent.mkdir(parents=True, exist_ok=True)
    with open(JSON_OUT, "w") as f:
        json.dump(items, f, indent=2)

    print(f"\n✅ Done — {len(items)} images processed.")
    print(f"   JSON → {JSON_OUT}")
    print(f"   Large → {OUTPUT_LARGE}")
    print(f"   Thumbs → {OUTPUT_THUMB}")


if __name__ == "__main__":
    main()
