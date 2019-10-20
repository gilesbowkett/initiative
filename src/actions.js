export const CLEAR_ALL = 'CLEAR_ALL'
export const DECREMENT = 'DECREMENT'
export const DELETE = 'DELETE'
export const INCREMENT = 'INCREMENT'
export const MANUAL_ROLL = 'MANUAL_ROLL'
export const ROLL = 'ROLL' // FIXME: DIGITAL_ROLL?

export const clearAll = () => (
  { type: CLEAR_ALL }
)

export const dec = () => (
  { type: DECREMENT }
)

export const del = (name) => (
  { type: DELETE, name }
)

export const inc = () => (
  { type: INCREMENT }
)

export const manualRoll = (name, amount) => (
  {type: MANUAL_ROLL, manualRoll: { name, amount }}
)

export const roll = (name) => (
  {type: ROLL, name}
)
