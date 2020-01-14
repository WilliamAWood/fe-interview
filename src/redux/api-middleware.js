export const apiMiddleware = () => ({dispatch}) => next => action => {

    if (action.type !== 'API'){
        return next(action);
    }

    dispatch({
        type: action.payload.PENDING
    });

    return fetch(`http://localhost:3002/${action.payload.url}`, {
        method: action.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(action.payload.body)
    }).then(response => response.json())
        .then(json => {
            dispatch({
                type: action.payload.SUCCESS,
                payload: json
            })
        })
};
