import type { Route } from "./+types/home";
import { HomePage } from "~/components/HomePage/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - John Charles" },
    { name: "description", content: "Welcome to My Story!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
