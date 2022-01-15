import mutations from "../../store/mutations";
import actions from "../../store/actions";
import getters from "../../store/getters";
import axios from "axios";

const dogs = [
    { name: "lucky", breed: "poodle", age: 1 },
    { name: "pochy", breed: "dalmatian", age: 2 },
    { name: "blackie", breed: "poodle", age: 4 }
]
const state = {dogs}

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
    it('should return poodles', function () {
        console.log(state)
        const actual = getters.poodles(state)
        expect(actual).toEqual([dogs[0],dogs[2]])
    });
    it('should return poodles by age', function () {
        const poodles = [dogs[0], dogs[2]]
        const actual = getters.poodlesByAge(state,{poodles})(1)
        expect(actual).toEqual([ dogs[0] ])
    });
    it('should return all dogs', function () {
        const result = getters.getMyDogs({dogs})
        expect(result).toEqual(dogs)
    });
})





