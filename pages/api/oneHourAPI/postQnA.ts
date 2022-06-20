import oneHourUrl from '../axios/api.config';
import customAxios from '../axios/customAxios';
import { QnAType } from './types';

const getTags = async (data: QnAType, user_id: string) => {
  try {
    const response = await customAxios.post(oneHourUrl.POST_QNA, data, { params: { user_id: user_id } });
    console.log(response.data.id);
  } catch (e) {
    console.log('post QnA error!');
  }
};

export default getTags;
