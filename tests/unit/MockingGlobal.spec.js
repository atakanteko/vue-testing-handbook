import { mount } from "@vue/test-utils"
import MockingGlobal from "../../src/components/MockingGlobal";
import { config } from "@vue/test-utils"

config.mocks["mocks"] = "Default Mock Value"

describe("MockingGlobal.vue", () => {
    it("renders successfully", ()=>{
        const wrapper = mount(MockingGlobal, {
            mocks : {
                $t: (msg) => msg
            }
        })
        expect(wrapper.exists()).toBeTruthy()
    })
})
