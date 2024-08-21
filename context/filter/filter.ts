import { createSlice, current } from '@reduxjs/toolkit';
import { stat } from 'fs';

import { removeIfExist } from '@/common/helpers/removeIfExist';
import { skillCategory } from '@/common/types/skill';

export type initialFilterState = {
  keyword: string;
  category: { title: skillCategory }[];
};

const filterSlice = createSlice({
  name: 'filter',

  initialState: {
    keyword: '',
    category: []
  } as initialFilterState,

  reducers: {
    typeHandler: (state, action) => {
      state.keyword = action.payload;
    },
    categoryHandler: (state, action) => {
      const curr_state = current(state);
      const isCategoryPresent = curr_state.category.some(cat => cat.title == action.payload.title);
      if (isCategoryPresent) {
        state.category = removeIfExist(curr_state.category, action.payload);
      } else {
        state.category = [action.payload, ...curr_state.category];
      }
    }
  }
});

export const { typeHandler, categoryHandler } = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;
