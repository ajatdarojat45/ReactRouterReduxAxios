import { combineReducers } from 'redux';
import posts from './postReducer';
import podcasts from './podcastReducer';
import blogs from './blogReducer';

const allReducers = combineReducers({
    posts: posts,
    podcasts: podcasts,
    blogs: blogs,
});

export default allReducers;
