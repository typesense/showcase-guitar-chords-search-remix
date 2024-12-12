import type { MetaFunction } from '@remix-run/node';
import Heading from '../components/Heading/Heading';
import '../styles/index.css';
import { Suspense, lazy } from 'react';

const GuitarChordsSearch = lazy(
  () => import('../components/GuitarChordsSearch/GuitarChordsSearch')
);
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
    <main>
      <Heading />
      <div id='flex_row'>
        <Suspense fallback={<p>Loading...</p>}>
          <GuitarChordsSearch />
        </Suspense>
      </div>
    </main>
  );
}
