import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "start",
  action
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  align?: "start" | "center";
  action?: ReactNode;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""} ${align === "center" ? "section-heading--center" : ""}`}>
      <div>
        <span className="eyebrow"><i aria-hidden="true" />{eyebrow}</span>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action}
    </div>
  );
}
