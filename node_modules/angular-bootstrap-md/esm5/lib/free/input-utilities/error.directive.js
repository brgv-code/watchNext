/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, HostBinding, ElementRef, Renderer2, ViewEncapsulation, Component, } from '@angular/core';
import { Utils } from '../utils';
/** @type {?} */
var defaultIdNumber = 0;
var MdbErrorDirective = /** @class */ (function () {
    function MdbErrorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = "mdb-error-" + defaultIdNumber++;
        this.errorMsg = true;
        this.messageId = this.id;
        this.utils = new Utils();
    }
    /**
     * @private
     * @return {?}
     */
    MdbErrorDirective.prototype._calculateMarginTop = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        /** @type {?} */
        var heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            /** @type {?} */
            var margin = heightParent / 12.5;
            this.el.nativeElement.style.top = heightParent + heightParent / margin + "px";
        }
    };
    /**
     * @return {?}
     */
    MdbErrorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.prefix = this.el.nativeElement.parentNode.querySelector('.prefix');
        if (this.prefix) {
            this.prefix.classList.add('error-message');
        }
        /** @type {?} */
        var textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            /** @type {?} */
            var height_1 = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height_1);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', (/**
             * @return {?}
             */
            function () {
                height_1 = textarea.offsetHeight + 4 + 'px';
                _this.renderer.setStyle(_this.el.nativeElement, 'top', height_1);
            }));
        }
    };
    /**
     * @return {?}
     */
    MdbErrorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
        if (this.prefix) {
            this.prefix.classList.remove('error-message');
        }
    };
    MdbErrorDirective.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-error',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".error-message,.success-message{position:absolute;top:40px;left:0;font-size:.8rem}textarea~.error-message,textarea~.success-message{top:unset;bottom:-20px}.error-message{color:#f44336}.success-message{color:#00c851}"]
                }] }
    ];
    /** @nocollapse */
    MdbErrorDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbErrorDirective.propDecorators = {
        id: [{ type: Input }],
        errorMsg: [{ type: HostBinding, args: ['class.error-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbErrorDirective;
}());
export { MdbErrorDirective };
if (false) {
    /** @type {?} */
    MdbErrorDirective.prototype.prefix;
    /** @type {?} */
    MdbErrorDirective.prototype.id;
    /** @type {?} */
    MdbErrorDirective.prototype.errorMsg;
    /** @type {?} */
    MdbErrorDirective.prototype.messageId;
    /** @type {?} */
    MdbErrorDirective.prototype.textareaListenFunction;
    /**
     * @type {?}
     * @private
     */
    MdbErrorDirective.prototype.utils;
    /**
     * @type {?}
     * @private
     */
    MdbErrorDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbErrorDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUVULGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQzs7SUFFN0IsZUFBZSxHQUFHLENBQUM7QUFFdkI7SUFrQkUsMkJBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVR0RCxPQUFFLEdBQUcsZUFBYSxlQUFlLEVBQUksQ0FBQztRQUVYLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFJcEMsVUFBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7SUFFK0IsQ0FBQzs7Ozs7SUFFM0QsK0NBQW1COzs7O0lBQTNCOztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7WUFDdEUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN4RCxJQUFJLFlBQVksRUFBRTs7Z0JBQ1YsTUFBTSxHQUFHLFlBQVksR0FBRyxJQUFJO1lBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQU0sWUFBWSxHQUFHLFlBQVksR0FBRyxNQUFNLE9BQUksQ0FBQztTQUMvRTtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM1Qzs7WUFFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO1FBQy9FLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxFQUFFOztnQkFDUixRQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBTSxDQUFDLENBQUM7WUFFN0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPOzs7WUFBRTtnQkFDcEUsUUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFFBQU0sQ0FBQyxDQUFDO1lBQy9ELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsMkJBQTJCO29CQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQWZDLFVBQVU7Z0JBQ1YsU0FBUzs7O3FCQWtCUixLQUFLOzJCQUVMLFdBQVcsU0FBQyxxQkFBcUI7NEJBQ2pDLFdBQVcsU0FBQyxTQUFTOztJQTRDeEIsd0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQWpEWSxpQkFBaUI7OztJQUM1QixtQ0FBb0I7O0lBQ3BCLCtCQUErQzs7SUFFL0MscUNBQW9EOztJQUNwRCxzQ0FBNEM7O0lBRTVDLG1EQUFpQzs7Ozs7SUFFakMsa0NBQW1DOzs7OztJQUV2QiwrQkFBc0I7Ozs7O0lBQUUscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25EZXN0cm95LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29tcG9uZW50LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5sZXQgZGVmYXVsdElkTnVtYmVyID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWVycm9yJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtdXRpbGl0aWVzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJFcnJvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJlZml4OiBIVE1MRWxlbWVudDtcbiAgQElucHV0KCkgaWQgPSBgbWRiLWVycm9yLSR7ZGVmYXVsdElkTnVtYmVyKyt9YDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVycm9yLW1lc3NhZ2UnKSBlcnJvck1zZyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpIG1lc3NhZ2VJZCA9IHRoaXMuaWQ7XG5cbiAgdGV4dGFyZWFMaXN0ZW5GdW5jdGlvbjogRnVuY3Rpb247XG5cbiAgcHJpdmF0ZSB1dGlsczogVXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlTWFyZ2luVG9wKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNoZWNrJyk7XG4gICAgY29uc3QgaGVpZ2h0UGFyZW50ID0gcGFyZW50ID8gcGFyZW50Lm9mZnNldEhlaWdodCA6IG51bGw7XG4gICAgaWYgKGhlaWdodFBhcmVudCkge1xuICAgICAgY29uc3QgbWFyZ2luID0gaGVpZ2h0UGFyZW50IC8gMTIuNTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtoZWlnaHRQYXJlbnQgKyBoZWlnaHRQYXJlbnQgLyBtYXJnaW59cHhgO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJlZml4ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnByZWZpeCcpO1xuICAgIGlmICh0aGlzLnByZWZpeCkge1xuICAgICAgdGhpcy5wcmVmaXguY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy51dGlscy5nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1kLXRleHRhcmVhJyk7XG4gICAgdGhpcy5fY2FsY3VsYXRlTWFyZ2luVG9wKCk7XG4gICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gdGV4dGFyZWEub2Zmc2V0SGVpZ2h0ICsgNCArICdweCc7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGhlaWdodCk7XG5cbiAgICAgIHRoaXMudGV4dGFyZWFMaXN0ZW5GdW5jdGlvbiA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRleHRhcmVhLCAna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgIGhlaWdodCA9IHRleHRhcmVhLm9mZnNldEhlaWdodCArIDQgKyAncHgnO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLnRleHRhcmVhTGlzdGVuRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJlZml4KSB7XG4gICAgICB0aGlzLnByZWZpeC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1tZXNzYWdlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=