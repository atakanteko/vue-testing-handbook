import { mount } from "@vue/test-utils"
import Parent from "../../src/components/Parent";
import Child from "../../src/components/Child";

describe("Parent", () => {
    it("does not render a span", () => {
        const wrapper = mount(Parent)
        wrapper.setData({showSpan:true})
        expect(wrapper.find("#span").exists()).toBe(true)
    })

    it("does not render a Child component", () => {
        const wrapper = mount(Parent)

        expect(wrapper.findComponent(Child).exists()).toBe(false)
    })

    it('should render child component', function () {
        const wrapper = mount(Parent, {
            data () {
                return{
                    showChild: true
                }
            }
        })
        const response = wrapper.findComponent({name: "Child"})
        expect(response.exists()).toBe(true)
    });
})
