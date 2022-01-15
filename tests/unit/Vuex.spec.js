import mutation from '../../store/mutations'
import mutations from "../../store/mutations";

describe("SET_POST", () => {
    it('should add a post to the state', function () {
        const post = {id:1, title: "post"}
        const state = {
            postIds: [],
            posts: {}
        }
        mutations.SET_POST(state, {post})
        expect(state).toEqual({
            postIds: [1],
            posts: { "1": post }
        })
    });
})
