import drums from './drums'
import baseline from './baseline'

import { Song, Sequence } from '../../helpers/song'
import { kick, snare, base, hihat } from '../../instruments'

Song({
  name: 'Seven Nation Army',
  bpm: 120,
  repeat: 4000
})

Sequence(kick, drums.notes)
Sequence(snare, drums.notes.filter((note, index) => index % 2))
Sequence(hihat, drums.notes.filter((note, index) => index % 2 === 0))
Sequence(base, baseline.notes)
