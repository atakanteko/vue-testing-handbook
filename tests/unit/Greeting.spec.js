import { mount } from "@vue/test-utils";
import Greeting from "../../src/components/Greeting";

describe('Greeting.vue' , () => {
    it('should render a greeting', function () {
        const wrapper = mount(Greeting)
        expect(wrapper.text()).toMatch('Vue and TDD')
    });
})
