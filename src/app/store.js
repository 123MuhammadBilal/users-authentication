import { configureStore } from '@reduxjs/toolkit'
import auths from '../reducers/auths'

export const store = configureStore({
  reducer: {
    auths: auths,
  },
})