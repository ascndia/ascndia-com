import { skillCategory } from '@/common/constant/skill';
import { removeIfExist } from '@/common/helpers/removeIfExist';
import { createSlice, } from '@reduxjs/toolkit';

export type initialFilterState = {
    keyword:string,
    category: skillCategory []
}

const filterSlice = createSlice({
    name:'filter',

    initialState:{
        keyword:'',
        category:[]
    } as initialFilterState,

    reducers:{
        typeHandler: (state, action) => {
            state.keyword = action.payload     
        },
        categoryHandler:(state,action) => {
            if(state.category.includes(action.payload as skillCategory)){
                state.category = removeIfExist(state.category,action.payload)
            } else {
                state.category = [action.payload, ...state.category]
            }
        }
    }
})

export const { typeHandler, categoryHandler } = filterSlice.actions
const filterReducer = filterSlice.reducer;
export default filterReducer;