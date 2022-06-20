import oneHourUrl from '../axios/api.config';
import customAxios from '../axios/customAxios';
import { CategoryType } from './types';

const getTags = async (category: CategoryType) => {
  try {
    const response = await customAxios.get(oneHourUrl.GET_TAGS, { params: { category_id: category } });
    return response.data;
  } catch (e) {
    console.log('get tags error!');
  }
};

export default getTags;
