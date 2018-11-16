
const fetchDataSuccess = data => ({
  type: 'FETCH_SUCCESS',
  payload: data,
});

const errorFetchingData = error => ({
  type: 'FETCH_ERROR',
  payload: error,
});

const fetchSingleArticle = data => ({
  type: 'FETCH_ARTICLE_SUCCESS',
  payload: data,
});

const updateArticleSuccess = () => ({
  type: 'UPDATE_ARTICLE_SUCCESS',
});

const editStarted = () => ({
  type: 'UPDATE_ARTICLE_STARTED',
});

const resetEdit = () => ({
  type: 'RESET_EDIT'
});

const deleteArticleSuccess = () => ({
  type: 'DELETE_ARTICLE_SUCCESS',
});

const deleteStarted = () => ({
  type: 'DELETE_ARTICLE_STARTED',
});

const resetDeleteArticle = () => ({
  type: 'RESET_DELETE_ARTICLE'
});

const createArticleSuccess = () => ({
  type: 'CREATE_ARTICLE_SUCCESS',
});

const createStarted = () => ({
  type: 'CREATE_ARTICLE_STARTED',
});

const resetCreateArticle = () => ({
  type: 'RESET_CREATE_ARTICLE'
});

const filterArticles = searchStr => ({
  type: 'FILTER_ARTICLES',
  payload: searchStr
});

const fetchArticles = (dispatch) => {
  fetch('http://localhost:8080/api/articles')
    .then((response) => {
      response.json().then((data) => {
        dispatch(fetchDataSuccess(data));
      });
    }).catch((error) => {
      dispatch(errorFetchingData(error));
    });
};

const fetchArticle = id => (dispatch) => {
  fetch(`http://localhost:8080/api/article/${id}`)
    .then((response) => {
      response.json().then((data) => {
        dispatch(fetchSingleArticle(data));
      });
    }).catch((error) => {
      dispatch(errorFetchingData(error));
    });
};

const updateArticle = (data, id) => (dispatch) => {
  dispatch(editStarted());
  fetch(`http://localhost:8080/api/article/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(() => {
    dispatch(updateArticleSuccess());
  }).catch((error) => {
    dispatch(errorFetchingData(error));
  });
};

const deleteArticle = id => (dispatch) => {
  dispatch(deleteStarted());
  fetch(`http://localhost:8080/api/article/${id}`, {
    method: 'DELETE'
  }).then(() => {
    dispatch(deleteArticleSuccess());
  }).catch((error) => {
    dispatch(errorFetchingData(error));
  });
};

const createArticle = data => (dispatch) => {
  dispatch(createStarted());
  fetch('http://localhost:8080/api/article', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(() => {
    dispatch(createArticleSuccess());
  }).catch((error) => {
    dispatch(errorFetchingData(error));
  });
};
module.exports = {
  fetchArticles,
  fetchArticle,
  updateArticle,
  resetEdit,
  filterArticles,
  deleteArticle,
  resetDeleteArticle,
  resetCreateArticle,
  createArticle
};
