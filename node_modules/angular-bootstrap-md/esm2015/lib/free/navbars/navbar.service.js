/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class NavbarService {
    constructor() {
        this.navbarLinkClicks = new Subject();
    }
    /**
     * @return {?}
     */
    getNavbarLinkClicks() {
        return this.navbarLinkClicks.asObservable();
    }
    /**
     * @return {?}
     */
    setNavbarLinkClicks() {
        this.navbarLinkClicks.next();
    }
}
NavbarService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NavbarService.prototype.navbarLinkClicks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL25hdmJhcnMvbmF2YmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUczQyxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUVVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFTaEQsQ0FBQzs7OztJQVBDLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUFWRixVQUFVOzs7Ozs7O0lBRVQseUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2YmFyU2VydmljZSB7XG4gIHByaXZhdGUgbmF2YmFyTGlua0NsaWNrcyA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBnZXROYXZiYXJMaW5rQ2xpY2tzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubmF2YmFyTGlua0NsaWNrcy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldE5hdmJhckxpbmtDbGlja3MoKSB7XG4gICAgdGhpcy5uYXZiYXJMaW5rQ2xpY2tzLm5leHQoKTtcbiAgfVxufVxuIl19