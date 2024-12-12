import { Configure, InstantSearch, InfiniteHits } from 'react-instantsearch';
import SearchAndFilter from './SearchAndFilter/SearchAndFilter';
import HitItem from './HitItem/HitItem';
import { typesenseInstantsearchAdapter } from '../../utils/typesense';

export default function GuitarChordsSearch() {
  return (
    <InstantSearch
      indexName='guitar-chords'
      searchClient={typesenseInstantsearchAdapter.searchClient}
      future={{ preserveSharedStateOnUnmount: true }}
    >
      <Configure hitsPerPage={12} />
      <SearchAndFilter />
      <InfiniteHits hitComponent={HitItem} showPrevious={false} />
    </InstantSearch>
  );
}
