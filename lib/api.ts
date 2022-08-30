export async function responseAPI(endpoint:string, options = {}) {
  let response, error
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, options)
    response = await data.json();
  } catch (err) {
    error = err;
  }
  return [response, error]
}

export const oneHourUrl = {
  GET_CATEGORY: '/api/categories',
  GET_TAGS: '/api/tags',
  GET_TAGS_BY_CATEGORY: (category:string) => `/api/tags/${category}`,
  GET_TAG_BY_ID: (category:string, id:string) => `/api/tags/${category}/${id}`,
  POST_QNA: '/api/qna',
  GET_QNAS: '/api/qna',
  GET_QNA_BY_CATEGORY: (category:string) => `/api/qna/${category}`,
  GET_USER_BOOKMARKS: (uid:string) => `/api/favor/${uid}/bookmarks`,
  GET_USER_LIKES: (uid:string) => `/api/favor/${uid}/likes`,
  GET_USER_FAVORITES: (uid:string) => `/api/favor/${uid}`,
};
// export const oneHourUrl = {
//   GET_CATEGORY: 'http://localhost:3000/api/categories',
//   GET_TAGS: 'http://localhost:3000/api/tags',
//   GET_TAGS_BY_CATEGORY: (category:string) => `http://localhost:3000/api/tags/${category}`,
//   GET_TAG_BY_ID: (category:string, id:string) => `http://localhost:3000/api/tags/${category}/${id}`,
//   POST_QNA: 'http://localhost:3000/api/qna',
//   GET_QNAS: 'http://localhost:3000/api/qna',
//   GET_QNA_BY_CATEGORY: (category:string) => `http://localhost:3000/api/qna/${category}`,
//   GET_USER_BOOKMARKS: (uid:string) => `http://localhost:3000/api/favor/${uid}/bookmarks`,
//   GET_USER_LIKES: (uid:string) => `http://localhost:3000/api/favor/${uid}/likes`,
//   GET_USER_FAVORITES: (uid:string) => `http://localhost:3000/api/favor/${uid}`,
// };