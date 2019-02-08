export default function blogReducer(state = [], action) {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    case "DELETE_BLOG":
      return state.filter(blog => blog.id !== action.payload.id);
    case "FETCH_BLOG":
      return action.posts;
    default:
      return state;
  }
}
