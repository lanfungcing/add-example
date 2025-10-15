import test from 'ava'

import { add } from '../index'

test('add test', (t) => {
  t.is(add(1, 2), 3)
})
