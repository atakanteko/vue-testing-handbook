import { mount } from "@vue/test-utils";
import SubmitButton from "../../src/components/SubmitButton";



describe('SubmitButton.vue', () => {
    it('should display a non authorized message', function () {
        const msg = 'submit';
        const wrapper = mount(SubmitButton, {
            propsData:{
                msg: msg,
                isAdmin: true
            }
        })
        console.log(wrapper.html())
        expect(wrapper.find("span").text()).toBe("Admin Privileges")
        expect(wrapper.find("button").text()).toBe("submit")
    });
})
