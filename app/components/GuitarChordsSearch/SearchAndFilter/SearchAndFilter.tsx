import { RefinementList } from 'react-instantsearch';
import type { LinksFunction } from '@remix-run/node';
import style from './SearchAndFilter.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: style }];

export default function SearchAndFilter() {
  return (
    <aside className='SearchAndFilter'>
      <h3>Key</h3>
      <RefinementList
        attribute='key'
        sortBy={['name']}
        showMore
        limit={7}
        showMoreLimit={100}
      />
      <h3>Suffix</h3>
      <RefinementList
        attribute='suffix'
        showMore
        limit={8}
        showMoreLimit={100}
        searchable
        searchablePlaceholder='Search suffixes...'
      />
      <h3>Capo</h3>
      <RefinementList attribute='positions.capo' />
    </aside>
  );
}
