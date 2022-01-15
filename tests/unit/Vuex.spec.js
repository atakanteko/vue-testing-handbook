import mutations from "../../store/mutations";
import actions from "../../store/actions";
import axios from "axios";

let url=''
let body={}
let mockError = false
jest.mock("axios",()=>({
    post: (_url,_body) => {
        return new Promise((resolve, reject) => {
            if (mockError){
                throw Error()
            }
            url = _url
            body = _body
            resolve(true)
        })
    }
}))

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

    it('should authenticated a user', async function () {
        const commit = jest.fn()
        const username = "atakan"
        const password = "pass123"

        await actions.authenticate({commit},{username,password})

        expect(url).toBe("/api/authenticate")
        expect(body).toEqual({username,password})
        expect(commit).toHaveBeenCalledWith(
            "SET_AUTHENTICATED",true)

    });
    it('should catch an error', async function () {
        mockError = true
        await expect(actions.authenticate({commit: jest.fn()}, {}))
            .rejects.toThrow("API Error occurred.")
    });
})





