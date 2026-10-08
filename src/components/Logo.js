import Link from "next/link";
import Image from "next/image";

export default function Logo({ light = false }) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="Nevixs Technology home">
      <span className="brand-mark" aria-hidden="true">
        <Image src="/nevixs-mark.svg" width={42} height={42} alt="" />
      </span>
      <span className="brand-name">Nevixs<small>TECHNOLOGY</small></span>
    </Link>
  );
}
