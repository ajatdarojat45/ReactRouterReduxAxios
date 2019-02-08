export default function postReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PODCAST":
      return [...state, action.payload];
    case "DELETE_PODCAST":
      return state.filter(podcast => podcast.id !== action.payload.id);
      case "FETCH_PODCAST":
      return action.payload;
    default:
      return state;
  }
}
