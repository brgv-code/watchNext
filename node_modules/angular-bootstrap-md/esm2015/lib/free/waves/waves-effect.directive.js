/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
export class WavesDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            const button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            const xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            const yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            const tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            const ripple = button.appendChild(tmp);
            /** @type {?} */
            const top = yPos + 'px';
            /** @type {?} */
            const left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            /** @type {?} */
            const scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            const duration = 750;
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    }
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    removeRipple(button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout((/**
         * @return {?}
         */
        () => {
            ripple.style.opacity = '0';
            setTimeout((/**
             * @return {?}
             */
            () => {
                button.removeChild(ripple);
            }), 750);
        }), 200);
    }
}
WavesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbWavesEffect]',
            },] }
];
/** @nocollapse */
WavesDirective.ctorParameters = () => [
    { type: ElementRef }
];
WavesDirective.propDecorators = {
    click: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    WavesDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvd2F2ZXMvd2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXBFLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFHOUIsS0FBSyxDQUFDLEtBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7O2tCQUNuRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDOUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxlQUFlLENBQUM7YUFDckM7O2tCQUVLLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUk7O2tCQUMxRCxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHOztrQkFFekQsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pDLEdBQUcsQ0FBQyxTQUFTLElBQUksNkJBQTZCLENBQUM7O2tCQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7O2tCQUVoQyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUk7O2tCQUNqQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7WUFFeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7a0JBRWhCLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxrQkFBa0I7WUFFNUUsd0NBQXdDO1lBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOztrQkFFbEIsUUFBUSxHQUFHLEdBQUc7WUFFcEIsd0NBQXdDO1lBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyRCxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBVyxFQUFFLE1BQVc7UUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUUxQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFFM0IsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBSG1CLFVBQVU7OztvQkFPM0IsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQUZyQiw0QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYldhdmVzRWZmZWN0XScsXG59KVxuZXhwb3J0IGNsYXNzIFdhdmVzRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICghYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnd2F2ZXMtZWZmZWN0JykpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSArPSAnIHdhdmVzLWVmZmVjdCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHhQb3MgPSBldmVudC5jbGllbnRYIC0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICBjb25zdCB5UG9zID0gZXZlbnQuY2xpZW50WSAtIGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdG1wLmNsYXNzTmFtZSArPSAnd2F2ZXMtcmlwcGxlIHdhdmVzLXJpcHBsaW5nJztcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGJ1dHRvbi5hcHBlbmRDaGlsZCh0bXApO1xuXG4gICAgICBjb25zdCB0b3AgPSB5UG9zICsgJ3B4JztcbiAgICAgIGNvbnN0IGxlZnQgPSB4UG9zICsgJ3B4JztcblxuICAgICAgdG1wLnN0eWxlLnRvcCA9IHRvcDtcbiAgICAgIHRtcC5zdHlsZS5sZWZ0ID0gbGVmdDtcblxuICAgICAgY29uc3Qgc2NhbGUgPSAnc2NhbGUoJyArIChidXR0b24uY2xpZW50V2lkdGggLyAxMDApICogMyArICcpIHRyYW5zbGF0ZSgwLDApJztcblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgdG1wLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHNjYWxlO1xuICAgICAgdG1wLnN0eWxlLnRyYW5zZm9ybSA9IHNjYWxlO1xuICAgICAgdG1wLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gNzUwO1xuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICB0bXAuc3R5bGUud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgdG1wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcblxuICAgICAgdGhpcy5yZW1vdmVSaXBwbGUoYnV0dG9uLCByaXBwbGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVJpcHBsZShidXR0b246IGFueSwgcmlwcGxlOiBhbnkpIHtcbiAgICByaXBwbGUuY2xhc3NMaXN0LnJlbW92ZSgnd2F2ZXMtcmlwcGxpbmcnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmlwcGxlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgIH0sIDc1MCk7XG4gICAgfSwgMjAwKTtcbiAgfVxufVxuIl19