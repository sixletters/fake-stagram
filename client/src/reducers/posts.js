export default (posts = [], action) => {
    switch(action.type){
        case 'DELETE':
            return posts.filter((post) => action.payload !== post._id)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload: post)
        default:
            return posts;
    }
}