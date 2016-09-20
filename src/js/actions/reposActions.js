import axios from "axios";

export function fetchRepos(page = 1, language = "c", sort = "", order, text = "") {
    var baseUrl = "https://api.github.com/search/repositories?q=";
    var keywords = "";

    if (text != "") {
        keywords = text + "+"
    }
    var url = baseUrl + keywords + "language:" + language + "&page=" + page + "&sort=" + sort + "&order=" + order;

    return function (dispatch) {
        axios.get(url)
            .then((response) => {
                dispatch({type: "FETCH_REPOS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_REPOS_REJECTED", payload: err})
            })
    }
}

export function setPage(page) {
    return {
        type: 'SET_REPO_PAGE',
        payload: {
            page,
        }
    }
}

export function setLanguage(language) {
    return {
        type: 'SET_REPO_LANGUAGE',
        payload: {
            language,
        }
    }
}

export function setSort(sort) {
    return {
        type: 'SET_REPO_SORT',
        payload: {
            sort,
        }
    }
}

export function setOrder(order) {
    return {
        type: 'SET_REPO_ORDER',
        payload: {
            order,
        }
    }
}

export function setText(text) {
    return {
        type: 'SET_REPO_TEXT',
        payload: {
            text,
        }
    }
}