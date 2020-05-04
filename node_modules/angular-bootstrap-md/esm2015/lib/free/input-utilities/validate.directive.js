/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class MdbValidateDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    /**
     * @return {?}
     */
    get validate() {
        return this._validate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validate(value) {
        this._validate = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateSuccess() {
        return this._validateSuccess;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateSuccess(value) {
        this._validateSuccess = value;
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    get validateError() {
        return this._validateError;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set validateError(value) {
        this._validateError = value;
        this.updateErrorClass();
        this.updateSuccessClass();
    }
    /**
     * @return {?}
     */
    updateSuccessClass() {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    }
    /**
     * @return {?}
     */
    updateErrorClass() {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateSuccessClass();
        this.updateErrorClass();
    }
}
MdbValidateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbValidate]',
            },] }
];
/** @nocollapse */
MdbValidateDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
MdbValidateDirective.propDecorators = {
    mdbValidate: [{ type: Input }],
    validate: [{ type: Input }],
    validateSuccess: [{ type: Input }],
    validateError: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateSuccess;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype._validateError;
    /** @type {?} */
    MdbValidateDirective.prototype.mdbValidate;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbValidateDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvdmFsaWRhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2hGLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBbUMvQixZQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFsQ3ZELGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0lBZ0NvQyxDQUFDOzs7O0lBN0JuRSxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUNJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLGVBQWUsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQ0ksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUNELElBQUksYUFBYSxDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUlELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTNERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFKOEMsU0FBUztZQUFwQyxVQUFVOzs7MEJBVTNCLEtBQUs7dUJBQ0wsS0FBSzs4QkFVTCxLQUFLOzRCQVNMLEtBQUs7Ozs7Ozs7SUF4Qk4seUNBQXlCOzs7OztJQUN6QixnREFBZ0M7Ozs7O0lBQ2hDLDhDQUE4Qjs7SUFFOUIsMkNBQThCOzs7OztJQThCbEIsd0NBQTJCOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJWYWxpZGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJWYWxpZGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX3ZhbGlkYXRlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmFsaWRhdGVTdWNjZXNzID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmFsaWRhdGVFcnJvciA9IHRydWU7XG5cbiAgQElucHV0KCkgbWRiVmFsaWRhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGdldCB2YWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGU7XG4gIH1cbiAgc2V0IHZhbGlkYXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmFsaWRhdGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yQ2xhc3MoKTtcbiAgICB0aGlzLnVwZGF0ZVN1Y2Nlc3NDbGFzcygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbGlkYXRlU3VjY2VzcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWNjZXNzO1xuICB9XG4gIHNldCB2YWxpZGF0ZVN1Y2Nlc3ModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWxpZGF0ZVN1Y2Nlc3MgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVN1Y2Nlc3NDbGFzcygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbGlkYXRlRXJyb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlRXJyb3I7XG4gIH1cbiAgc2V0IHZhbGlkYXRlRXJyb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWxpZGF0ZUVycm9yID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVFcnJvckNsYXNzKCk7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICB1cGRhdGVTdWNjZXNzQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZVN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsaWRhdGUtc3VjY2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLXN1Y2Nlc3MnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFcnJvckNsYXNzKCkge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlICYmIHRoaXMudmFsaWRhdGVFcnJvcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWxpZGF0ZS1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLWVycm9yJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdWNjZXNzQ2xhc3MoKTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yQ2xhc3MoKTtcbiAgfVxufVxuIl19