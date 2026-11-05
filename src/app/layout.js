import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://nevixs.com"),
  title: {
    default: "NEVIXS Business OS | ERP, CRM, HR & Payroll Software",
    template: "%s | Nevixs Technologies",
  },
  description: "NEVIXS Business OS combines ERP, CRM, HR management, and payroll software in one connected workspace. Built by Nevixs Technologies in Pune, India.",
  icons: {
    icon: "/nevixs-mark.svg",
    shortcut: "/nevixs-mark.svg",
    apple: "/nevixs-mark.svg",
  },
  openGraph: {
    title: "NEVIXS Business OS | ERP, CRM, HR & Payroll Software",
    description: "Connect business operations, customer relationships, HR, and payroll with NEVIXS Business OS. Custom software services from Nevixs Technologies.",
    url: "https://nevixs.com",
    siteName: "Nevixs Technologies",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            document.documentElement.classList.toggle("dark-mode", localStorage.getItem("nevixs-theme") === "dark");
          } catch (error) {
            console.warn("Unable to read the saved Nevixs theme.", error);
          }
        ` }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://nevixs.com/#organization",
                name: "Nevixs Technologies",
                url: "https://nevixs.com",
                logo: "https://nevixs.com/nevixs-mark.svg",
                email: "support@nevixs.com",
                sameAs: ["https://www.instagram.com/nevixstechnology/"],
                address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
              },
              {
                "@type": "WebSite",
                "@id": "https://nevixs.com/#website",
                name: "Nevixs Technologies",
                url: "https://nevixs.com",
                publisher: { "@id": "https://nevixs.com/#organization" },
              },
            ],
          }) }} />
      </body>
    </html>
  );
}
