import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Guitar chords search Remix | Typesense' },
    {
      name: 'description',
      content:
        'Search thousands of guitar chord positions powered by Typesense and built with Remix',
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Search guitar chords</h1>
    </div>
  );
}
