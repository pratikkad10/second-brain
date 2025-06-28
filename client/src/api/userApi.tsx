import apiClient from './apiConfig';

const userAPI = {
  signin: async ({username,password}:{username:string, password:string}) => {
    const response = await apiClient.post('/signin', {username,password});
    return response;
  },

  signup: async ({username,password}:{username:string, password:string}) => {
    const response = await apiClient.post('/signup', {username, password});
    return response;
  },

  logoutUser:async ()=>{
    const response = await apiClient.post('/logout');
    return response;
  },

  fetchContent: async()=>{
    const contents=await apiClient.get('/content');
    return contents;
  },

  postContent: async({title, link, type}:{title:string, link:string, type:string})=>{
    const response = await apiClient.post('/content', {title, link, type});
    return response;
  },

  shareContent: async({share}:{share:boolean})=>{
    const response = await apiClient.post('/share', {share});
    return response;
  },

  fetchSharedContent: async({shareId}:{shareId:string})=>{
    const response = await apiClient.get(`${shareId}`);
    return response;
  }

//   logout: async () => {
//     const response = await apiClient.get('/users/logout');
//     return response;
//   },
};

export default userAPI;