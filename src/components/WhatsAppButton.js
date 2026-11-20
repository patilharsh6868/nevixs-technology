import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Nevixs on WhatsApp">
      <MessageCircle size={20} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
