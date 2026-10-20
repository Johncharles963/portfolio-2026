import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let statusCode = 500;
  let title = "Something Went Wrong";
  let message = "An unexpected error occurred on the server.";

  // Check if it's a specific thrown router response (like a 404 or 500)
  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    title = error.status === 404 ? "Page Not Found" : "Server Error";
    message = error.data || error.statusText;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <html lang="en">
      <head>
        <title>{statusCode} - {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Include your tailwind/styles links here */}
      </head>
      <body className="bg-slate-50 flex items-center justify-center min-h-screen">
        <main className="max-w-md w-full p-8 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
          
          {/* Status Code Badge */}
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
            Error {statusCode}
          </span>

          <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>
          <p className="text-slate-600 mb-6 text-sm">
            {message}
          </p>

          <Link 
            to="/" 
            className="inline-block w-full py-2.5 px-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
          >
            Return Home
          </Link>

        </main>
      </body>
    </html>
  );
}