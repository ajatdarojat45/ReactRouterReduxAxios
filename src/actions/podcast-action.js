import axios from 'axios';

const apiUrl = 'https://ajatdarojat45.id/api/podcasts';

export const createPodcast = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
      .then(response => {
        dispatch(createPodcastSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPodcastSuccess =  (data) => {
  return {
    type: "ADD_PODCAST",
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  }
};

export const deletePodcastSuccess = id => {
  return {
    type: "DELETE_PODCAST",
    payload: {
      id
    }
  }
}

export const deletePodcast = id => {
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
    dispatch(deletePodcastSuccess(id))
  }
};

export const fetchPodcasts = (podcasts) => {
  return {
    type: "FETCH_PODCAST",
    payload: podcasts
  }
};

export const fetchAllPodcasts = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchPodcasts(response.data.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
