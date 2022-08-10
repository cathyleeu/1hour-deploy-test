import customAxios from '../axios/customAxios';
import openHourUrl from '../axios/api.config';
import { QnAType } from '../types';

export const GetCategories = async () => {
  const { data } = await customAxios.get(openHourUrl.GET_CATEGORY);
  return data;
};

export const GetTags = async (category_id: string) => {
  const { data } = await customAxios.get(openHourUrl.GET_TAGS);
  return data;
};

export const GetQnA = async (category_id: string, user_id: string) => {
  const { data } = await customAxios.get(openHourUrl.GET_QNA, {
    params: {
      user_id,
      category_id,
    },
  });
  return data;
};
export const PostQnA = async (data: QnAType, user_id: string | undefined) => {
  try {
    const response = await customAxios.post(openHourUrl.POST_QNA, data, { params: { user_id: user_id } });
    console.log(response.data.id);
  } catch (e) {
    console.log('post QnA error!');
  }
};
