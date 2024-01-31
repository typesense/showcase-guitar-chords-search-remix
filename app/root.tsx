import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from '@remix-run/react';
import appCSS from './app.css';

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
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: appCSS },
];
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
export default function App() {
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
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(envVars.ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
