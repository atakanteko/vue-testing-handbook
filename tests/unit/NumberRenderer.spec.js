import { mount } from "@vue/test-utils"
import NumberRenderer from "../../src/components/NumberRenderer";

describe("NumberRenderer.vue", () => {
    it('should render even numbers', function () {
        const wrapper = mount(NumberRenderer, {
            propsData:{
                even:true
            }
        })
        expect(wrapper.text()).toBe("2, 4, 6, 8")
    });

    it('should render odd numbers', function () {
        const localThis = {even: false}
        expect(NumberRenderer.computed.numbers.call(localThis)).toBe("1, 3, 5, 7, 9")
    });

    it('should render even numbers with mount', function () {
        const localThis = {even: false}
        const wrapper = mount(NumberRenderer,{
            propsData:{
                even:true
            }
        })
        expect(wrapper.text()).toBe("2, 4, 6, 8")
    });

})
