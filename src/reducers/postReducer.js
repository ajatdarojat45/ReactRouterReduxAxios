export default function postReducer(state = [], action) {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter(post => post._id !== action.payload.id);
    case "FETCH_POST":
      return action.posts;
    case "ACTION_AJAT":
    console.log(state);
      return state.filter(blog => blog.id !== action.payload);
    default:
      return state;
  }
}
