import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as adminService from "../../../api/admin-api";

const initialState = {
  bagTypeList: [],
  bagTypeListFilter: [],
  groupColorList: [],
  colorList: [],
  colorListFilter: [],
  searchColorValue: "",
  colourList: [],
  colourListFilter: [],
  searchColourValue: "",
  searchBagTypeValue: "",
  searchModelValue: "",
  modelList: [],
  modelListFilter: [],
  productList: [],
  dashboard:[],
  error: null,
  isLoading: true,
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

export const groupColourListAsync = createAsyncThunk(
  "admin/groupColourListAsync",
  async (_, thunkApi) => {
    try {
      const res = await adminService.getGroupColorWithColor()
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

export const dashboardAsync = createAsyncThunk(
  "admin/dashboardAsync",
  async (date, thunkApi) => {
    try {
      const res = await adminService.getDashboard(date);
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
      state.bagTypeList = state.bagTypeList.filter((bagType) => bagType.id != bagTypeId);
      state.bagTypeListFilter = state.bagTypeList.filter((bag) => bag.name.toLowerCase().includes(state.searchBagTypeValue.toLowerCase()))
    },
    addBagType: (state, action) => {
      const newBagType = action.payload;
      state.bagTypeList.unshift(newBagType);
      state.bagTypeListFilter = state.bagTypeList.filter((bag) => bag.name.toLowerCase().includes(state.searchBagTypeValue.toLowerCase()))
    },
    editBagType: (state, action) => {
      const { bagTypeId, updateBagType } = action.payload;
      const index = state.bagTypeList.findIndex((el) => el.id == bagTypeId);
      state.bagTypeList[index].name = updateBagType.name;
      state.bagTypeListFilter = state.bagTypeList.filter((bag) => bag.name.toLowerCase().includes(state.searchBagTypeValue.toLowerCase()))
    },
    searchBagType: (state, action) => {
      const searchValue = action.payload
      state.searchBagTypeValue = action.payload;
      state.bagTypeListFilter = state.bagTypeList.filter((bag) => bag.name.toLowerCase().includes(searchValue.toLowerCase()))
    },
    removeColor: (state, action) => {
      const colorId = action.payload;
      state.colorList = state.colorList.filter((color) => color.id != colorId);
      state.colorListFilter = state.colorList.filter((color) => color.name.toLowerCase().includes(state.searchColorValue.toLowerCase()) || color.GroupColor?.name.toLowerCase().includes(state.searchColorValue.toLowerCase()))
    },
    removeColour: (state, action) => {
      const {colorId, groupColorId} = action.payload;
      const indexNewListInGroupColor = state.colourList.findIndex(el => el.id == groupColorId)
      state.colourList[indexNewListInGroupColor].Colors = state.colourList[indexNewListInGroupColor].Colors.filter(el => el.id != colorId)
      state.colourListFilter = state.colourList.filter((color) => color.name.toLowerCase().includes(state.searchColourValue.toLowerCase()))
    },
    addColour: (state, action) => {
      const newColor = action.payload;
      const indexGroupColor = state.colourList.findIndex((el) => el.id == newColor.groupColorId);
      state.colourList[indexGroupColor].Colors.unshift(newColor)
      state.colourListFilter = state.colourList.filter((color) => color.name.toLowerCase().includes(state.searchColourValue.toLowerCase()))
    },
    editColour: (state, action) => {
      const { colorId, updateColorObj } = action.payload;
      console.log("updateColorObj in slice", updateColorObj)
      const indexGroupColor = state.colourList.findIndex((el) => el.id == updateColorObj.groupColorId);
      const groupColor = JSON.parse(JSON.stringify(state.colourList[indexGroupColor]))
      console.log(indexGroupColor, groupColor)
      const indexColor = groupColor.Colors.findIndex(el => el.id == colorId)
      console.log(indexGroupColor, "dddd", indexColor)
      console.log("rrrrrrrrrrr", groupColor.Colors[indexColor])
      groupColor.Colors[indexColor] = updateColorObj
      console.log("ddddddddddd", groupColor.Colors[indexColor])
      console.log("eeeeeeeeeee", groupColor)
      state.colourList[indexGroupColor] = groupColor
      state.colourListFilter = state.colourList.filter((color) => color.name.toLowerCase().includes(state.searchColourValue.toLowerCase()))
    },
    addColor: (state, action) => {
      const newColor = action.payload;
      const groupColor = JSON.parse(JSON.stringify(state.groupColorList))
      const indexGroupColor = groupColor.findIndex((el) => el.id == newColor.groupColorId);
      const groupColorNow = groupColor[indexGroupColor]
      state.colorList.unshift({...newColor, GroupColor: groupColorNow});
      state.colorListFilter = state.colorList.filter((color) => color.name.toLowerCase().includes(state.searchColorValue.toLowerCase()) || color.GroupColor?.name.toLowerCase().includes(state.searchColorValue.toLowerCase()))
    },

    editColor: (state, action) => {
      const { colorId, updateColorObj } = action.payload;
      const index = state.colorList.findIndex((el) => el.id == colorId)
      const groupColor = JSON.parse(JSON.stringify(state.groupColorList))
      const indexGroupColor = groupColor.findIndex((el) => el.id == updateColorObj.groupColorId);
      const groupColorNow = groupColor[indexGroupColor]
      const now = {...updateColorObj.GroupColor, id: groupColorNow.id, name: groupColorNow.name}
      state.colorList[index] = {...updateColorObj, GroupColor: now}
      state.colorListFilter = state.colorList.filter((color) => color.name.toLowerCase().includes(state.searchColorValue.toLowerCase()) || color.GroupColor?.name.toLowerCase().includes(state.searchColorValue.toLowerCase()))
    },

    searchColor: (state, action) => {
      const searchValue = action.payload
      state.searchColorValue = action.payload;
      state.colorListFilter = state.colorList.filter((color) => color.name.toLowerCase().includes(searchValue.toLowerCase()) || color.GroupColor?.name.toLowerCase().includes(searchValue.toLowerCase()))
    },
    searchColour: (state, action) => {
      const searchValue = action.payload
      state.searchColourValue = action.payload;
      state.colourListFilter = state.colourList.filter((color) => color.name.toLowerCase().includes(searchValue.toLowerCase()))
    },
    addModel: (state, action) => {
      const newModel = action.payload;
      state.modelList.unshift(newModel);
      state.modelListFilter = state.modelList.filter((model) => model.name.toLowerCase().includes(state.searchModelValue.toLowerCase()))
    },
    removeModel: (state, action) => {
      const { modelId, updateModel } = action.payload;
      state.modelList = state.modelList.filter((model) => model.id != modelId);
      state.modelListFilter = state.modelList.filter((model) => model.name.toLowerCase().includes(state.searchModelValue.toLowerCase()))
    },
    editModel: (state, action) => {
      const { modelId, updateModelObj } = action.payload;
      const index = state.modelList.findIndex((el) => el.id == modelId);
      state.modelList[index] = {...updateModelObj};
      state.modelListFilter = state.modelList.filter((model) => model.name.toLowerCase().includes(state.searchModelValue.toLowerCase()))
    },
    searchModel: (state, action) => {
      const searchValue = action.payload
      state.searchModelValue = action.payload;
      state.modelListFilter = state.modelList.filter((model) => model.name.toLowerCase().includes(searchValue.toLowerCase()))
    },
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const color = JSON.parse(JSON.stringify(state.colorList))
      const model = JSON.parse(JSON.stringify(state.modelList))
      const indexColor = color.findIndex((el) => el.id == newProduct.colorId);
      const indexModel = model.findIndex((el) => el.id == newProduct.modelId);
      state.productList.unshift({...newProduct, Color: color[indexColor], Model: model[indexModel]});
    },
    removeProduct: (state, action) => {
      const { productId, updateProduct } = action.payload;
      state.productList = state.productList.filter((product) => product.id != productId);
    },
    editProduct: (state, action) => {
      const updateProductObj  = action.payload;
      const index = state.productList.findIndex((el) => el.id == updateProductObj.id);
      state.productList[index] = updateProductObj;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(bagTypeListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bagTypeListAsync.fulfilled, (state, action) => {
        state.bagTypeList = action.payload;
        if(state.searchBagTypeValue.trim() === "") state.bagTypeListFilter = state.bagTypeList
        else state.bagTypeListFilter = action.payload.filter((bag) => bag.name.toLowerCase().includes(state.searchBagTypeValue.toLowerCase()))
        state.isLoading = false;
      })
      .addCase(bagTypeListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(groupColourListAsync.fulfilled, (state, action) => {
        state.colourList = action.payload;
        if(state.searchColourValue.trim() === "") state.colourListFilter = state.colourList
        else state.colourListFilter = action.payload.filter((color) => color.name.toLowerCase().includes(state.searchColourValue.toLowerCase()) || color.Colors?.name.toLowerCase().includes(state.searchColourValue.toLowerCase()))
        state.isLoading = false;
      })
      .addCase(groupColourListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(groupColorListAsync.fulfilled, (state, action) => {
        state.groupColorList = action.payload;
        if(state.searchColorValue.trim() === "") state.colorListFilter = state.colorList
        else state.colorListFilter = action.payload.filter((color) => color.name.toLowerCase().includes(state.searchColorValue.toLowerCase()) || color.GroupColor?.name.toLowerCase().includes(state.searchColorValue.toLowerCase()))
        state.isLoading = false;
      })
      .addCase(groupColorListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(colorListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(colorListAsync.fulfilled, (state, action) => {
        state.colorList = action.payload;
        if(state.searchColorValue.trim() === "") state.colorListFilter = state.colorList
        else state.colorListFilter = action.payload.filter((color) => color.name.toLowerCase().includes(state.searchColorValue.toLowerCase()) || color.GroupColor?.name.toLowerCase().includes(state.searchColorValue.toLowerCase()))
        state.isLoading = false;
      })
      .addCase(colorListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(modelListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(modelListAsync.fulfilled, (state, action) => {
        state.modelList = action.payload;
        if(state.searchModelValue.trim() === "") state.modelListFilter = state.modelList
        else state.modelListFilter = action.payload.filter((model) => model.name.toLowerCase().includes(state.searchModelValue.toLowerCase()))
        state.isLoading = false;
      })
      .addCase(modelListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(productListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productListAsync.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.isLoading = false;
      })
      .addCase(productListAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(dashboardAsync.fulfilled, (state, action) => {
        state.dashboard = action.payload;
        state.isLoading = false;
      })
      .addCase(dashboardAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
});

export default adminSlice.reducer;

export const {
  removeBagType,
  addBagType,
  editBagType,
  searchBagType,
  removeColor,
  addColor,
  editColor,
  searchColor,
  removeColour,
  addColour,
  editColour,
  searchColour,
  addModel,
  removeModel,
  editModel,
  searchModel,
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

export function createColour(newColorObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.createColour(newColorObj);
      dispatch(addColour(response.data));
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

export function updateColour(colorId, updateColorObj) {
  return async (dispatch) => {
    try {
      console.log("upColor", updateColorObj)
      const response = await adminService.updateColour(colorId, updateColorObj);
      dispatch(editColour({ colorId, updateColorObj }));
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

export function deleteColour(colorId, groupColorId) {
  return async (dispatch) => {
    try {
      console.log("colourId", colorId)
      await adminService.deleteColour(colorId);
      dispatch(removeColour({colorId, groupColorId}));
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
      console.log("up", updateModelObj)
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
      await dispatch(addProduct(response.data));
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

export function updateProduct(updateProductObj) {
  return async (dispatch) => {
    try {
      const response = await adminService.updateProduct(updateProductObj);
      dispatch(editProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}