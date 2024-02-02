import type { MetaFunction, LinksFunction } from '@remix-run/node';
import Heading, { links as HeadingStyles } from '../components/Heading/Heading';
import GuitarChordsSearch, {
  links as GuitarChordsSearchStyles,
} from '../components/GuitarSearch/GuitarChordsSearch';
import indexCSS from '../styles/index.css';

export const links: LinksFunction = () => [
  ...HeadingStyles(),
  ...GuitarChordsSearchStyles(),
  { rel: 'stylesheet', href: indexCSS },
];

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
        <GuitarChordsSearch />
      </div>
    </main>
  );
}
