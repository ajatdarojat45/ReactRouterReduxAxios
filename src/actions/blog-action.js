import axios from 'axios';

const apiUrl = 'https://ajatdarojat45.id/api/blogs';

export const createBlog = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
      .then(response => {
        dispatch(createBlogSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createBlogSuccess =  (data) => {
  return {
    type: "ADD_BLOG",
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  }
};

export const deleteBlogSuccess = id => {
  return {
    type: "DELETE_BLOG",
    payload: {
      id
    }
  }
}

export const deleteBlog = id => {
  // return (dispatch) => {
  //   return axios.get(`${apiUrl}/delete/${id}`)
  //     .then(response => {
  //       dispatch(deleteBlogSuccess(response.data))
  //     })
  //     .catch(error => {
  //       throw(error);
  //     });
  // };
  return (dispatch) => {
    dispatch(deleteBlogSuccess(id))
  }
};

export const fetchBlogs = (posts) => {
  return {
    type: "FETCH_BLOG",
    posts
  }
};

export const fetchAllBlogs = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchBlogs(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
