import {configureStore} from '@reduxjs/toolkit'
import { Cartslice } from './cart-slice'

export const store = configureStore({
    reducer:{
        cart: Cartslice.reducer
    }
})

export type Rootstate = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch