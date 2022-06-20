import oneHourUrl from '../axios/api.config';
import customAxios from '../axios/customAxios';
import { CategoryType } from './types';

const getCategory = async (category: CategoryType) => {
  try {
    const response = await customAxios.get(oneHourUrl.GET_CATEGORY, { params: { category_id: category } });
    return response.data;
  } catch (e) {
    console.log('get category error!');
  }
};

export default getCategory;
