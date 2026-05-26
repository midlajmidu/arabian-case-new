import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 animate-wa-pulse"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}