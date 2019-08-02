export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {...state, friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let array = state.friends
      let newArray = array.filter(x => !(x.id === action.id))
      return {...state, friends: newArray}
    default:
    return state
  }

}
