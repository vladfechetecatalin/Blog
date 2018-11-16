const initialState = {
  posts: [],
  results: [],
  singleArticle: {},
  searchStr: '',
};
const filterArticles = (articles, filterStr) => {
  if (filterStr && filterStr.length) {
    return articles.filter(p => (p.header.toLowerCase().indexOf(filterStr.toLowerCase()) !== -1))
  }
  return [];
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        posts: action.payload.posts
      };
    case 'FETCH_ARTICLE_SUCCESS':
      return {
        ...state,
        singleArticle: action.payload
      };
    case 'UPDATE_ARTICLE_STARTED':
      return {
        ...state,
        editStarted: true,
      };
    case 'UPDATE_ARTICLE_SUCCESS':
      return {
        ...state,
        editSuccess: true,
      };
    case 'RESET_EDIT':
      return {
        ...state,
        editStarted: null,
        editSuccess: null
      };
    case 'DELETE_ARTICLE_STARTED':
      return {
        ...state,
        deleteStarted: true,
      };
    case 'DELETE_ARTICLE_SUCCESS':
      return {
        ...state,
        deleteSuccess: true,
      };
    case 'RESET_DELETE_ARTICLE':
      return {
        ...state,
        deleteStarted: null,
        deleteSuccess: null,
      };
    case 'CREATE_ARTICLE_STARTED':
      return {
        ...state,
        createStarted: true,
      };
    case 'CREATE_ARTICLE_SUCCESS':
      return {
        ...state,
        createSuccess: true,
      };
    case 'RESET_CREATE_ARTICLE':
      return {
        ...state,
        createStarted: null,
        createSuccess: null,
      };
    case 'FILTER_ARTICLES':
      return {
        ...state,
        searchStr: action.payload,
        results: filterArticles(state.posts, action.payload)
      };
    default:
      return state;
  }
};
