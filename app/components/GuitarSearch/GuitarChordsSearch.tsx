import { useEffect, useState } from 'react';
import { Configure, InstantSearch, InfiniteHits } from 'react-instantsearch';
import SearchAndFilter, {
  links as SearchAndFilterStyles,
} from './SearchAndFilter/SearchAndFilter';
import HitItem, { links as HitItemStyles } from './HitItem/HitItem';
import { typesenseInstantsearchAdapter } from '../../utils/typesense';
import type TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';
import type { LinksFunction } from '@remix-run/node';

//https://remix.run/docs/en/main/guides/migrating-react-router-app#client-only-components
let isHydrating = true;

export const links: LinksFunction = () => [
  ...HitItemStyles(),
  ...SearchAndFilterStyles(),
];

export default function GuitarChordsSearch() {
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [searchAdapter, setSearchAdapter] =
    useState<TypesenseInstantsearchAdapter>();

  useEffect(() => {
    setSearchAdapter(typesenseInstantsearchAdapter());
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  if (isHydrated && searchAdapter) {
    return (
      <InstantSearch
        indexName='guitar-chords'
        searchClient={searchAdapter.searchClient}
        future={{ preserveSharedStateOnUnmount: true }}
      >
        <Configure hitsPerPage={12} />
        <SearchAndFilter />
        <InfiniteHits hitComponent={HitItem} showPrevious={false} />
      </InstantSearch>
    );
  } else {
    return <div>Loading...</div>;
  }
}
