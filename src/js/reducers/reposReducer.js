export default function reducer(state = {
    repos: [],
    fetching: false,
    fetched: false,
    error: null,
    page: 1,
    language: "c",
    sort: "",
    order: "desc",
    text: "",

}, action) {

    switch (action.type) {
        case "FETCH_REPOS": {
            return {...state, fetching: true}
        }
        case "FETCH_REPOS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_REPOS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                repos: action.payload.items,
            }
        }
        case "SET_REPO_PAGE": {
            return {
                ...state,
                page: action.payload.page,
                fetched: false,
            }
        }
        case "SET_REPO_LANGUAGE": {
            return {
                ...state,
                language: action.payload.language,
                fetched: false,
            }
        }
        case "SET_REPO_SORT": {
            return {
                ...state,
                sort: action.payload.sort,
                fetched: false,
            }
        }
        case "SET_REPO_ORDER": {
            return {
                ...state,
                order: action.payload.order,
                fetched: false,
            }
        }
        case "SET_REPO_TEXT": {
            return {
                ...state,
                text: action.payload.text,
                fetched: false,
            }
        }
    }

    return state
}
