import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from '@remix-run/react';
import './app.css';

declare global {
  interface Window {
    ENV: {
      PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY: string;
      PUBLIC_TYPESENSE_HOST: string;
      PUBLIC_TYPESENSE_PORT: string;
      PUBLIC_TYPESENSE_PROTOCOL: string;
    };
  }
}

export async function loader() {
  return json({
    ENV: {
      PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY:
        process.env.PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY,
      PUBLIC_TYPESENSE_HOST: process.env.PUBLIC_TYPESENSE_HOST,
      PUBLIC_TYPESENSE_PORT: process.env.PUBLIC_TYPESENSE_PORT,
      PUBLIC_TYPESENSE_PROTOCOL: process.env.PUBLIC_TYPESENSE_PROTOCOL,
    },
  });
}

import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const envVars = useLoaderData<typeof loader>();

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(envVars.ENV)}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
