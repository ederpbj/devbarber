export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [],
};

// Meu reducer
export const UserReducer = (state, action) => {
  switch (action.type) {
    // possibilita trocar avatar
    case 'setAvatar':
      return {...state, avatar: action.payload.avatar};
      break;
  
    default:
      return state;
  }
}