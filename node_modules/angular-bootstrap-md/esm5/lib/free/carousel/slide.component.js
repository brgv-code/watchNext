/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.el = null;
        this.el = el;
    }
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-slide, mdb-carousel-item',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }, { type: Input }],
        animated: [{ type: HostBinding, args: ['class.animated',] }],
        directionNext: [{ type: HostBinding, args: ['class.carousel-item-next',] }],
        directionLeft: [{ type: HostBinding, args: ['class.carousel-item-left',] }],
        directionPrev: [{ type: HostBinding, args: ['class.carousel-item-prev',] }],
        directionRight: [{ type: HostBinding, args: ['class.carousel-item-right',] }],
        el: [{ type: HostBinding, args: ['class.carousel-item',] }]
    };
    return SlideComponent;
}());
export { SlideComponent };
if (false) {
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /** @type {?} */
    SlideComponent.prototype.animated;
    /** @type {?} */
    SlideComponent.prototype.directionNext;
    /** @type {?} */
    SlideComponent.prototype.directionLeft;
    /** @type {?} */
    SlideComponent.prototype.directionPrev;
    /** @type {?} */
    SlideComponent.prototype.directionRight;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9jYXJvdXNlbC9zbGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUU7SUFzQkUsd0JBQW1CLEVBQWM7UUFYRixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ1Asa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7UUFLMUQsT0FBRSxHQUFxQixJQUFJLENBQUM7UUFHakMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxxQ0FFVDtpQkFDRjs7OztnQkFQdUMsVUFBVTs7O3lCQVUvQyxXQUFXLFNBQUMsY0FBYyxjQUMxQixLQUFLOzJCQUVMLFdBQVcsU0FBQyxnQkFBZ0I7Z0NBQzVCLFdBQVcsU0FBQywwQkFBMEI7Z0NBQ3RDLFdBQVcsU0FBQywwQkFBMEI7Z0NBQ3RDLFdBQVcsU0FBQywwQkFBMEI7aUNBQ3RDLFdBQVcsU0FBQywyQkFBMkI7cUJBRXZDLFdBQVcsU0FBQyxxQkFBcUI7O0lBUXBDLHFCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FuQlksY0FBYzs7Ozs7O0lBRXpCLGdDQUV1Qjs7SUFDdkIsa0NBQWdEOztJQUNoRCx1Q0FBK0Q7O0lBQy9ELHVDQUErRDs7SUFDL0QsdUNBQStEOztJQUMvRCx3Q0FBaUU7Ozs7O0lBRWpFLDRCQUdtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zbGlkZSwgbWRiLWNhcm91c2VsLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnQge1xuICAvKiogSXMgY3VycmVudCBzbGlkZSBhY3RpdmUgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFuaW1hdGVkJykgYW5pbWF0ZWQgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtLW5leHQnKSBkaXJlY3Rpb25OZXh0ID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbS1sZWZ0JykgZGlyZWN0aW9uTGVmdCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0tcHJldicpIGRpcmVjdGlvblByZXYgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtLXJpZ2h0JykgZGlyZWN0aW9uUmlnaHQgPSBmYWxzZTtcbiAgLyoqIFdyYXBzIGVsZW1lbnQgYnkgYXBwcm9wcmlhdGUgQ1NTIGNsYXNzZXMgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtJylcblxuICAvKiogTGluayB0byBQYXJlbnQoY29udGFpbmVyLWNvbGxlY3Rpb24pIGNvbXBvbmVudCAqL1xuICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYgfCBhbnkgPSBudWxsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxufVxuIl19