import { createSlice } from '@reduxjs/toolkit'

export const auths = createSlice({
  name: 'auths',
  initialState:{
    auths:[]
  },
  reducers: {
    
    onsignIn: (state , action) => {
    },
    onsignUp: (state , action) => {
        state.auths.push(action.payload)
        localStorage.setItem('users' , JSON.stringify(state.auths))
    },
  },
})

export const { onsignIn, onsignUp} = auths.actions

export default auths.reducer