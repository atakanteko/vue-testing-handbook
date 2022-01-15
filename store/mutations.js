export default {
    SET_POST(state, { post }) {
        state.postIds = [...state.postIds,post.id]
        state.posts = {...state.posts,[post.id]: post}
    }
}
