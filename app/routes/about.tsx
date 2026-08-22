import { AboutPage } from "~/components/AboutPage/AboutPage";

export default function Resume() {
  return (
    <div>
      <title>About John!</title>
      <meta property="og:title" content="Contact Page" />
      <meta
        name="description"
        content="This app is the best"
      />
      <AboutPage />
    </div>
  );
}