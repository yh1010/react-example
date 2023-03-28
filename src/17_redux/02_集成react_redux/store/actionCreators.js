import data from "../data/data";
import { CHANGE_BANNER, CHANGE_RECOMMEND } from "../store/constants";

export const operate = (type, count) => ({ type: type, count: count });

export const changeBanners = (type, banners) => ({
  type: type,
  banners: banners
});

export const changeRecommends = (type, recommends) => ({
  type: type,
  recommends: recommends
});

export const fetchHomeMultidataAction = () => {
  return function (dispatch, getState) {
    // 模拟网络请求 异步操作
    const banners = data.data.banner.list;
    const recommends = data.data.recommend.list;

    dispatch(changeBanners(CHANGE_BANNER, banners));
    dispatch(changeRecommends(CHANGE_RECOMMEND, recommends));
  };
};
