import { profile, contact } from "../data/content";

// wa.me link built from profile.phone; opens WhatsApp with contact.whatsappMessage pre-filled (used by Contact.jsx)
export const whatsappLink = `https://wa.me/${profile.phone.replace(
  "+",
  ""
)}?text=${encodeURIComponent(contact.whatsappMessage)}`;

// opens a Gmail compose window addressed to profile.email (used by Contact.jsx and Footer.jsx)
export const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent("Hello from your portfolio")}`;
