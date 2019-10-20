export const ROLL = 'ROLL'
export const DELETE = 'DELETE'
export const CLEAR_ALL = 'CLEAR_ALL'

export const clearAll = () => (
  { type: CLEAR_ALL }
)

export const del = (name) => (
  { type: DELETE, name }
)

export const roll = (name) => (
  {type: ROLL, name}
)
