import type { Route } from "./+types/about";
import { AboutPage } from "~/components/AboutPage/AboutPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - John Charles" },
    {
      name: "description",
      content: "Learn about John Charles's path from the plumbing trade to software engineering.",
    },
    { property: "og:title", content: "About - John Charles" },
    {
      property: "og:description",
      content: "Learn about John Charles's path from the plumbing trade to software engineering.",
    },
  ];
}

export default function Resume() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}