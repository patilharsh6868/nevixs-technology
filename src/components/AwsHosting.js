import Image from "next/image";

export function AwsLogo({ className = "aws-logo" }) {
  return <Image src="/powered-by-aws.png" alt="Powered by AWS" className={className} width={200} height={72} loading="eager" unoptimized />;
}

export function AwsStrip() {
  return (
    <div className="aws-strip">
      <AwsLogo className="aws-logo aws-logo-small" />
      <p>Hosted on Amazon Web Services in the Asia Pacific (Mumbai) Region</p>
    </div>
  );
}

export default function AwsHosting() {
  return (
    <section className="section aws-hosting" id="infrastructure" aria-labelledby="aws-hosting-heading">
      <div className="container aws-hosting-card">
        <div className="aws-hosting-logo"><AwsLogo /></div>
        <div className="aws-hosting-copy">
          <span className="eyebrow">Infrastructure</span>
          <h2 id="aws-hosting-heading">Built on Amazon Web Services</h2>
          <p>Business OS runs on AWS cloud infrastructure in the Asia Pacific (Mumbai) Region, so your team can work from any browser.</p>
          <ul className="aws-facts">
            <li><strong>Cloud provider</strong><span>Amazon Web Services (AWS)</span></li>
            <li><strong>Region</strong><span>Asia Pacific (Mumbai)</span></li>
            <li><strong>Access</strong><span>Web browser at app.nevixs.com</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
