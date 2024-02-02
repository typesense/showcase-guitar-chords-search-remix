import { _chordPosition } from '../../../../types/schema';
// @ts-expect-error library doesnt have ts support
import Chord from '@tombatossals/react-chords/lib/Chord/index.js';

const instrument = {
  strings: 6,
  fretsOnChord: 4,
  name: 'Guitar',
  keys: [],
  tunings: {
    standard: ['E', 'A', 'D', 'G', 'B', 'E'],
  },
};
export default function DrawChord({ chord }: { chord: _chordPosition }) {
  return (
    <div className='DrawChord'>
      <Chord.default chord={chord} instrument={instrument} lite={false} />
    </div>
  );
}
