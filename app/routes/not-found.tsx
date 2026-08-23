import { NotFoundPage } from "~/components/404/404";
export default function Resume() {
  return (
    <div>
      <title>Page Not Found!</title>
      <meta property="og:title" content="404" />
      <meta
        name="description"
        content="This app is the best"
      />
      <NotFoundPage />
    </div>
  );
}