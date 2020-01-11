export const apiMiddleware = () => ({dispatch}) => next => action => {

    console.log("blashl");
    if (action.type !== 'API'){
        return next(action);
    }

    dispatch({
        type: action.payload.PENDING
    });

    return fetch(`http://localhost:3000/products/v2.0/${action.payload.route}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: action.payload.SUCCESS,
                payload: json
            })
        })
};