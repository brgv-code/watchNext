/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: Injectable }
    ];
    return ModalOptions;
}());
export { ModalOptions };
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
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = /**
     * Hides the modal
     * @return {?}
     */
    function () { };
    MDBModalRef.decorators = [
        { type: Injectable }
    ];
    return MDBModalRef;
}());
export { MDBModalRef };
if (false) {
    /**
     * Reference to a component inside the modal. Null if modal's been created with TemplateRef
     * @type {?}
     */
    MDBModalRef.prototype.content;
}
var ɵ0 = {};
/** @type {?} */
export var modalConfigDefaults = {
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
export var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show',
};
/** @type {?} */
export var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed',
};
/** @type {?} */
export var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150,
};
/** @type {?} */
export var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbW9kYWxzL21vZGFsLm9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQStCQSxDQUFDOztnQkEvQkEsVUFBVTs7SUErQlgsbUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxZQUFZOzs7Ozs7SUFJdkIsZ0NBQW9DOzs7OztJQUlwQyxnQ0FBbUI7O0lBRW5CLDZCQUFnQjs7Ozs7SUFJaEIsNEJBQWU7Ozs7O0lBSWYsMkNBQThCOzs7OztJQUk5Qiw2QkFBZTs7Ozs7SUFJZixzQ0FBd0I7O0lBQ3hCLGdDQUFtQjs7SUFDbkIsOEJBQWlCOztJQUNqQiw0QkFBYzs7QUFHaEI7SUFBQTtJQVVBLENBQUM7SUFKQzs7T0FFRzs7Ozs7SUFDSCwwQkFBSTs7OztJQUFKLGNBQWMsQ0FBQzs7Z0JBVGhCLFVBQVU7O0lBVVgsa0JBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSxXQUFXOzs7Ozs7SUFJdEIsOEJBQXFCOztTQWlCZixFQUFFOztBQVZWLE1BQU0sS0FBTyxtQkFBbUIsR0FBaUI7SUFDL0MsUUFBUSxFQUFFLElBQUk7SUFDZCxRQUFRLEVBQUUsSUFBSTtJQUNkLEtBQUssRUFBRSxJQUFJO0lBQ1gsSUFBSSxFQUFFLEtBQUs7SUFDWCxtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLEtBQUssRUFBRSxFQUFFO0lBQ1QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksSUFBSTtDQUNUOztBQUVELE1BQU0sS0FBTyxTQUFTLEdBQVE7SUFDNUIsa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixFQUFFLEVBQUUsSUFBSTs7SUFDUixJQUFJLEVBQUUsTUFBTTtDQUNiOztBQUVELE1BQU0sS0FBTyxRQUFRLEdBQVE7SUFDM0IsTUFBTSxFQUFFLGVBQWU7SUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtJQUNwQyxZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLGFBQWEsRUFBRSxvREFBb0Q7Q0FDcEU7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUFRO0lBQ3RDLEtBQUssRUFBRSxHQUFHO0lBQ1YsUUFBUSxFQUFFLEdBQUc7Q0FDZDs7QUFFRCxNQUFNLEtBQU8sZUFBZSxHQUFHO0lBQzdCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsR0FBRyxFQUFFLEtBQUs7Q0FDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAgSW5jbHVkZXMgYSBtb2RhbC1iYWNrZHJvcCBlbGVtZW50LiBBbHRlcm5hdGl2ZWx5LCBzcGVjaWZ5IHN0YXRpYyBmb3IgYSBiYWNrZHJvcCB3aGljaCBkb2Vzbid0IGNsb3NlIHRoZSBtb2RhbCBvbiBjbGljay5cbiAgICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbiB8ICdzdGF0aWMnIHwgYW55O1xuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cbiAgICovXG4gIGtleWJvYXJkPzogYm9vbGVhbjtcblxuICBmb2N1cz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cbiAgICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKipcbiAgICogSWdub3JlIHRoZSBiYWNrZHJvcCBjbGlja1xuICAgKi9cbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDc3MgY2xhc3MgZm9yIG9wZW5lZCBtb2RhbFxuICAgKi9cbiAgY2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXG4gICAqL1xuICBjb250YWluZXJDbGFzcz86IHN0cmluZztcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xuICBzY3JvbGw/OiBib29sZWFuO1xuICBkYXRhPzogT2JqZWN0O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTURCTW9kYWxSZWYge1xuICAvKipcbiAgICogUmVmZXJlbmNlIHRvIGEgY29tcG9uZW50IGluc2lkZSB0aGUgbW9kYWwuIE51bGwgaWYgbW9kYWwncyBiZWVuIGNyZWF0ZWQgd2l0aCBUZW1wbGF0ZVJlZlxuICAgKi9cbiAgY29udGVudD86IGFueSB8IG51bGw7XG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgbW9kYWxcbiAgICovXG4gIGhpZGUoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgY29uc3QgbW9kYWxDb25maWdEZWZhdWx0czogTW9kYWxPcHRpb25zID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlLFxuICBzaG93OiBmYWxzZSxcbiAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXG4gIGNsYXNzOiAnJyxcbiAgY29udGFpbmVyQ2xhc3M6ICcnLFxuICBhbmltYXRlZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZSxcbiAgZGF0YToge30sXG59O1xuXG5leHBvcnQgY29uc3QgQ2xhc3NOYW1lOiBhbnkgPSB7XG4gIFNDUk9MTEJBUl9NRUFTVVJFUjogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIE9QRU46ICdtb2RhbC1vcGVuJyxcbiAgRkFERTogJ2ZhZGUnLFxuICBJTjogJ2luJywgLy8gYnMzXG4gIFNIT1c6ICdzaG93JywgLy8gYnM0XG59O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0b3I6IGFueSA9IHtcbiAgRElBTE9HOiAnLm1vZGFsLWRpYWxvZycsXG4gIERBVEFfVE9HR0xFOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UOiAnLm5hdmJhci1maXhlZC10b3AsIC5uYXZiYXItZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25EdXJhdGlvbnM6IGFueSA9IHtcbiAgTU9EQUw6IDMwMCxcbiAgQkFDS0RST1A6IDE1MCxcbn07XG5cbmV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlMgPSB7XG4gIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxuICBFU0M6ICdlc2MnLFxufTtcbiJdfQ==