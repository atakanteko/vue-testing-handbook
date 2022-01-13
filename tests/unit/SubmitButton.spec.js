import { mount } from "@vue/test-utils";
import SubmitButton from "../../src/components/SubmitButton";


const msg = "submit"
const factory = (propsData) => {
    return mount(SubmitButton,{
        propsData:{
            ...propsData
        }
    })
}

describe('SubmitButton.vue', () => {

    it('should display a non authorized message', function () {
        const msg = 'submit'
        const wrapper = factory({msg: msg, isAdmin: false})
        expect(wrapper.find("span").text()).toBe("Not Authorized")
        expect(wrapper.find("button").text()).toBe("submit")
    });

    it("renders a message", () => {
        const wrapper = factory({msg: msg, isAdmin: true })

        expect(wrapper.find("span").text()).toBe("Admin Privileges")
        expect(wrapper.find("button").text()).toBe("submit")
    })
})
