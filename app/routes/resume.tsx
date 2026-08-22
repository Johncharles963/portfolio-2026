import { ResumePage } from "~/components/ResumePage/ResumePage";

export default function Resume() {
  return (
    <div>
      <title>John Charles Resume</title>
      <meta property="og:title" content="Very cool app" />
      <meta
        name="description"
        content="This app is the best"
      />
      <ResumePage />
    </div>
  );
}