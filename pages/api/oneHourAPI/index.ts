import { useEffect, useState } from 'react';
import customAxios from '../axios/customAxios';
import openHourUrl from '../axios/api.config';
import { CategoryId, QnAType } from '../types';

export const GetCategories = () => {
  // Promise{<pending>} 형태의 반환값이 리턴되기 때문에
  // 체인 안에서 useState에 데이터를 저장한 후 리턴
  const [data, setData] = useState();

  useEffect(() => {
    customAxios
      .get(openHourUrl.GET_CATEGORY)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log('Get Categories ERROR!', e));
  }, []);

  return data;
};

export const GetTags = (category_id: CategoryId) => {
  const [data, setData] = useState();

  useEffect(() => {
    customAxios
      .get(openHourUrl.GET_TAGS, { params: { category_id: category_id } })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.log('GetTags ERROR!', e));
  }, [category_id]);

  return data;
};

export const PostQnA = (data: QnAType, user_id: string) => {
  useEffect(() => {
    customAxios
      .post(openHourUrl.POST_QNA, data, { params: { user_id: user_id } })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log('Success Post QnA!', data);
      })
      .catch((e) => console.log('GetPost ERROR!', e));
  }, [data, user_id]);

  return data;
};
