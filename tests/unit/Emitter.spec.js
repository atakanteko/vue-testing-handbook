import {mount} from "@vue/test-utils";
import Emitter from "../../src/components/Emitter"

describe("Emitter", () => {
    it('should emit an event with input value',  function () {
        const wrapper = mount(Emitter)
        expect(wrapper.exists()).toBeTruthy();
        wrapper.vm.sendInputValue("Hello World")
        console.log(wrapper.emitted().emitInput)
        expect(wrapper.emitted().emitInput[0]).toEqual(['Hello World'])

    });
})
