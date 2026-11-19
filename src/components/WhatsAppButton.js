import { MessageCircle } from "lucide-react";

export const whatsappNumber = "+91 96999 55686";
export const whatsappUrl = `https://wa.me/919699955686?text=${encodeURIComponent("Hi Nevixs, I'd like to know more about Business OS.")}`;

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Nevixs on WhatsApp">
      <MessageCircle size={20} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
