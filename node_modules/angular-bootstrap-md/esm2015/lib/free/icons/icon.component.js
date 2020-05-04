/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, } from '@angular/core';
import { Utils } from '../utils';
export class MdbIconComponent {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fad = false;
        this.fas = true;
        this.sizeClass = '';
        this.utils = new Utils();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.size) {
            this.sizeClass = `fa-${this.size}`;
        }
        /** @type {?} */
        const classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
        this.fad = classList.contains('fad');
        /** @type {?} */
        const formWrapper = this.utils.getClosestEl(this._el.nativeElement, '.md-form') ||
            this.utils.getClosestEl(this._el.nativeElement, '.md-outline');
        if (formWrapper) {
            formWrapper.childNodes.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                if (el.tagName === 'INPUT' || 'TEXTAREA') {
                    this._renderer.listen(el, 'focus', (/**
                     * @return {?}
                     */
                    () => {
                        this._renderer.addClass(this._el.nativeElement, 'active');
                    }));
                    this._renderer.listen(el, 'blur', (/**
                     * @return {?}
                     */
                    () => {
                        this._renderer.removeClass(this._el.nativeElement, 'active');
                    }));
                }
            }));
        }
    }
}
MdbIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-icon',
                template: "<i\n  [ngClass]=\"{ fas: fas, far: far, fab: fab, fal: fal, fad: fad }\"\n  class=\"fa-{{ icon }} {{ class }} {{ classInside }} {{ sizeClass }}\"\n></i>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MdbIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbIconComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    class: [{ type: Input }],
    classInside: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbIconComponent.prototype.icon;
    /** @type {?} */
    MdbIconComponent.prototype.size;
    /** @type {?} */
    MdbIconComponent.prototype.class;
    /** @type {?} */
    MdbIconComponent.prototype.classInside;
    /** @type {?} */
    MdbIconComponent.prototype.fab;
    /** @type {?} */
    MdbIconComponent.prototype.far;
    /** @type {?} */
    MdbIconComponent.prototype.fal;
    /** @type {?} */
    MdbIconComponent.prototype.fad;
    /** @type {?} */
    MdbIconComponent.prototype.fas;
    /** @type {?} */
    MdbIconComponent.prototype.sizeClass;
    /** @type {?} */
    MdbIconComponent.prototype.utils;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2ljb25zL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBT2pDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBZ0IzQixZQUFvQixHQUFlLEVBQVUsU0FBb0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFWakUsUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFFWCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsVUFBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7SUFFeUMsQ0FBQzs7OztJQUVyRSxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQzs7Y0FFSyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUztRQUNsRCxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOztjQUUvQixXQUFXLEdBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1lBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztRQUVoRSxJQUFJLFdBQVcsRUFBRTtZQUNmLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksRUFBRSxDQUFDLE9BQU8sS0FBSyxPQUFPLElBQUksVUFBVSxFQUFFO29CQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTzs7O29CQUFFLEdBQUcsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzVELENBQUMsRUFBQyxDQUFDO29CQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNOzs7b0JBQUUsR0FBRyxFQUFFO3dCQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDL0QsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsc0tBQW9DO2dCQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVhDLFVBQVU7WUFFVixTQUFTOzs7bUJBV1IsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUhOLGdDQUFzQjs7SUFDdEIsZ0NBQXNCOztJQUN0QixpQ0FBdUI7O0lBQ3ZCLHVDQUE2Qjs7SUFFN0IsK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVk7O0lBQ1osK0JBQVc7O0lBRVgscUNBQWU7O0lBRWYsaUNBQTJCOzs7OztJQUVmLCtCQUF1Qjs7Ozs7SUFBRSxxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc0luc2lkZTogc3RyaW5nO1xuXG4gIGZhYiA9IGZhbHNlO1xuICBmYXIgPSBmYWxzZTtcbiAgZmFsID0gZmFsc2U7XG4gIGZhZCA9IGZhbHNlO1xuICBmYXMgPSB0cnVlO1xuXG4gIHNpemVDbGFzcyA9ICcnO1xuXG4gIHV0aWxzOiBVdGlscyA9IG5ldyBVdGlscygpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgIHRoaXMuc2l6ZUNsYXNzID0gYGZhLSR7dGhpcy5zaXplfWA7XG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgdGhpcy5mYWIgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhYicpO1xuICAgIHRoaXMuZmFyID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXInKTtcbiAgICB0aGlzLmZhcyA9IGNsYXNzTGlzdC5jb250YWlucygnZmFzJyk7XG4gICAgdGhpcy5mYWwgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhbCcpO1xuICAgIHRoaXMuZmFkID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWQnKTtcblxuICAgIGNvbnN0IGZvcm1XcmFwcGVyID1cbiAgICAgIHRoaXMudXRpbHMuZ2V0Q2xvc2VzdEVsKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICcubWQtZm9ybScpIHx8XG4gICAgICB0aGlzLnV0aWxzLmdldENsb3Nlc3RFbCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnLm1kLW91dGxpbmUnKTtcblxuICAgIGlmIChmb3JtV3JhcHBlcikge1xuICAgICAgZm9ybVdyYXBwZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlbC50YWdOYW1lID09PSAnSU5QVVQnIHx8ICdURVhUQVJFQScpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oZWwsICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4oZWwsICdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==