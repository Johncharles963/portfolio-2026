import type { Route } from "./+types/contact";
import { ContactPage } from "~/components/ContactPage/ContactPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - John Charles" },
    {
      name: "description",
      content: "Get in touch with John Charles about software engineering opportunities and collaboration.",
    },
    { property: "og:title", content: "Contact - John Charles" },
    {
      property: "og:description",
      content: "Get in touch with John Charles about software engineering opportunities and collaboration.",
    },
  ];
}

export default function Resume() {
  return (
    <div>
      <ContactPage />
    </div>
  );
}