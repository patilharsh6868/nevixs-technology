"use client";

import { useEffect, useRef } from "react";

export default function ProductVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <figure className="product-video">
      <div className="preview-chrome" aria-hidden="true"><span /><span /><span /></div>
      <video ref={videoRef} muted loop playsInline controls preload="metadata" poster="/erp-overview.webp" width="1408" height="792" aria-label="Business OS walkthrough: a sample project moving through scope approval, procurement, production, inspection, dispatch and handover stages">
        <source src="/erp-overview.webm" type="video/webm" />
        <source src="/erp-overview.mp4" type="video/mp4" />
      </video>
      <figcaption className="preview-toolbar"><span>Business OS project approvals &middot; Sample data</span></figcaption>
    </figure>
  );
}
