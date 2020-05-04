/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     *  Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click.
     * @type {?}
     */
    ModalOptions.prototype.backdrop;
    /**
     * Closes the modal when escape key is pressed.
     * @type {?}
     */
    ModalOptions.prototype.keyboard;
    /** @type {?} */
    ModalOptions.prototype.focus;
    /**
     * Shows the modal when initialized.
     * @type {?}
     */
    ModalOptions.prototype.show;
    /**
     * Ignore the backdrop click
     * @type {?}
     */
    ModalOptions.prototype.ignoreBackdropClick;
    /**
     * Css class for opened modal
     * @type {?}
     */
    ModalOptions.prototype.class;
    /**
     * Toggle animation
     * @type {?}
     */
    ModalOptions.prototype.containerClass;
    /** @type {?} */
    ModalOptions.prototype.animated;
    /** @type {?} */
    ModalOptions.prototype.scroll;
    /** @type {?} */
    ModalOptions.prototype.data;
}
export class MDBModalRef {
    /**
     * Hides the modal
     * @return {?}
     */
    hide() { }
}
MDBModalRef.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     * @type {?}
     */
    MDBModalRef.prototype.content;
}
const ɵ0 = {};
/** @type {?} */
export const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: ɵ0,
};
/** @type {?} */
export const ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show',
};
/** @type {?} */
export const Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed',
};
/** @type {?} */
export const TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150,
};
/** @type {?} */
export const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbW9kYWxzL21vZGFsLm9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLFlBQVk7OztZQUR4QixVQUFVOzs7Ozs7O0lBS1QsZ0NBQW9DOzs7OztJQUlwQyxnQ0FBbUI7O0lBRW5CLDZCQUFnQjs7Ozs7SUFJaEIsNEJBQWU7Ozs7O0lBSWYsMkNBQThCOzs7OztJQUk5Qiw2QkFBZTs7Ozs7SUFJZixzQ0FBd0I7O0lBQ3hCLGdDQUFtQjs7SUFDbkIsOEJBQWlCOztJQUNqQiw0QkFBYzs7QUFJaEIsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBUXRCLElBQUksS0FBVSxDQUFDOzs7WUFUaEIsVUFBVTs7Ozs7OztJQUtULDhCQUFxQjs7V0FpQmYsRUFBRTs7QUFWVixNQUFNLE9BQU8sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLElBQUk7Q0FDVDs7QUFFRCxNQUFNLE9BQU8sU0FBUyxHQUFRO0lBQzVCLGtCQUFrQixFQUFFLHlCQUF5QjtJQUM3QyxRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxNQUFNO0lBQ1osRUFBRSxFQUFFLElBQUk7O0lBQ1IsSUFBSSxFQUFFLE1BQU07Q0FDYjs7QUFFRCxNQUFNLE9BQU8sUUFBUSxHQUFRO0lBQzNCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsb0RBQW9EO0NBQ3BFOztBQUVELE1BQU0sT0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxLQUFLLEVBQUUsR0FBRztJQUNWLFFBQVEsRUFBRSxHQUFHO0NBQ2Q7O0FBRUQsTUFBTSxPQUFPLGVBQWUsR0FBRztJQUM3QixRQUFRLEVBQUUsZ0JBQWdCO0lBQzFCLEdBQUcsRUFBRSxLQUFLO0NBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2RhbE9wdGlvbnMge1xuICAvKipcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSwgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXG4gICAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW4gfCAnc3RhdGljJyB8IGFueTtcbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgbW9kYWwgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gICAqL1xuICBrZXlib2FyZD86IGJvb2xlYW47XG5cbiAgZm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogU2hvd3MgdGhlIG1vZGFsIHdoZW4gaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIElnbm9yZSB0aGUgYmFja2Ryb3AgY2xpY2tcbiAgICovXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s/OiBib29sZWFuO1xuICAvKipcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcbiAgICovXG4gIGNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogVG9nZ2xlIGFuaW1hdGlvblxuICAgKi9cbiAgY29udGFpbmVyQ2xhc3M/OiBzdHJpbmc7XG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcbiAgc2Nyb2xsPzogYm9vbGVhbjtcbiAgZGF0YT86IE9iamVjdDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1EQk1vZGFsUmVmIHtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byBhIGNvbXBvbmVudCBpbnNpZGUgdGhlIG1vZGFsLiBOdWxsIGlmIG1vZGFsJ3MgYmVlbiBjcmVhdGVkIHdpdGggVGVtcGxhdGVSZWZcbiAgICovXG4gIGNvbnRlbnQ/OiBhbnkgfCBudWxsO1xuICAvKipcbiAgICogSGlkZXMgdGhlIG1vZGFsXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge31cbn1cblxuZXhwb3J0IGNvbnN0IG1vZGFsQ29uZmlnRGVmYXVsdHM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZSxcbiAgc2hvdzogZmFsc2UsXG4gIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGZhbHNlLFxuICBjbGFzczogJycsXG4gIGNvbnRhaW5lckNsYXNzOiAnJyxcbiAgYW5pbWF0ZWQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2UsXG4gIGRhdGE6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IENsYXNzTmFtZTogYW55ID0ge1xuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBPUEVOOiAnbW9kYWwtb3BlbicsXG4gIEZBREU6ICdmYWRlJyxcbiAgSU46ICdpbicsIC8vIGJzM1xuICBTSE9XOiAnc2hvdycsIC8vIGJzNFxufTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdG9yOiBhbnkgPSB7XG4gIERJQUxPRzogJy5tb2RhbC1kaWFsb2cnLFxuICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgREFUQV9ESVNNSVNTOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgRklYRURfQ09OVEVOVDogJy5uYXZiYXItZml4ZWQtdG9wLCAubmF2YmFyLWZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uRHVyYXRpb25zOiBhbnkgPSB7XG4gIE1PREFMOiAzMDAsXG4gIEJBQ0tEUk9QOiAxNTAsXG59O1xuXG5leHBvcnQgY29uc3QgRElTTUlTU19SRUFTT05TID0ge1xuICBCQUNLUkRPUDogJ2JhY2tkcm9wLWNsaWNrJyxcbiAgRVNDOiAnZXNjJyxcbn07XG4iXX0=