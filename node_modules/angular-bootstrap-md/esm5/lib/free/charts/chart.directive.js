/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, ElementRef, Input, Output, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
var BaseChartDirective = /** @class */ (function () {
    function BaseChartDirective(element, platformId) {
        this.element = element;
        this.labels = [];
        this.options = { legend: { display: false } };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) &&
                !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = /**
     * @param {?} ctx
     * @return {?}
     */
    function (ctx) {
        var _this = this;
        /** @type {?} */
        var datasets = this.getDatasets();
        /** @type {?} */
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = (/**
             * @param {?} event
             * @param {?} active
             * @return {?}
             */
            function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            });
        }
        if (!options.onClick) {
            options.onClick = (/**
             * @param {?} event
             * @param {?} active
             * @return {?}
             */
            function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            });
        }
        /** @type {?} */
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets,
            },
            options: options,
        };
        return new Chart(ctx, opts);
    };
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    /**
     * @param {?} event
     * @return {?}
     */
    BaseChartDirective.prototype.getPointDataAtEvent = 
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.active.length > 0) {
            /** @type {?} */
            var datasetIndex = event.active[0]._datasetIndex;
            /** @type {?} */
            var dataIndex = event.active[0]._index;
            /** @type {?} */
            var dataObject = this.datasets[datasetIndex].data[dataIndex];
            return dataObject;
        }
    };
    /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach((/**
             * @param {?} dataset
             * @param {?} i
             * @return {?}
             */
            function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            }));
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || (!this.datasets.length && (this.data && this.data.length))) {
            if (Array.isArray(this.data[0])) {
                datasets = ((/** @type {?} */ (this.data))).map((/**
                 * @param {?} data
                 * @param {?} index
                 * @return {?}
                 */
                function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                }));
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if ((this.datasets && this.datasets.length) || (datasets && datasets.length)) {
            datasets = (this.datasets || datasets).map((/**
             * @param {?} elm
             * @param {?} index
             * @return {?}
             */
            function (elm, index) {
                /** @type {?} */
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            }));
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = /**
     * @private
     * @return {?}
     */
    function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96],
    ];
    BaseChartDirective.decorators = [
        { type: Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    BaseChartDirective.propDecorators = {
        data: [{ type: Input }],
        datasets: [{ type: Input }],
        labels: [{ type: Input }],
        options: [{ type: Input }],
        chartType: [{ type: Input }],
        colors: [{ type: Input }],
        legend: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartHover: [{ type: Output }]
    };
    return BaseChartDirective;
}());
export { BaseChartDirective };
if (false) {
    /** @type {?} */
    BaseChartDirective.defaultColors;
    /** @type {?} */
    BaseChartDirective.prototype.data;
    /** @type {?} */
    BaseChartDirective.prototype.datasets;
    /** @type {?} */
    BaseChartDirective.prototype.labels;
    /** @type {?} */
    BaseChartDirective.prototype.options;
    /** @type {?} */
    BaseChartDirective.prototype.chartType;
    /** @type {?} */
    BaseChartDirective.prototype.colors;
    /** @type {?} */
    BaseChartDirective.prototype.legend;
    /** @type {?} */
    BaseChartDirective.prototype.chartClick;
    /** @type {?} */
    BaseChartDirective.prototype.chartHover;
    /** @type {?} */
    BaseChartDirective.prototype.ctx;
    /** @type {?} */
    BaseChartDirective.prototype.chart;
    /** @type {?} */
    BaseChartDirective.prototype.cvs;
    /** @type {?} */
    BaseChartDirective.prototype.initFlag;
    /** @type {?} */
    BaseChartDirective.prototype.isBrowser;
    /** @type {?} */
    BaseChartDirective.prototype.element;
}
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8),
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1),
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 0.6); })),
        borderColor: colors.map((/**
         * @return {?}
         */
        function () { return '#fff'; })),
        pointBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
        pointBorderColor: colors.map((/**
         * @return {?}
         */
        function () { return '#fff'; })),
        pointHoverBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
        pointHoverBorderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 0.6); })),
        borderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
        hoverBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 0.8); })),
        hoverBorderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        function (color) { return rgba(color, 1); })),
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    /** @type {?} */
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9jaGFydHMvY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBSUwsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlwRDtJQW9DRSw0QkFBMEIsT0FBbUIsRUFBdUIsVUFBa0I7UUFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQWpCN0IsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUc5QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU1wRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRU0scUNBQVE7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDdEMs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biAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBEaXJlY3RpdmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJy4vY29sb3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4vY29sb3JzLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgQ2hhcnQ6IGFueTtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnY2FudmFzW21kYkNoYXJ0XScsIGV4cG9ydEFzOiAnbWRiLWJhc2UtY2hhcnQnIH0pXG5leHBvcnQgY2xhc3MgQmFzZUNoYXJ0RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgQ29sb3JzIHtcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0Q29sb3JzOiBBcnJheTxudW1iZXJbXT4gPSBbXG4gICAgWzI1NSwgOTksIDEzMl0sXG4gICAgWzU0LCAxNjIsIDIzNV0sXG4gICAgWzI1NSwgMjA2LCA4Nl0sXG4gICAgWzIzMSwgMjMzLCAyMzddLFxuICAgIFs3NSwgMTkyLCAxOTJdLFxuICAgIFsxNTEsIDE4NywgMjA1XSxcbiAgICBbMjIwLCAyMjAsIDIyMF0sXG4gICAgWzI0NywgNzAsIDc0XSxcbiAgICBbNzAsIDE5MSwgMTg5XSxcbiAgICBbMjUzLCAxODAsIDkyXSxcbiAgICBbMTQ4LCAxNTksIDE3N10sXG4gICAgWzc3LCA4MywgOTZdLFxuICBdO1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhOiBudW1iZXJbXSB8IGFueVtdO1xuICBASW5wdXQoKSBwdWJsaWMgZGF0YXNldHM6IGFueVtdO1xuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxzOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7IGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9IH07XG4gIEBJbnB1dCgpIHB1YmxpYyBjaGFydFR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGNvbG9yczogQXJyYXk8YW55PjtcbiAgQElucHV0KCkgcHVibGljIGxlZ2VuZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2hhcnRIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIGN0eDogYW55O1xuICBwdWJsaWMgY2hhcnQ6IGFueTtcblxuICBjdnM6IGFueTtcbiAgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBhbnkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5jdHggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgdGhpcy5jdnMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuZGF0YSB8fCB0aGlzLmRhdGFzZXRzKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjaGFuZ2VzIGFyZSBpbiB0aGUgZGF0YSBvciBkYXRhc2V0c1xuICAgICAgaWYgKFxuICAgICAgICAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpIHx8IGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2RhdGFzZXRzJykpICYmXG4gICAgICAgICFjaGFuZ2VzLmhhc093blByb3BlcnR5KCdsYWJlbHMnKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWydkYXRhJ10pIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0RGF0YShjaGFuZ2VzWydkYXRhJ10uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNoYXJ0RGF0YShjaGFuZ2VzWydkYXRhc2V0cyddLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHJlYnVpbGQgdGhlIGNoYXJ0XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiBhbnkge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldENoYXJ0QnVpbGRlcihjdHg6IGFueSk6IGFueSB7XG4gICAgY29uc3QgZGF0YXNldHM6IGFueSA9IHRoaXMuZ2V0RGF0YXNldHMoKTtcblxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKHRoaXMubGVnZW5kID09PSBmYWxzZSkge1xuICAgICAgb3B0aW9ucy5sZWdlbmQgPSB7IGRpc3BsYXk6IGZhbHNlIH07XG4gICAgfVxuICAgIC8vIGhvY2sgZm9yIG9uSG92ZXIgYW5kIG9uQ2xpY2sgZXZlbnRzXG4gICAgb3B0aW9ucy5ob3ZlciA9IG9wdGlvbnMuaG92ZXIgfHwge307XG4gICAgaWYgKCFvcHRpb25zLmhvdmVyLm9uSG92ZXIpIHtcbiAgICAgIG9wdGlvbnMuaG92ZXIub25Ib3ZlciA9IChldmVudDogYW55LCBhY3RpdmU6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSAmJiBhY3RpdmUubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jaGFydEhvdmVyLmVtaXQoeyBldmVudCwgYWN0aXZlIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5vbkNsaWNrKSB7XG4gICAgICBvcHRpb25zLm9uQ2xpY2sgPSAoZXZlbnQ6IGFueSwgYWN0aXZlOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnRDbGljay5lbWl0KHsgZXZlbnQsIGFjdGl2ZSB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIHR5cGU6IHRoaXMuY2hhcnRUeXBlLFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IHRoaXMubGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICB9LFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBDaGFydChjdHgsIG9wdHMpO1xuICB9XG5cbiAgLy8gZmVhdHVyZShjaGFydCk6IGFkZGVkIGdldFBvaW50RGF0YUF0RXZlbnQgd2hpY2ggd2lsbCByZXR1cm4gY2xpY2tlZCBjaGFydCdzIHBvaW50IGRhdGFcbiAgcHVibGljIGdldFBvaW50RGF0YUF0RXZlbnQoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC5hY3RpdmUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZGF0YXNldEluZGV4ID0gZXZlbnQuYWN0aXZlWzBdLl9kYXRhc2V0SW5kZXg7XG4gICAgICBjb25zdCBkYXRhSW5kZXggPSBldmVudC5hY3RpdmVbMF0uX2luZGV4O1xuICAgICAgY29uc3QgZGF0YU9iamVjdCA9IHRoaXMuZGF0YXNldHNbZGF0YXNldEluZGV4XS5kYXRhW2RhdGFJbmRleF07XG4gICAgICByZXR1cm4gZGF0YU9iamVjdDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoYXJ0RGF0YShuZXdEYXRhVmFsdWVzOiBudW1iZXJbXSB8IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobmV3RGF0YVZhbHVlc1swXS5kYXRhKSkge1xuICAgICAgdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzLmZvckVhY2goKGRhdGFzZXQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGRhdGFzZXQuZGF0YSA9IG5ld0RhdGFWYWx1ZXNbaV0uZGF0YTtcblxuICAgICAgICBpZiAobmV3RGF0YVZhbHVlc1tpXS5sYWJlbCkge1xuICAgICAgICAgIGRhdGFzZXQubGFiZWwgPSBuZXdEYXRhVmFsdWVzW2ldLmxhYmVsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBuZXdEYXRhVmFsdWVzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0YXNldHMoKTogYW55IHtcbiAgICBsZXQgZGF0YXNldHM6IGFueSA9IHZvaWQgMDtcbiAgICAvLyBpbiBjYXNlIGlmIGRhdGFzZXRzIGlzIG5vdCBwcm92aWRlZCwgYnV0IGRhdGEgaXMgcHJlc2VudFxuICAgIGlmICghdGhpcy5kYXRhc2V0cyB8fCAoIXRoaXMuZGF0YXNldHMubGVuZ3RoICYmICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCkpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGFbMF0pKSB7XG4gICAgICAgIGRhdGFzZXRzID0gKHRoaXMuZGF0YSBhcyBBcnJheTxudW1iZXJbXT4pLm1hcCgoZGF0YTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4geyBkYXRhLCBsYWJlbDogdGhpcy5sYWJlbHNbaW5kZXhdIHx8IGBMYWJlbCAke2luZGV4fWAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhc2V0cyA9IFt7IGRhdGE6IHRoaXMuZGF0YSwgbGFiZWw6IGBMYWJlbCAwYCB9XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHRoaXMuZGF0YXNldHMgJiYgdGhpcy5kYXRhc2V0cy5sZW5ndGgpIHx8IChkYXRhc2V0cyAmJiBkYXRhc2V0cy5sZW5ndGgpKSB7XG4gICAgICBkYXRhc2V0cyA9ICh0aGlzLmRhdGFzZXRzIHx8IGRhdGFzZXRzKS5tYXAoKGVsbTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsbTogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgZWxtKTtcbiAgICAgICAgaWYgKHRoaXMuY29sb3JzICYmIHRoaXMuY29sb3JzLmxlbmd0aCkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3RWxtLCB0aGlzLmNvbG9yc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3RWxtLCBnZXRDb2xvcnModGhpcy5jaGFydFR5cGUsIGluZGV4LCBuZXdFbG0uZGF0YS5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RWxtO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhc2V0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBuZy1jaGFydHMgY29uZmlndXJhdGlvbiBlcnJvcixcbiAgICAgIGRhdGEgb3IgZGF0YXNldHMgZmllbGQgYXJlIHJlcXVpcmVkIHRvIHJlbmRlciBjaGFyICR7dGhpcy5jaGFydFR5cGV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFzZXRzO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKCk6IGFueSB7XG4gICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICAgIHRoaXMuY2hhcnQgPSB0aGlzLmdldENoYXJ0QnVpbGRlcih0aGlzLmN0eCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmdiYShjb2xvdXI6IEFycmF5PG51bWJlcj4sIGFscGhhOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gJ3JnYmEoJyArIGNvbG91ci5jb25jYXQoYWxwaGEpLmpvaW4oJywnKSArICcpJztcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRMaW5lQ29sb3IoY29sb3JzOiBBcnJheTxudW1iZXI+KTogQ29sb3Ige1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDAuNCksXG4gICAgYm9yZGVyQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcbiAgICBwb2ludEJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcbiAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMC44KSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0QmFyQ29sb3IoY29sb3JzOiBBcnJheTxudW1iZXI+KTogQ29sb3Ige1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDAuNiksXG4gICAgYm9yZGVyQ29sb3I6IHJnYmEoY29sb3JzLCAxKSxcbiAgICBob3ZlckJhY2tncm91bmRDb2xvcjogcmdiYShjb2xvcnMsIDAuOCksXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRQaWVDb2xvcnMoY29sb3JzOiBBcnJheTxudW1iZXJbXT4pOiBhbnkge1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAwLjYpKSxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLm1hcCgoKSA9PiAnI2ZmZicpLFxuICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgICBwb2ludEJvcmRlckNvbG9yOiBjb2xvcnMubWFwKCgpID0+ICcjZmZmJyksXG4gICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UG9sYXJBcmVhQ29sb3JzKGNvbG9yczogQXJyYXk8bnVtYmVyW10+KTogQ29sb3Ige1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAwLjYpKSxcbiAgICBib3JkZXJDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gICAgaG92ZXJCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMC44KSksXG4gICAgaG92ZXJCb3JkZXJDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAxKSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCk6IG51bWJlcltdIHtcbiAgcmV0dXJuIFtnZXRSYW5kb21JbnQoMCwgMjU1KSwgZ2V0UmFuZG9tSW50KDAsIDI1NSksIGdldFJhbmRvbUludCgwLCAyNTUpXTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBjb2xvcnMgZm9yIGxpbmV8YmFyIGNoYXJ0c1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9yKGluZGV4OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gIHJldHVybiBCYXNlQ2hhcnREaXJlY3RpdmUuZGVmYXVsdENvbG9yc1tpbmRleF0gfHwgZ2V0UmFuZG9tQ29sb3IoKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBjb2xvcnMgZm9yIHBpZXxkb3VnaG51dCBjaGFydHNcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVDb2xvcnMoY291bnQ6IG51bWJlcik6IEFycmF5PG51bWJlcltdPiB7XG4gIGNvbnN0IGNvbG9yc0FycjogQXJyYXk8bnVtYmVyW10+ID0gbmV3IEFycmF5KGNvdW50KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY29sb3JzQXJyW2ldID0gQmFzZUNoYXJ0RGlyZWN0aXZlLmRlZmF1bHRDb2xvcnNbaV0gfHwgZ2V0UmFuZG9tQ29sb3IoKTtcbiAgfVxuICByZXR1cm4gY29sb3JzQXJyO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9ycyBieSBjaGFydCB0eXBlXG4gKi9cbmZ1bmN0aW9uIGdldENvbG9ycyhjaGFydFR5cGU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgY291bnQ6IG51bWJlcik6IGFueSB7XG4gIGlmIChjaGFydFR5cGUgPT09ICdwaWUnIHx8IGNoYXJ0VHlwZSA9PT0gJ2RvdWdobnV0Jykge1xuICAgIHJldHVybiBmb3JtYXRQaWVDb2xvcnMoZ2VuZXJhdGVDb2xvcnMoY291bnQpKTtcbiAgfVxuXG4gIGlmIChjaGFydFR5cGUgPT09ICdwb2xhckFyZWEnKSB7XG4gICAgcmV0dXJuIGZvcm1hdFBvbGFyQXJlYUNvbG9ycyhnZW5lcmF0ZUNvbG9ycyhjb3VudCkpO1xuICB9XG5cbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ2xpbmUnIHx8IGNoYXJ0VHlwZSA9PT0gJ3JhZGFyJykge1xuICAgIHJldHVybiBmb3JtYXRMaW5lQ29sb3IoZ2VuZXJhdGVDb2xvcihpbmRleCkpO1xuICB9XG5cbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ2JhcicgfHwgY2hhcnRUeXBlID09PSAnaG9yaXpvbnRhbEJhcicpIHtcbiAgICByZXR1cm4gZm9ybWF0QmFyQ29sb3IoZ2VuZXJhdGVDb2xvcihpbmRleCkpO1xuICB9XG4gIHJldHVybiBnZW5lcmF0ZUNvbG9yKGluZGV4KTtcbn1cbiJdfQ==