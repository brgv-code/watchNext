/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener } from '@angular/core';
var WavesDirective = /** @class */ (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top_1 = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout((/**
         * @return {?}
         */
        function () {
            ripple.style.opacity = '0';
            setTimeout((/**
             * @return {?}
             */
            function () {
                button.removeChild(ripple);
            }), 750);
        }), 200);
    };
    WavesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbWavesEffect]',
                },] }
    ];
    /** @nocollapse */
    WavesDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    WavesDirective.propDecorators = {
        click: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return WavesDirective;
}());
export { WavesDirective };
if (false) {
    /** @type {?} */
    WavesDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvd2F2ZXMvd2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFO0lBSUUsd0JBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFHOUIsOEJBQUs7Ozs7SUFEWixVQUNhLEtBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7O2dCQUNuRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDOUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxlQUFlLENBQUM7YUFDckM7O2dCQUVLLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUk7O2dCQUMxRCxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHOztnQkFFekQsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3pDLEdBQUcsQ0FBQyxTQUFTLElBQUksNkJBQTZCLENBQUM7O2dCQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7O2dCQUVoQyxLQUFHLEdBQUcsSUFBSSxHQUFHLElBQUk7O2dCQUNqQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUk7WUFFeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBRyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7Z0JBRWhCLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxrQkFBa0I7WUFFNUUsd0NBQXdDO1lBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOztnQkFFbEIsUUFBUSxHQUFHLEdBQUc7WUFFcEIsd0NBQXdDO1lBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyRCxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFFL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7Ozs7SUFFRCxxQ0FBWTs7Ozs7SUFBWixVQUFhLE1BQVcsRUFBRSxNQUFXO1FBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFMUMsVUFBVTs7O1FBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFFM0IsVUFBVTs7O1lBQUM7Z0JBQ1QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUhtQixVQUFVOzs7d0JBTzNCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBaURuQyxxQkFBQztDQUFBLEFBdkRELElBdURDO1NBcERZLGNBQWM7OztJQUNiLDRCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiV2F2ZXNFZmZlY3RdJyxcbn0pXG5leHBvcnQgY2xhc3MgV2F2ZXNEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd3YXZlcy1lZmZlY3QnKSkge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lICs9ICcgd2F2ZXMtZWZmZWN0JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgeFBvcyA9IGV2ZW50LmNsaWVudFggLSBidXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIGNvbnN0IHlQb3MgPSBldmVudC5jbGllbnRZIC0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0bXAuY2xhc3NOYW1lICs9ICd3YXZlcy1yaXBwbGUgd2F2ZXMtcmlwcGxpbmcnO1xuICAgICAgY29uc3QgcmlwcGxlID0gYnV0dG9uLmFwcGVuZENoaWxkKHRtcCk7XG5cbiAgICAgIGNvbnN0IHRvcCA9IHlQb3MgKyAncHgnO1xuICAgICAgY29uc3QgbGVmdCA9IHhQb3MgKyAncHgnO1xuXG4gICAgICB0bXAuc3R5bGUudG9wID0gdG9wO1xuICAgICAgdG1wLnN0eWxlLmxlZnQgPSBsZWZ0O1xuXG4gICAgICBjb25zdCBzY2FsZSA9ICdzY2FsZSgnICsgKGJ1dHRvbi5jbGllbnRXaWR0aCAvIDEwMCkgKiAzICsgJykgdHJhbnNsYXRlKDAsMCknO1xuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICB0bXAuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICB0bXAuc3R5bGUudHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICB0bXAuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgY29uc3QgZHVyYXRpb24gPSA3NTA7XG5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIHRtcC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgICB0bXAuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuXG4gICAgICB0aGlzLnJlbW92ZVJpcHBsZShidXR0b24sIHJpcHBsZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUmlwcGxlKGJ1dHRvbjogYW55LCByaXBwbGU6IGFueSkge1xuICAgIHJpcHBsZS5jbGFzc0xpc3QucmVtb3ZlKCd3YXZlcy1yaXBwbGluZycpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByaXBwbGUuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChyaXBwbGUpO1xuICAgICAgfSwgNzUwKTtcbiAgICB9LCAyMDApO1xuICB9XG59XG4iXX0=