/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var MdbValidateDirective = /** @class */ (function () {
    function MdbValidateDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    Object.defineProperty(MdbValidateDirective.prototype, "validate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._validate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validate = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return this._validateSuccess;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validateSuccess = value;
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateError", {
        get: /**
         * @return {?}
         */
        function () {
            return this._validateError;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validateError = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.updateSuccessClass = /**
     * @return {?}
     */
    function () {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    };
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.updateErrorClass = /**
     * @return {?}
     */
    function () {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    };
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSuccessClass();
        this.updateErrorClass();
    };
    MdbValidateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbValidate]',
                },] }
    ];
    /** @nocollapse */
    MdbValidateDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    MdbValidateDirective.propDecorators = {
        mdbValidate: [{ type: Input }],
        validate: [{ type: Input }],
        validateSuccess: [{ type: Input }],
        validateError: [{ type: Input }]
    };
    return MdbValidateDirective;
}());
export { MdbValidateDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvdmFsaWRhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhGO0lBc0NFLDhCQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFsQ3ZELGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO0lBZ0NvQyxDQUFDO0lBN0JuRSxzQkFDSSwwQ0FBUTs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUxBO0lBT0Qsc0JBQ0ksaURBQWU7Ozs7UUFEbkI7WUFFRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7OztRQUNELFVBQW9CLEtBQWM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUNJLCtDQUFhOzs7O1FBRGpCO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBQ0QsVUFBa0IsS0FBYztZQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FMQTs7OztJQVNELGlEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCwrQ0FBZ0I7OztJQUFoQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBSjhDLFNBQVM7Z0JBQXBDLFVBQVU7Ozs4QkFVM0IsS0FBSzsyQkFDTCxLQUFLO2tDQVVMLEtBQUs7Z0NBU0wsS0FBSzs7SUFnQ1IsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXpEWSxvQkFBb0I7Ozs7OztJQUMvQix5Q0FBeUI7Ozs7O0lBQ3pCLGdEQUFnQzs7Ozs7SUFDaEMsOENBQThCOztJQUU5QiwyQ0FBOEI7Ozs7O0lBOEJsQix3Q0FBMkI7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlZhbGlkYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlZhbGlkYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfdmFsaWRhdGUgPSB0cnVlO1xuICBwcml2YXRlIF92YWxpZGF0ZVN1Y2Nlc3MgPSB0cnVlO1xuICBwcml2YXRlIF92YWxpZGF0ZUVycm9yID0gdHJ1ZTtcblxuICBASW5wdXQoKSBtZGJWYWxpZGF0ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZ2V0IHZhbGlkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZTtcbiAgfVxuICBzZXQgdmFsaWRhdGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92YWxpZGF0ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlRXJyb3JDbGFzcygpO1xuICAgIHRoaXMudXBkYXRlU3VjY2Vzc0NsYXNzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdmFsaWRhdGVTdWNjZXNzKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVN1Y2Nlc3M7XG4gIH1cbiAgc2V0IHZhbGlkYXRlU3VjY2Vzcyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbGlkYXRlU3VjY2VzcyA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlU3VjY2Vzc0NsYXNzKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdmFsaWRhdGVFcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVFcnJvcjtcbiAgfVxuICBzZXQgdmFsaWRhdGVFcnJvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZhbGlkYXRlRXJyb3IgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUVycm9yQ2xhc3MoKTtcbiAgICB0aGlzLnVwZGF0ZVN1Y2Nlc3NDbGFzcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIHVwZGF0ZVN1Y2Nlc3NDbGFzcygpIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZSAmJiB0aGlzLnZhbGlkYXRlU3VjY2Vzcykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd2YWxpZGF0ZS1zdWNjZXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsaWRhdGUtc3VjY2VzcycpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUVycm9yQ2xhc3MoKSB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZUVycm9yKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ZhbGlkYXRlLWVycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsaWRhdGUtZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN1Y2Nlc3NDbGFzcygpO1xuICAgIHRoaXMudXBkYXRlRXJyb3JDbGFzcygpO1xuICB9XG59XG4iXX0=