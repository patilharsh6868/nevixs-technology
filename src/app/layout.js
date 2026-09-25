import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://nevixs.com"),
  title: {
    default: "Nevixs Technology | Building Future-Ready Apps & Software",
    template: "%s | Nevixs Technology",
  },
  description: "Custom applications and thoughtful software solutions for businesses ready to move forward.",
  openGraph: {
    title: "Nevixs Technology",
    description: "Custom solutions for businesses, powered by innovation.",
    url: "https://nevixs.com",
    siteName: "Nevixs Technology",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
