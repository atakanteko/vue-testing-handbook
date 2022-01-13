import { mount, shallowMount } from "@vue/test-utils";
import Greeting from "../../src/components/Greeting";
import Child from "../../src/components/Child";
import Parent from "../../src/components/Parent";

describe('Greeting.vue' , () => {
    it('should render a greeting', function () {
        const wrapper = mount(Greeting)
        expect(wrapper.text()).toMatch('Vue and TDD')
    });
})

const shallowWrapper = shallowMount(Child)
const mountWrapper = mount(Child)

console.log(shallowWrapper.html())
console.log(mountWrapper.html())

console.log("-----------------------")
const shallowWrapperx = shallowMount(Parent)
const mountWrapperx = mount(Parent)

console.log(shallowWrapperx.html())
console.log(mountWrapperx.html())
