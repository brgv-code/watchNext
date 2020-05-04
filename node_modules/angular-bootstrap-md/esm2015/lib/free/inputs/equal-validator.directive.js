/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class EqualValidatorDirective {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    /**
     * @private
     * @return {?}
     */
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        // self value (e.g. retype password)
        /** @type {?} */
        const v = c.value;
        // control value (e.g. password)
        /** @type {?} */
        const e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false,
            });
        }
        // return null;
        return null;
    }
}
EqualValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => EqualValidatorDirective)), multi: true },
                ],
            },] }
];
/** @nocollapse */
EqualValidatorDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];
if (false) {
    /** @type {?} */
    EqualValidatorDirective.prototype.validateEqual;
    /** @type {?} */
    EqualValidatorDirective.prototype.reverse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXRzL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUzNFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBQ2xDLFlBQ3FDLGFBQXFCLEVBQzNCLE9BQWU7UUFEVCxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQzNDLENBQUM7Ozs7O0lBRUosSUFBWSxTQUFTO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxDQUFrQjs7O2NBRW5CLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSzs7O2NBR1gsQ0FBQyxHQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFN0Msa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDakM7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtTQUNGO1FBRUQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDVixhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUM7U0FDSjtRQUVELGVBQWU7UUFDZixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUNOLDRGQUE0RjtnQkFDOUYsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDaEc7YUFDRjs7Ozt5Q0FHSSxTQUFTLFNBQUMsZUFBZTt5Q0FDekIsU0FBUyxTQUFDLFNBQVM7Ozs7SUFEcEIsZ0RBQXdEOztJQUN4RCwwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjpcbiAgICAnW21kYi12YWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbE5hbWVdLFt2YWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbF0sW3ZhbGlkYXRlRXF1YWxdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFZhbGlkYXRvckRpcmVjdGl2ZSksIG11bHRpOiB0cnVlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEVxdWFsVmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEF0dHJpYnV0ZSgndmFsaWRhdGVFcXVhbCcpIHB1YmxpYyB2YWxpZGF0ZUVxdWFsOiBzdHJpbmcsXG4gICAgQEF0dHJpYnV0ZSgncmV2ZXJzZScpIHB1YmxpYyByZXZlcnNlOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IGlzUmV2ZXJzZSgpIHtcbiAgICBpZiAoIXRoaXMucmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCB7XG4gICAgLy8gc2VsZiB2YWx1ZSAoZS5nLiByZXR5cGUgcGFzc3dvcmQpXG4gICAgY29uc3QgdiA9IGMudmFsdWU7XG5cbiAgICAvLyBjb250cm9sIHZhbHVlIChlLmcuIHBhc3N3b3JkKVxuICAgIGNvbnN0IGU6IGFueSA9IGMucm9vdC5nZXQodGhpcy52YWxpZGF0ZUVxdWFsKTtcblxuICAgIC8vIHZhbHVlIG5vdCBlcXVhbFxuICAgIGlmIChlICYmIHYgIT09IGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7IHZhbGlkYXRlRXF1YWw6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgLy8gdmFsdWUgZXF1YWwgYW5kIHJldmVyc2VcbiAgICBpZiAoZSAmJiB2ID09PSBlLnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XG4gICAgICBkZWxldGUgZS5lcnJvcnNbJ3ZhbGlkYXRlRXF1YWwnXTtcbiAgICAgIGlmICghT2JqZWN0LmtleXMoZS5lcnJvcnMpLmxlbmd0aCkge1xuICAgICAgICBlLnNldEVycm9ycyhudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YWx1ZSBub3QgZXF1YWwgYW5kIHJldmVyc2VcbiAgICBpZiAoZSAmJiB2ICE9PSBlLnZhbHVlICYmIHRoaXMuaXNSZXZlcnNlKSB7XG4gICAgICBlLnNldEVycm9ycyh7XG4gICAgICAgIHZhbGlkYXRlRXF1YWw6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==