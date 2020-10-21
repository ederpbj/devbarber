export const initialState = {
  avatar: '',
  favorites: [],
  appointments: []
};

// Meu reducer
export const UserReducer = (state, action) => {
  // possibilita trocar avatar
  switch (action.type) {
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };
      break;

    default:
      return state;
  }
};
