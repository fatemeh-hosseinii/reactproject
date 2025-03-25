import { configureStore } from '@reduxjs/toolkit'
import NabarSlice from "./NavbarSlice"
import ServicesSlice from "./ServicesSlice"
import SuccessProjectSlice from "./SuccesProjectSlice"
export const store = configureStore({
  reducer: {
    Navbar:NabarSlice,
    Service:ServicesSlice,
    Project:SuccessProjectSlice
  },
})