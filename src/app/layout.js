import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://nevixs.com"),
  title: {
    default: "Nevixs Technology | ERP & Custom Business Software",
    template: "%s | Nevixs Technology",
  },
  description: "Nevixs Technology builds custom business software and is developing an ERP platform for multi-business operations.",
  openGraph: {
    title: "Nevixs Technology",
    description: "Custom business software and a multi-business ERP platform from Nevixs Technology.",
    url: "https://nevixs.com",
    siteName: "Nevixs Technology",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://nevixs.com/#organization",
                name: "Nevixs Technology",
                url: "https://nevixs.com",
                logo: "https://nevixs.com/nevixs-mark.svg",
                email: "nevixstechnology@gmail.com",
                sameAs: ["https://www.instagram.com/nevixstechnology/"],
                address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
              },
              {
                "@type": "WebSite",
                "@id": "https://nevixs.com/#website",
                name: "Nevixs Technology",
                url: "https://nevixs.com",
                publisher: { "@id": "https://nevixs.com/#organization" },
              },
            ],
          }) }} />
      </body>
    </html>
  );
}
