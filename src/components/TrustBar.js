import { Cloud, Eye, MessageCircle, MapPin } from "lucide-react";

const items = [
  { icon: Cloud, label: "Hosted on AWS in Mumbai" },
  { icon: Eye, label: "See it in a demo before you decide" },
  { icon: MessageCircle, label: "Support by email and WhatsApp" },
  { icon: MapPin, label: "Built by Nevixs Technologies, Pune" },
];

export default function TrustBar() {
  return (
    <ul className="trust-bar" aria-label="About Business OS">
      {items.map(({ icon: Icon, label }) => <li key={label}><Icon size={16} aria-hidden="true" />{label}</li>)}
    </ul>
  );
}
