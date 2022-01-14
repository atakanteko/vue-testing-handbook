import axios from "axios";
import { BASE_URL, fetchUsers } from "../../utils/service"

jest.mock("axios");

describe("fetchUsers", () => {
    describe("API call is successful", () => {
        it('should return user list', async function () {
            // given
            const users = [
                { id: 1, name: "John" },
                { id: 2, name: "Andrew" },
            ];
            axios.get.mockResolvedValueOnce(users);

            // when
            const result = await fetchUsers();
            console.log(result)
            // then
            expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
            expect(result).toEqual(users);
        });
        it('should return empty list', async function () {
            const message = "Network Error";
            axios.get.mockRejectedValueOnce(new Error(message));

            const result = await fetchUsers()

            expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
            expect(result).toEqual([])
        });
    })
})
