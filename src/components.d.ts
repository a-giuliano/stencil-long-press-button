/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LongPressButton {
    }
}
declare global {
    interface HTMLLongPressButtonElement extends Components.LongPressButton, HTMLStencilElement {
    }
    var HTMLLongPressButtonElement: {
        prototype: HTMLLongPressButtonElement;
        new (): HTMLLongPressButtonElement;
    };
    interface HTMLElementTagNameMap {
        "long-press-button": HTMLLongPressButtonElement;
    }
}
declare namespace LocalJSX {
    interface LongPressButton {
        "onLongPress"?: (event: CustomEvent<void>) => void;
    }
    interface IntrinsicElements {
        "long-press-button": LongPressButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "long-press-button": LocalJSX.LongPressButton & JSXBase.HTMLAttributes<HTMLLongPressButtonElement>;
        }
    }
}
