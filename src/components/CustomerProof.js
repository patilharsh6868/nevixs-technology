import { isTodo, todo } from "@/lib/todo";

// Replace with real customer names, quotes and permission before publishing.
const proof = todo("customer logos or testimonials with written permission");

export default function CustomerProof() {
  if (isTodo(proof)) return null;
  return <section className="section customer-proof">{proof}</section>;
}
