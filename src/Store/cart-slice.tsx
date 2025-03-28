import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItemsTypes = {

    id: string,
    title: string,
    price: number,
    quantity: number

}

type CartStates = {
    items: CartItemsTypes[]
}

const initialState: CartStates = {
    items: []
}


export const Cartslice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(
            state, 
            action: PayloadAction<{id: string; title:string; price:number}>){

                const itemIndex = state.items.findIndex((item)=> item.id === action.payload.id)

                if(itemIndex >=0){
                    state.items[itemIndex].quantity++
                }

                else{
                    state.items.push({...action.payload, quantity:1})
                }
            },
        removeFromCart(state, action: PayloadAction<string>){

            const itemIndex = state.items.findIndex((item)=> item.id === action.payload)

            if(state.items[itemIndex].quantity === 1){
                state.items.slice(itemIndex, 1)
            }
            else{
                state.items[itemIndex].quantity--
            }

        }
    }
})

export const {addToCart,removeFromCart } = Cartslice.actions