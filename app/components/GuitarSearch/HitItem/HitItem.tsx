import { _GuitarChord } from '../../../types/schema';
import DrawChord from './DrawChord/DrawChord';
import type { LinksFunction } from '@remix-run/node';
import style from './HitItem.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: style }];

export default function HitItem({ hit }: { hit: _GuitarChord }) {
  const chord = hit.positions[0];
  const posCount = hit.positions.length;
  return (
    <div className='HitItem'>
      <h2>{hit.key + hit.suffix}</h2>
      <DrawChord chord={chord} />
      <div id='posCount'>
        {posCount > 1 ? `${posCount} positions` : '1 position'}{' '}
      </div>
    </div>
  );
}
