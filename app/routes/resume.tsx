import type { Route } from "./+types/resume";
import { ResumePage } from "~/components/ResumePage/ResumePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume - John Charles" },
    {
      name: "description",
      content: "Explore John Charles's software engineering experience, technical skills, and education.",
    },
    { property: "og:title", content: "Resume - John Charles" },
    {
      property: "og:description",
      content: "Explore John Charles's software engineering experience, technical skills, and education.",
    },
  ];
}

export default function Resume() {
  return (
    <div>
      <ResumePage />
    </div>
  );
}