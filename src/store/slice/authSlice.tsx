import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface MemberState{
    memId:number,
    email:string,
    nickName:string,
    phone:string,
    address1:string,
    address2:string,
    address3:string,
    role:string
}

const initialState: MemberState ={
    memId:0,
    email:'',
    nickName:'',
    phone:'',
    address1:'',
    address2:'',
    address3:'',
    role:''
}

const memberSlice = createSlice({
    name:'member',
    initialState,
    reducers: {
        DELETE_MEMBER: (state) => {
            state.memId = 0;
            state.email = '';
            state.phone = '';
            state.nickName = '';
            state.address1 = '';
            state.address2 = '';
            state.address3 = '';
            state.role = '';
        },
        SET_MEMBER: (state, action: PayloadAction<MemberState>) => {
            state.memId = action.payload.memId;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.nickName = action.payload.nickName;
            state.address1 = action.payload.address1;
            state.address2 = action.payload.address2;
            state.address3 = action.payload.address3;
            state.role = action.payload.role;
        },
    },

})

export const {SET_MEMBER,DELETE_MEMBER} = memberSlice.actions
export default memberSlice.reducer
