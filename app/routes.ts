import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./components/Layout/Layout.tsx", [
        index("routes/home.tsx"),
        route("resume", "./routes/resume.tsx"),
        route("about", "./routes/about.tsx"),
        route("contact", "./routes/contact.tsx"),
        route("*", "routes/not-found.tsx"),
    ])

] satisfies RouteConfig;
