import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as modelService from '../../../api/model-api';

const initialState = {
    modelListWithBagType: [],
    modelListWithBagTypeFilter: [],
    groupColorFilter: {},
    priceFilter: "",
    isLoading: true
};

export const modelListWithBagTypeAsync = createAsyncThunk(
    "model/modelListWithBagTypeAsync",
    async (id, thunkApi) => {
      try {
        const res = await modelService.getProductByBagtype(id);
        return res.data;
      } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message);
      }
    }
);


  const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
      searchProduct: (state, action) => {
        const groupColorFilter = action.payload
        state.groupColorFilter = action.payload;
        if(Object.keys(state.groupColorFilter).length === 0) {
          if(state.priceFilter.trim() === "") state.modelListWithBagTypeFilter = state.modelListWithBagType
          else if (state.priceFilter==21) state.modelListWithBagTypeFilter = [...state.modelListWithBagType].sort((a,b) => (b.price - a.price))
          else if (state.priceFilter==22) state.modelListWithBagTypeFilter = [...state.modelListWithBagType].sort((a,b) => (a.price - b.price))
        }
        else {
          state.modelListWithBagTypeFilter = state.modelListWithBagType.filter((product) => Object.values(groupColorFilter).includes(String(product?.Color?.groupColorId)))
          if (state.priceFilter==21) state.modelListWithBagTypeFilter = state.modelListWithBagTypeFilter.sort((a,b) => (b.price - a.price))
          else if (state.priceFilter==22) state.modelListWithBagTypeFilter = state.modelListWithBagTypeFilter.sort((a,b) => (a.price - b.price))
        }
      },
      sortPrice: (state, action) => {
        const priceFilter = action.payload
        state.priceFilter = action.payload;
        if(priceFilter.trim() === "") {
          if (Object.keys(state.groupColorFilter).length === 0) state.modelListWithBagTypeFilter = state.modelListWithBagType
          else state.modelListWithBagTypeFilter = state.modelListWithBagType.filter((product) => Object.values(state.groupColorFilter).includes(String(product?.Color?.groupColorId)))
        }
        else {
          if (priceFilter==21) state.modelListWithBagTypeFilter = state.modelListWithBagTypeFilter.sort((a,b) => (b.price - a.price))
          else if (priceFilter==22) state.modelListWithBagTypeFilter = state.modelListWithBagTypeFilter.sort((a,b) => (a.price - b.price))
        } 
      },
    },
    extraReducers: (builder) =>
      builder
        .addCase(modelListWithBagTypeAsync.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(modelListWithBagTypeAsync.fulfilled, (state, action) => {
          state.modelListWithBagType = action.payload;
          state.modelListWithBagTypeFilter = state.modelListWithBagType
          state.isLoading = false;
        })
        .addCase(modelListWithBagTypeAsync.rejected, (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        })
  });
  
  export default modelSlice.reducer;

  export const {
    searchProduct,
    sortPrice,
  } = modelSlice.actions;