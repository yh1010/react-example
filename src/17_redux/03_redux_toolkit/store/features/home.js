import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/data";

export const fetchHomeMultidata = createAsyncThunk(
  "fetch/homemultidata",
  async () => {
    // 模拟网络请求
    const res = await data;
    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanner(state, { payload }) {
      state.banners = payload;
    },
    changeRecommend(state, { payload }) {
      state.recommends = payload;
    }
  },
  // 针对异步操作所做的事情
  extraReducers: {
    [fetchHomeMultidata.pending](state, action) {
      console.log("pending状态");
    },
    [fetchHomeMultidata.fulfilled](state, { payload }) {
      console.log("fulfilled状态", payload);
      state.banners = payload.data.banner.list;
      state.recommends = payload.data.recommend.list;
    },
    [fetchHomeMultidata.rejected](state, action) {
      console.log("rejected状态");
    }
  }
});
export const { changeBanner, changeRecommend } = homeSlice.actions;
export default homeSlice.reducer;
