/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, } from '@angular/core';
/** @enum {string} */
var SortDirection = {
    ASC: 'ascending',
    DESC: 'descending',
    CONST: 'constant',
};
/**
 * @record
 */
export function SortedData() { }
if (false) {
    /** @type {?} */
    SortedData.prototype.data;
    /** @type {?} */
    SortedData.prototype.sortOrder;
    /** @type {?} */
    SortedData.prototype.sortBy;
}
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortedInto = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
    };
    /**
     * @param {?} headElement
     * @return {?}
     */
    MdbTableSortDirective.prototype.trimWhiteSigns = /**
     * @param {?} headElement
     * @return {?}
     */
    function (headElement) {
        return headElement.replace(/ /g, '');
    };
    /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    MdbTableSortDirective.prototype.moveArrayItem = /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            /** @type {?} */
            var k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MdbTableSortDirective.prototype.sortDataBy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        /** @type {?} */
        var ariaPass = true;
        /** @type {?} */
        var setAria = (/**
         * @param {?} sort
         * @param {?} id
         * @return {?}
         */
        function (sort, id) {
            if (ariaPass) {
                /** @type {?} */
                var inverse = sort === 'ascending' ? 'descending' : 'ascending';
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', sort);
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', id + ": activate to sort column " + inverse);
                ariaPass = false;
            }
        });
        key = key.split('.');
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                setAria('ascending', key);
                _this.order = SortDirection.ASC;
                return _this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                setAria('descending', key);
                _this.order = SortDirection.DESC;
                return _this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                _this.order = SortDirection.CONST;
                return 1;
            }
            else {
                _this.order = SortDirection.CONST;
                return 0;
            }
        }));
        this.sortedInto = !this.sortedInto;
    };
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
    };
    MdbTableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableSort]',
                },] }
    ];
    /** @nocollapse */
    MdbTableSortDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbTableSortDirective.propDecorators = {
        dataSource: [{ type: Input, args: ['mdbTableSort',] }],
        sortBy: [{ type: Input }],
        sortEnd: [{ type: Output }],
        sorted: [{ type: Output }],
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
if (false) {
    /** @type {?} */
    MdbTableSortDirective.prototype.sortedInto;
    /** @type {?} */
    MdbTableSortDirective.prototype.order;
    /** @type {?} */
    MdbTableSortDirective.prototype.dataSource;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortBy;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortEnd;
    /** @type {?} */
    MdbTableSortDirective.prototype.sorted;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvZGlyZWN0aXZlcy9tZGItdGFibGUtc29ydC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7OztJQUdyQixLQUFNLFdBQVc7SUFDakIsTUFBTyxZQUFZO0lBQ25CLE9BQVEsVUFBVTs7Ozs7QUFHcEIsZ0NBSUM7OztJQUhDLDBCQUFZOztJQUNaLCtCQUFrQjs7SUFDbEIsNEJBQWU7O0FBR2pCO0lBYUUsK0JBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVQvRCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBR0ssZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUd6QyxZQUFPLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFDekQsV0FBTSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBRVYsQ0FBQzs7OztJQUU1Qyx1Q0FBTzs7O0lBQTlCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDckIsTUFBTSxFQUFF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ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmVudW0gU29ydERpcmVjdGlvbiB7XG4gIEFTQyA9ICdhc2NlbmRpbmcnLFxuICBERVNDID0gJ2Rlc2NlbmRpbmcnLFxuICBDT05TVCA9ICdjb25zdGFudCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydGVkRGF0YSB7XG4gIGRhdGE6IGFueVtdO1xuICBzb3J0T3JkZXI6IHN0cmluZztcbiAgc29ydEJ5OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVNvcnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc29ydGVkSW50byA9IHRydWU7XG4gIG9yZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzb3J0RW5kOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHNvcnRlZDogRXZlbnRFbWl0dGVyPFNvcnRlZERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0ZWREYXRhPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5zb3J0RGF0YUJ5KHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKSkpO1xuICAgIHRoaXMuc29ydEVuZC5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgdGhpcy5zb3J0ZWQuZW1pdCh7XG4gICAgICBkYXRhOiB0aGlzLmRhdGFTb3VyY2UsXG4gICAgICBzb3J0T3JkZXI6IHRoaXMub3JkZXIsXG4gICAgICBzb3J0Qnk6IHRoaXMuc29ydEJ5LFxuICAgIH0pO1xuICB9XG5cbiAgdHJpbVdoaXRlU2lnbnMoaGVhZEVsZW1lbnQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGhlYWRFbGVtZW50LnJlcGxhY2UoLyAvZywgJycpO1xuICB9XG5cbiAgcHVibGljIG1vdmVBcnJheUl0ZW0oYXJyOiBhbnksIG9sZEluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpIHtcbiAgICB3aGlsZSAob2xkSW5kZXggPCAwKSB7XG4gICAgICBvbGRJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCArPSBhcnIubGVuZ3RoO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgbGV0IGsgPSBuZXdJbmRleCAtIGFyci5sZW5ndGg7XG4gICAgICB3aGlsZSAoay0tICsgMSkge1xuICAgICAgICBhcnIucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJyLnNwbGljZShuZXdJbmRleCwgMCwgYXJyLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBzb3J0RGF0YUJ5KGtleTogc3RyaW5nIHwgYW55KSB7XG4gICAgbGV0IGFyaWFQYXNzID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNldEFyaWEgPSAoc29ydDogJ2FzY2VuZGluZycgfCAnZGVzY2VuZGluZycsIGlkOiBhbnkpID0+IHtcbiAgICAgIGlmIChhcmlhUGFzcykge1xuICAgICAgICBjb25zdCBpbnZlcnNlID0gc29ydCA9PT0gJ2FzY2VuZGluZycgPyAnZGVzY2VuZGluZycgOiAnYXNjZW5kaW5nJztcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLXNvcnQnLCBzb3J0KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICAgICBgJHtpZH06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uICR7aW52ZXJzZX1gXG4gICAgICAgICk7XG4gICAgICAgIGFyaWFQYXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGtleSA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGtleS5sZW5ndGgpIHtcbiAgICAgICAgYSA9IGFba2V5W2ldXTtcbiAgICAgICAgYiA9IGJba2V5W2ldXTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgc2V0QXJpYSgnYXNjZW5kaW5nJywga2V5KTtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQVNDO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEludG8gPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHNldEFyaWEoJ2Rlc2NlbmRpbmcnLCBrZXkpO1xuICAgICAgICB0aGlzLm9yZGVyID0gU29ydERpcmVjdGlvbi5ERVNDO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZEludG8gPyAtMSA6IDE7XG4gICAgICB9IGVsc2UgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQ09OU1Q7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uQ09OU1Q7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3J0ZWRJbnRvID0gIXRoaXMuc29ydGVkSW50bztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGtleSA9IHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKSkuc3BsaXQoJy4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGRlc2NlbmRpbmdgXG4gICAgKTtcbiAgfVxufVxuIl19