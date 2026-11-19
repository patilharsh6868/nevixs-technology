"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Boxes, ContactRound, Users } from "lucide-react";

const workflows = [
  {
    id: "sales", label: "Customer to invoice", icon: ContactRound, team: "For sales & finance",
    title: "Keep the next step in sight.",
    description: "Follow the relationship, the proposal, and the invoice as parts of the same business conversation.",
    steps: [
      { title: "Know the customer", copy: "Start with the customer and the context behind their enquiry.", detail: "Customer relationships" },
      { title: "Shape the quote", copy: "Bring the proposed work and its commercial details into focus.", detail: "Quotes" },
      { title: "Follow the invoice", copy: "Keep the invoice close to the sales activity it belongs to.", detail: "Invoices" },
    ],
    href: "/erp#crm", link: "Explore customer workflows",
  },
  {
    id: "operations", label: "Purchase to production", icon: Boxes, team: "For purchasing & operations",
    title: "See the work behind the order.",
    description: "Look at suppliers, materials, and production together instead of treating each handoff as a separate task.",
    steps: [
      { title: "Plan the purchase", copy: "Start with the supplier and the materials your business needs.", detail: "Suppliers & purchasing" },
      { title: "Understand the stock", copy: "Keep inventory in the same operational picture as purchasing.", detail: "Inventory" },
      { title: "Connect production", copy: "Consider production work alongside the materials it depends on.", detail: "Production" },
    ],
    href: "/erp#erp", link: "Explore operational workflows",
  },
  {
    id: "people", label: "People to payroll", icon: Users, team: "For people teams & finance",
    title: "Give people work a connected home.",
    description: "Explore HR and payroll alongside your wider business, with room to discuss how your team's process fits.",
    steps: [
      { title: "Start with the team", copy: "Bring the people behind your business into the conversation.", detail: "People" },
      { title: "Follow HR work", copy: "Consider the everyday people workflows your team handles.", detail: "HR workflows" },
      { title: "Bring payroll closer", copy: "Discuss payroll in the context of your people and finance needs.", detail: "Payroll" },
    ],
    href: "/erp#payroll", link: "Explore people & payroll",
  },
];

export default function WorkflowExplorer() {
  const [selected, setSelected] = useState("sales");
  const workflow = workflows.find(({ id }) => id === selected);

  return (
    <section className="section journey-section" id="workflows" aria-labelledby="workflow-heading">
      <div className="container">
        <div className="section-heading journey-heading">
          <div><span className="eyebrow">WORKFLOW EXAMPLES</span><h2 className="section-title" id="workflow-heading">How the modules fit together</h2></div>
          <p className="body-copy">Choose a journey to explore how the different parts of Business OS fit together.</p>
        </div>
        <div className="journey-picker" role="group" aria-label="Choose a business workflow">
          {workflows.map(({ id, label, icon: Icon }) => (
            <button type="button" key={id} aria-pressed={selected === id} aria-controls="workflow-detail" onClick={() => setSelected(id)}>
              <Icon size={20} aria-hidden="true" />{label}
            </button>
          ))}
        </div>
        <div className="journey-detail" id="workflow-detail" aria-live="polite" aria-atomic="true">
          <div className="journey-intro"><span className="eyebrow">{workflow.team}</span><h3>{workflow.title}</h3><p>{workflow.description}</p></div>
          <ol className="journey-stages">
            {workflow.steps.map(({ title, copy, detail }, index) => (
              <li key={title}><span className="journey-step">0{index + 1}</span><span className="journey-detail-label">{detail}</span><h4>{title}</h4><p>{copy}</p></li>
            ))}
          </ol>
          <div className="journey-footer"><p>Illustrative workflow guide, not a live product screen. Review the details for your business in a demo.</p><Link className="text-action" href={workflow.href}>{workflow.link}<ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </div>
    </section>
  );
}
