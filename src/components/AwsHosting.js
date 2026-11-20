import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const LOGO_FILES = ["powered-by-aws.svg", "powered-by-aws.png"];

// The official logo must be downloaded from AWS co-marketing tools by an account holder,
// so the badge only renders once that file has been added to public/.
function findLogo() {
  return LOGO_FILES.find((file) => fs.existsSync(path.join(process.cwd(), "public", file)));
}

export default function AwsHosting() {
  const logo = findLogo();

  return (
    <section className="aws-hosting" aria-label="Hosting">
      <div className="container aws-hosting-inner">
        {logo && <Image src={`/${logo}`} alt="Powered by AWS" className="aws-logo" width={160} height={60} unoptimized />}
        <div>
          <p className="aws-hosting-text">Business OS is hosted on Amazon Web Services (AWS) in the Asia Pacific (Mumbai) Region.</p>
          <p className="aws-trademark">Amazon Web Services, AWS, and the Powered by AWS logo are trademarks of Amazon.com, Inc. or its affiliates.</p>
        </div>
      </div>
    </section>
  );
}
