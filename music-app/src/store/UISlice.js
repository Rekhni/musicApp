import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuVisible: false,
  isPlayervisible: false,
  token: '',
};
export const UISlice = createSlice({
  name: 'UI',
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => ({ ...state, isMenuVisible: !state.isMenuVisible }),
    setPlayerVisible: (state) => ({
      ...state, 
      isPlayervisible: true,
    }),
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { toggleMenu, setPlayerVisible, setToken } = UISlice.actions;
export default UISlice.reducer;