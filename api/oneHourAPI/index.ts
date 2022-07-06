import { useEffect, useState } from 'react';
import customAxios from '../axios/customAxios';
import openHourUrl from '../axios/api.config';
import { CategoryId, QnAType } from '../types';

// export const GetCategories = () => {
//   // Promise{<pending>} 형태의 반환값이 리턴되기 때문에
//   // 체인 안에서 useState에 데이터를 저장한 후 리턴
//   const [data, setData] = useState();

//   useEffect(() => {
//     customAxios
//       .get(openHourUrl.GET_CATEGORY)
//       .then((res) => {
//         return res.data;
//       })
//       .then((data) => {
//         setData(data);
//       })
//       .catch((e) => console.log('Get Categories ERROR!', e));
//   }, []);

//   return data;
// };
export const GetCategories = async () => {
  const { data } = await customAxios.get(openHourUrl.GET_CATEGORY);
  return data;
};

export const GetTags = async (category_id: CategoryId) => {
  const { data } = await customAxios.get(openHourUrl.GET_TAGS);
  return data;
};

export const PostQnA = async (data: QnAType, user_id: string) => {
  try {
    const response = await customAxios.post(openHourUrl.POST_QNA, data, { params: { user_id: user_id } });
    console.log(response.data.id);
  } catch (e) {
    console.log('post QnA error!');
  }
};
