import { createSlice } from "@reduxjs/toolkit";




export const appSlice = createSlice({
    name:'appSlice',
    initialState:{
        friends:[],
        fullname:'',
        count:0,
        cart: []
    },

    reducers:{
        increaseCount: (state)=>{
             state.count++
        },

        increaseByNum:(state, action)=>{
            state.count = state.count+action.payload
        },

        changeName:(state)=>{
            state.fullname = 'Pampam'
        },

        addToCart:(state, action)=>{
            let something = state.cart
            something.push(action.payload);
        }

    }


})
export const {increaseCount, increaseByNum, addToCart} = appSlice.actions
export default appSlice.reducer;