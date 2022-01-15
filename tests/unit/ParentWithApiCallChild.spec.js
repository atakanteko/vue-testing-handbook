import { shallowMount, mount } from '@vue/test-utils'
import ParentWithApiCallChild from '../../src/components/ParentWithApiCallChild'
import ComponentWithAsyncCall from '../../src/components/ComponentWithAsyncCall'

describe("render component A", () => {
    it("is ParentWithApiCallChild component existed", () => {
        const wrapper = mount(ParentWithApiCallChild, {
            stubs: {
                ComponentWithAsyncCall:true
            }
        })
        expect(wrapper.exists()).toBeTruthy()
    })
})
