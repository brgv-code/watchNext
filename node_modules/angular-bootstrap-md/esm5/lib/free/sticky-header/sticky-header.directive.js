/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { window } from '../utils/facade/browser';
import { distinctUntilChanged, filter, map, pairwise, share, skip, throttleTime, takeUntil, } from 'rxjs/operators';
/** @enum {string} */
var Direction = {
    Up: 'Up',
    Down: 'Down',
};
var StickyHeaderDirective = /** @class */ (function () {
    function StickyHeaderDirective(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.animationDuration = 200;
        this.transitionEnd = new EventEmitter();
        this._destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var scroll$ = fromEvent(window, 'scroll').pipe(throttleTime(10), map((/**
         * @return {?}
         */
        function () { return window.pageYOffset; })), pairwise(), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), y1 = _b[0], y2 = _b[1];
            return (y2 < y1 ? Direction.Up : Direction.Down);
        })), distinctUntilChanged(), share());
        this.scrollUp$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Up; })));
        this.scrollDown$ = scroll$.pipe(filter((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return direction === Direction.Down; })));
        this._renderer.setStyle(this._el.nativeElement, 'position', 'fixed');
        this._renderer.setStyle(this._el.nativeElement, 'top', '0');
        this._renderer.setStyle(this._el.nativeElement, 'width', '100%');
        this._renderer.setStyle(this._el.nativeElement, 'z-index', '1030');
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.scrollUp$
                .pipe(skip(0), takeUntil(_this._destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(0%)');
                _this.transitionEnd.emit({ state: 'Visible' });
            }));
            _this.scrollDown$
                .pipe(skip(0), takeUntil(_this._destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this._renderer.setStyle(_this._el.nativeElement, 'transition', "all " + _this.animationDuration + "ms ease-in");
                _this._renderer.setStyle(_this._el.nativeElement, 'transform', 'translateY(-100%)');
                _this.transitionEnd.emit({ state: 'Hidden' });
            }));
        }), 0);
    };
    /**
     * @return {?}
     */
    StickyHeaderDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    StickyHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbStickyHeader]',
                    exportAs: 'mdbStickyHeader',
                },] }
    ];
    /** @nocollapse */
    StickyHeaderDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    StickyHeaderDirective.propDecorators = {
        animationDuration: [{ type: Input }],
        transitionEnd: [{ type: Output }]
    };
    return StickyHeaderDirective;
}());
export { StickyHeaderDirective };
if (false) {
    /** @type {?} */
    StickyHeaderDirective.prototype.animationDuration;
    /** @type {?} */
    StickyHeaderDirective.prototype.transitionEnd;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._destroy$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollDown$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype.scrollUp$;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    StickyHeaderDirective.prototype._el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWhlYWRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3N0aWNreS1oZWFkZXIvc3RpY2t5LWhlYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxRQUFRLEVBQ1IsS0FBSyxFQUNMLElBQUksRUFDSixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7OztJQUd0QixJQUFLLElBQUk7SUFDVCxNQUFPLE1BQU07O0FBR2Y7SUFhRSwrQkFBb0IsU0FBb0IsRUFBVSxHQUFlO1FBQTdDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBUnhELHNCQUFpQixHQUFHLEdBQUcsQ0FBQztRQUN2QixrQkFBYSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV6RixjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUFLbUIsQ0FBQzs7OztJQUVyRSwrQ0FBZTs7O0lBQWY7UUFBQSxpQkFnREM7O1lBL0NPLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDOUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUNoQixHQUFHOzs7UUFBQyxjQUFNLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsRUFBQyxFQUM3QixR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QUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBeEJDLFNBQVM7Z0JBSlQsVUFBVTs7O29DQThCVCxLQUFLO2dDQUNMLE1BQU07O0lBK0RULDRCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FqRVkscUJBQXFCOzs7SUFDaEMsa0RBQWlDOztJQUNqQyw4Q0FBaUc7Ozs7O0lBRWpHLDBDQUFpRDs7Ozs7SUFFakQsNENBQXlCOzs7OztJQUN6QiwwQ0FBdUI7Ozs7O0lBRVgsMENBQTRCOzs7OztJQUFFLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4uL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgcGFpcndpc2UsXG4gIHNoYXJlLFxuICBza2lwLFxuICB0aHJvdHRsZVRpbWUsXG4gIHRha2VVbnRpbCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5lbnVtIERpcmVjdGlvbiB7XG4gIFVwID0gJ1VwJyxcbiAgRG93biA9ICdEb3duJyxcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlN0aWNreUhlYWRlcl0nLFxuICBleHBvcnRBczogJ21kYlN0aWNreUhlYWRlcicsXG59KVxuZXhwb3J0IGNsYXNzIFN0aWNreUhlYWRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbkR1cmF0aW9uID0gMjAwO1xuICBAT3V0cHV0KCkgdHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPHsgc3RhdGU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGF0ZTogc3RyaW5nIH0+KCk7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgc2Nyb2xsRG93biQ6IGFueTtcbiAgcHJpdmF0ZSBzY3JvbGxVcCQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKS5waXBlKFxuICAgICAgdGhyb3R0bGVUaW1lKDEwKSxcbiAgICAgIG1hcCgoKSA9PiB3aW5kb3cucGFnZVlPZmZzZXQpLFxuICAgICAgcGFpcndpc2UoKSxcbiAgICAgIG1hcCgoW3kxLCB5Ml0pOiBEaXJlY3Rpb24gPT4gKHkyIDwgeTEgPyBEaXJlY3Rpb24uVXAgOiBEaXJlY3Rpb24uRG93bikpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHNoYXJlKClcbiAgICApO1xuXG4gICAgdGhpcy5zY3JvbGxVcCQgPSBzY3JvbGwkLnBpcGUoZmlsdGVyKGRpcmVjdGlvbiA9PiBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5VcCkpO1xuICAgIHRoaXMuc2Nyb2xsRG93biQgPSBzY3JvbGwkLnBpcGUoZmlsdGVyKGRpcmVjdGlvbiA9PiBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Eb3duKSk7XG5cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAndG9wJywgJzAnKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCAnMTAwJScpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgJzEwMzAnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxVcCRcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc2tpcCgwKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3RyYW5zaXRpb24nLFxuICAgICAgICAgICAgYGFsbCAke3RoaXMuYW5pbWF0aW9uRHVyYXRpb259bXMgZWFzZS1pbmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmQuZW1pdCh7IHN0YXRlOiAnVmlzaWJsZScgfSk7XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5zY3JvbGxEb3duJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBza2lwKDApLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAndHJhbnNpdGlvbicsXG4gICAgICAgICAgICBgYWxsICR7dGhpcy5hbmltYXRpb25EdXJhdGlvbn1tcyBlYXNlLWluYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKC0xMDAlKScpO1xuICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkVuZC5lbWl0KHsgc3RhdGU6ICdIaWRkZW4nIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=