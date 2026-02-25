import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  fullname: '',
  email: '',
  phone: '',
  dob: '',
  gender: '',
  address: '',
  avatar: '',
  access_token: '',
  id: '',
  isAdmin: false,
}

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { username = '', fullname = '', dob = '', gender = '', email = '', access_token = '', phone = '', address = '', avatar = '', _id = '', isAdmin } = action.payload
      state.username = username;
      state.fullname = fullname;
      state.dob = dob;
      state.gender = gender;
      state.email = email;
      state.phone = phone;
      state.address = address;
      state.avatar = avatar;
      state.id = _id;
      state.access_token = access_token;
      state.isAdmin = isAdmin;
    },
    resetUser: (state) => {
      state.username = '';
      state.fullname = '';
      state.dob = '';
      state.gender = '';
      state.email = '';
      state.phone = '';
      state.address = '';
      state.avatar = '';
      state.id = '';
      state.access_token = '';
      state.isAdmin = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions

export default userSlide.reducer