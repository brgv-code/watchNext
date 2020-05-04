/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new Subject();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        this.navbarLinkClicks.next();
    };
    NavbarService.decorators = [
        { type: Injectable }
    ];
    return NavbarService;
}());
export { NavbarService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavbarService.prototype.navbarLinkClicks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL25hdmJhcnMvbmF2YmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUUzQztJQUFBO1FBRVUscUJBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQVNoRCxDQUFDOzs7O0lBUEMsMkNBQW1COzs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsMkNBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBVkYsVUFBVTs7SUFXWCxvQkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLGFBQWE7Ozs7OztJQUN4Qix5Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZiYXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBuYXZiYXJMaW5rQ2xpY2tzID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGdldE5hdmJhckxpbmtDbGlja3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5uYXZiYXJMaW5rQ2xpY2tzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TmF2YmFyTGlua0NsaWNrcygpIHtcbiAgICB0aGlzLm5hdmJhckxpbmtDbGlja3MubmV4dCgpO1xuICB9XG59XG4iXX0=