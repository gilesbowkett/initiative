import {
  CLEAR_ALL,
  DECREMENT,
  DELETE,
  INCREMENT,
  ROLL,
} from './actions'

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * Math.floor(max));
}

const highScoresFirst = (a, b) => {if (a.roll > b.roll) return -1}

const initialState = {
  modifier: 0,
  characters: [
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ALL:
      return initialState

    case DECREMENT:
      const decMod = state.modifier - 1
      return {
        ...state,
        modifier: decMod,
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

    case INCREMENT:
      const incMod = state.modifier + 1
      return {
        ...state,
        modifier: incMod,
      }

    case ROLL:
      const chars = []
      state.characters.forEach((e) => {
        chars.push(e)
      })  
      chars.push({
        name: action.name,
        roll: state.modifier + getRandomInt(20),
      })

      return {
        ...state,
        characters: chars.sort(highScoresFirst),
        modifier: 0,
      }

    default:
      return state
  }
}

export default reducer
