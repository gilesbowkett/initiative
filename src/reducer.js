import {
  CLEAR_ALL,
  DELETE,
  ROLL,
} from './actions'

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * Math.floor(max));
}

const highScoresFirst = (a, b) => {if (a.roll > b.roll) return -1}

const initialState = {
  characters: [
    {
      name: 'Saber',
      roll: 20,
    },
    {
      name: 'Tohsaka',
      roll: 19,
    },
    {
      name: 'Emiya',
      roll: 1,
    },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ALL:
      return {
        ...state,
        characters: [],
      }

    case DELETE:
      const minusDeleted = []
      state.characters.forEach((e) => {
        if (e.name !== action.name) {
          minusDeleted.push(e)
        }
      })  
      return {
        ...state,
        characters: minusDeleted,
      }

    case ROLL:
      const chars = []
      state.characters.forEach((e) => {
        chars.push(e)
      })  
      chars.push({name: action.name, roll: getRandomInt(20)})

      return {
        ...state,
        characters: chars.sort(highScoresFirst),
      }

    default:
      return state
  }
}

export default reducer
