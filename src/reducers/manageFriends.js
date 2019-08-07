export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      // let newFriends = state.friends
      // newFriends.push(action.friend)
      // return {friends: newFriends}
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter(friend => friend.id !== action.id)
      return {friends: newFriends}
    default:
      return state
  }
}
