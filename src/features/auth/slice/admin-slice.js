import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as adminService from "../../../api/admin-api";

const initialState = {
  bagTypeList: [],
  groupColorList: [],
  colorList: [],
  modelList: [],
  productList: [],
  error: null,
  loading: false,
  user: null,
  initialLoading: false,
};

export const bagTypeListAsync = createAsyncThunk(
  "admin/bagTypeListAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getBagType();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const groupColorListAsync = createAsyncThunk(
  "admin/groupColorListAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getGroupColor();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const colorListAsync = createAsyncThunk(
  "admin/colorListAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getColor();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const modelListAsync = createAsyncThunk(
  "admin/modelListAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getModel();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const productListAsync = createAsyncThunk(
  "admin/productListAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getProduct();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    removeBagType: (state, action) => {
      const bagTypeId = action.payload;
      state.bagTypeList = state.bagTypeList.filter(
        (bagType) => bagType.id != bagTypeId
      );
    },
    addBagType: (state, action) => {
      const newBagType = action.payload;
      state.bagTypeList.unshift(newBagType);
    },
    editBagType: (state, action) => {
      const { bagTypeId, updateBagType } = action.payload;
      const index = state.bagTypeList.findIndex((el) => el.id == bagTypeId);
      state.bagTypeList[index].name = updateBagType.name;
    },
    removeColor: (state, action) => {
      const colorId = action.payload;
      state.colorList = state.colorList.filter((color) => color.id != colorId);
    },
    addColor: (state, action) => {
      const newColor = action.payload;
      state.colorList.unshift(newColor);
    },
    editColor: (state, action) => {
      const { colorId, updateColorObj } = action.payload;
      const index = state.colorList.findIndex((el) => el.id == colorId);
      state.colorList[index] = updateColorObj;
    },
    addModel: (state, action) => {
      const newModel = action.payload;
      state.modelList.unshift(newModel);
    },
    removeModel: (state, action) => {
      const { modelId, updateModel } = action.payload;
      state.modelList = state.modelList.filter((model) => model.id != modelId);
    },
    editModel: (state, action) => {
      const { modelId, updateModelObj } = action.payload;
      const index = state.modelList.findIndex((el) => el.id == modelId);
      state.modelList[index] = updateModelObj;
    },
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.productList.unshift(newProduct);
    },
    removeProduct: (state, action) => {
      const { productId, updateProduct } = action.payload;
      console.log(state.productList)
      state.productList = state.productList.filter((product) => product.id != productId);
    },
    editProduct: (state, action) => {
      const { productId, updateProductObj } = action.payload;
      const index = state.productList.findIndex((el) => el.id == productId);
      state.productList[index] = updateProductObj;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(bagTypeListAsync.fulfilled, (state, action) => {
        state.bagTypeList = action.payload;
        state.initialLoading = false;
      })
      .addCase(bagTypeListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(groupColorListAsync.fulfilled, (state, action) => {
        state.groupColorList = action.payload;
        state.initialLoading = false;
      })
      .addCase(groupColorListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(colorListAsync.fulfilled, (state, action) => {
        state.colorList = action.payload;
        state.initialLoading = false;
      })
      .addCase(colorListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(modelListAsync.fulfilled, (state, action) => {
        state.modelList = action.payload;
        state.initialLoading = false;
      })
      .addCase(modelListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
      .addCase(productListAsync.fulfilled, (state, action) => {
        state.productList = action.payload;

        console.log(action.payload)
        state.initialLoading = false;
      })
      .addCase(productListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      })
});

export default adminSlice.reducer;

export const {
  removeBagType,
  addBagType,
  editBagType,
  removeColor,
  addColor,
  editColor,
  addModel,
  removeModel,
  editModel,
  addProduct,
  removeProduct,
  editProduct
} = adminSlice.actions;

export function createColor(newColorObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.createColor(newColorObj);
      dispatch(addColor(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function createBagtype(bag) {
  return async (dispatch) => {
    try {
      const newBagType = { name: bag };
      const response = await adminService.createBagtype(newBagType);
      dispatch(addBagType(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateBagtype(bagTypeId, bag) {
  return async (dispatch) => {
    try {
      const updateBagType = { name: bag };
      const response = await adminService.updateBagtype(
        bagTypeId,
        updateBagType
      );
      dispatch(editBagType({ bagTypeId, updateBagType }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateColor(colorId, updateColorObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.updateColor(colorId, updateColorObj);
      dispatch(editColor({ colorId, updateColorObj }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteBagtype(bagTypeId) {
  return async (dispatch) => {
    try {
      await adminService.deleteBagtype(bagTypeId);
      dispatch(removeBagType(bagTypeId));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteColor(colorId) {
  return async (dispatch) => {
    try {
      await adminService.deleteColor(colorId);
      dispatch(removeColor(colorId));
    } catch (error) {
      console.log(error);
    }
  };
}

export function createModel(newModelObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.createModel(newModelObj);
      dispatch(addModel(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteModel(modelId, updateModelObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.deleteModel(modelId, updateModelObj);
      dispatch(removeModel({ modelId, updateModelObj }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateModel(modelId, updateModelObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.updateModel(modelId, updateModelObj);
      dispatch(editModel({ modelId, updateModelObj }));
    } catch (error) {
      console.log(error);
    }
  };
}

export function createProduct(newProductObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.createProduct(newProductObj);
      dispatch(addProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteProduct(productId, updateProductObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.deleteProduct(productId, updateProductObj);
      console.log(response.data)
      dispatch(removeProduct({productId, updateProductObj}));
    } catch (error) {
      console.log(error);
    }
  };
}


export function updateProduct(productId, updateProductObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.updateProduct(productId, updateProductObj);
      dispatch(editProduct({ productId, updateProductObj }));
    } catch (error) {
      console.log(error);
    }
  };
}