import { ContactPage } from "~/components/ContactPage/ContactPage";

export default function Resume() {
  return (
    <div>
      <title>Contact Me!</title>
      <meta property="og:title" content="Contact Page" />
      <meta
        name="description"
        content="This app is the best"
      />
      <ContactPage />
    </div>
  );
}