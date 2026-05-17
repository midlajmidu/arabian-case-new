import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  message,
  className,
  label = "WhatsApp",
}: {
  message?: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-[10px] bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:brightness-110",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}