export const CLEAR_ALL = 'CLEAR_ALL'
export const DECREMENT = 'DECREMENT'
export const DELETE = 'DELETE'
export const INCREMENT = 'INCREMENT'
export const ROLL = 'ROLL'

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

export const roll = (name) => (
  {type: ROLL, name}
)
