import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import {mount, shallow} from "../../../enzyme";


let getStatus = () => {
    return false;
}

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" getStatus={getStatus}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    });
    test("find span for read status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" getStatus={getStatus}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after rendered component shouldn't be input", () => {
        const wrapper = mount(<ProfileStatus status="it-katasutra.com" getStatus={getStatus}/>);

        expect(wrapper.find('input').exists()).toBeFalsy()
    });
    test("change span for input after dblclick", () => {
        const updateStatusMock = jest.fn();
        const component = create(<ProfileStatus status="it-kamasutra.com" getStatus={getStatus} updateStatus={updateStatusMock}/>)
        const instance = component.getInstance();

        instance.disableEditStatus();
        expect(updateStatusMock.mock.calls.length).toBe(1);
    });
    test("check set in input init state value", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" getStatus={getStatus}/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();

        let input = root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });
});