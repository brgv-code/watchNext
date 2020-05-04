/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, HostBinding, ElementRef, Renderer2, ViewEncapsulation, Component, } from '@angular/core';
import { Utils } from '../utils';
/** @type {?} */
let defaultIdNumber = 0;
// tslint:disable-next-line:component-class-suffix
export class MdbErrorDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.id = `mdb-error-${defaultIdNumber++}`;
        this.errorMsg = true;
        this.messageId = this.id;
        this.utils = new Utils();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateMarginTop() {
        /** @type {?} */
        const parent = this.el.nativeElement.parentNode.querySelector('.form-check');
        /** @type {?} */
        const heightParent = parent ? parent.offsetHeight : null;
        if (heightParent) {
            /** @type {?} */
            const margin = heightParent / 12.5;
            this.el.nativeElement.style.top = `${heightParent + heightParent / margin}px`;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.prefix = this.el.nativeElement.parentNode.querySelector('.prefix');
        if (this.prefix) {
            this.prefix.classList.add('error-message');
        }
        /** @type {?} */
        const textarea = this.utils.getClosestEl(this.el.nativeElement, '.md-textarea');
        this._calculateMarginTop();
        if (textarea) {
            /** @type {?} */
            let height = textarea.offsetHeight + 4 + 'px';
            this.renderer.setStyle(this.el.nativeElement, 'top', height);
            this.textareaListenFunction = this.renderer.listen(textarea, 'keyup', (/**
             * @return {?}
             */
            () => {
                height = textarea.offsetHeight + 4 + 'px';
                this.renderer.setStyle(this.el.nativeElement, 'top', height);
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.textareaListenFunction) {
            this.textareaListenFunction();
        }
        if (this.prefix) {
            this.prefix.classList.remove('error-message');
        }
    }
}
MdbErrorDirective.decorators = [
    { type: Component, args: [{
                selector: 'mdb-error',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: [".error-message,.success-message{position:absolute;top:40px;left:0;font-size:.8rem}textarea~.error-message,textarea~.success-message{top:unset;bottom:-20px}.error-message{color:#f44336}.success-message{color:#00c851}"]
            }] }
];
/** @nocollapse */
MdbErrorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbErrorDirective.propDecorators = {
    id: [{ type: Input }],
    errorMsg: [{ type: HostBinding, args: ['class.error-message',] }],
    messageId: [{ type: HostBinding, args: ['attr.id',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUVULGlCQUFpQixFQUNqQixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQzs7SUFFN0IsZUFBZSxHQUFHLENBQUM7QUFRdkIsa0RBQWtEO0FBQ2xELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBVzVCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVR0RCxPQUFFLEdBQUcsYUFBYSxlQUFlLEVBQUUsRUFBRSxDQUFDO1FBRVgsYUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUlwQyxVQUFLLEdBQVUsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUUrQixDQUFDOzs7OztJQUUzRCxtQkFBbUI7O2NBQ25CLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7Y0FDdEUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUN4RCxJQUFJLFlBQVksRUFBRTs7a0JBQ1YsTUFBTSxHQUFHLFlBQVksR0FBRyxJQUFJO1lBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDO1NBQy9FO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzVDOztjQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7UUFDL0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxRQUFRLEVBQUU7O2dCQUNSLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU87OztZQUFFLEdBQUcsRUFBRTtnQkFDekUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7O1lBdkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLDJCQUEyQjtnQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBZkMsVUFBVTtZQUNWLFNBQVM7OztpQkFrQlIsS0FBSzt1QkFFTCxXQUFXLFNBQUMscUJBQXFCO3dCQUNqQyxXQUFXLFNBQUMsU0FBUzs7OztJQUp0QixtQ0FBb0I7O0lBQ3BCLCtCQUErQzs7SUFFL0MscUNBQW9EOztJQUNwRCxzQ0FBNEM7O0lBRTVDLG1EQUFpQzs7Ozs7SUFFakMsa0NBQW1DOzs7OztJQUV2QiwrQkFBc0I7Ozs7O0lBQUUscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25EZXN0cm95LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29tcG9uZW50LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5sZXQgZGVmYXVsdElkTnVtYmVyID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWVycm9yJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtdXRpbGl0aWVzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJFcnJvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJlZml4OiBIVE1MRWxlbWVudDtcbiAgQElucHV0KCkgaWQgPSBgbWRiLWVycm9yLSR7ZGVmYXVsdElkTnVtYmVyKyt9YDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmVycm9yLW1lc3NhZ2UnKSBlcnJvck1zZyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpIG1lc3NhZ2VJZCA9IHRoaXMuaWQ7XG5cbiAgdGV4dGFyZWFMaXN0ZW5GdW5jdGlvbjogRnVuY3Rpb247XG5cbiAgcHJpdmF0ZSB1dGlsczogVXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlTWFyZ2luVG9wKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNoZWNrJyk7XG4gICAgY29uc3QgaGVpZ2h0UGFyZW50ID0gcGFyZW50ID8gcGFyZW50Lm9mZnNldEhlaWdodCA6IG51bGw7XG4gICAgaWYgKGhlaWdodFBhcmVudCkge1xuICAgICAgY29uc3QgbWFyZ2luID0gaGVpZ2h0UGFyZW50IC8gMTIuNTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtoZWlnaHRQYXJlbnQgKyBoZWlnaHRQYXJlbnQgLyBtYXJnaW59cHhgO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucHJlZml4ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnByZWZpeCcpO1xuICAgIGlmICh0aGlzLnByZWZpeCkge1xuICAgICAgdGhpcy5wcmVmaXguY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy51dGlscy5nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1kLXRleHRhcmVhJyk7XG4gICAgdGhpcy5fY2FsY3VsYXRlTWFyZ2luVG9wKCk7XG4gICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gdGV4dGFyZWEub2Zmc2V0SGVpZ2h0ICsgNCArICdweCc7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGhlaWdodCk7XG5cbiAgICAgIHRoaXMudGV4dGFyZWFMaXN0ZW5GdW5jdGlvbiA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRleHRhcmVhLCAna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgIGhlaWdodCA9IHRleHRhcmVhLm9mZnNldEhlaWdodCArIDQgKyAncHgnO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RvcCcsIGhlaWdodCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50ZXh0YXJlYUxpc3RlbkZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLnRleHRhcmVhTGlzdGVuRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJlZml4KSB7XG4gICAgICB0aGlzLnByZWZpeC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvci1tZXNzYWdlJyk7XG4gICAgfVxuICB9XG59XG4iXX0=