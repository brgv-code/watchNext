/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, ElementRef, Input, Output, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
export class BaseChartDirective {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    constructor(element, platformId) {
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
    ngOnInit() {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    }
    /**
     * @param {?} ctx
     * @return {?}
     */
    getChartBuilder(ctx) {
        /** @type {?} */
        const datasets = this.getDatasets();
        /** @type {?} */
        const options = Object.assign({}, this.options);
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
            (event, active) => {
                if (active && active.length) {
                    this.chartHover.emit({ event, active });
                }
            });
        }
        if (!options.onClick) {
            options.onClick = (/**
             * @param {?} event
             * @param {?} active
             * @return {?}
             */
            (event, active) => {
                this.chartClick.emit({ event, active });
            });
        }
        /** @type {?} */
        const opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets,
            },
            options: options,
        };
        return new Chart(ctx, opts);
    }
    // feature(chart): added getPointDataAtEvent which will return clicked chart's point data
    /**
     * @param {?} event
     * @return {?}
     */
    getPointDataAtEvent(event) {
        if (event.active.length > 0) {
            /** @type {?} */
            const datasetIndex = event.active[0]._datasetIndex;
            /** @type {?} */
            const dataIndex = event.active[0]._index;
            /** @type {?} */
            const dataObject = this.datasets[datasetIndex].data[dataIndex];
            return dataObject;
        }
    }
    /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    updateChartData(newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach((/**
             * @param {?} dataset
             * @param {?} i
             * @return {?}
             */
            (dataset, i) => {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            }));
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getDatasets() {
        /** @type {?} */
        let datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || (!this.datasets.length && (this.data && this.data.length))) {
            if (Array.isArray(this.data[0])) {
                datasets = ((/** @type {?} */ (this.data))).map((/**
                 * @param {?} data
                 * @param {?} index
                 * @return {?}
                 */
                (data, index) => {
                    return { data, label: this.labels[index] || `Label ${index}` };
                }));
            }
            else {
                datasets = [{ data: this.data, label: `Label 0` }];
            }
        }
        if ((this.datasets && this.datasets.length) || (datasets && datasets.length)) {
            datasets = (this.datasets || datasets).map((/**
             * @param {?} elm
             * @param {?} index
             * @return {?}
             */
            (elm, index) => {
                /** @type {?} */
                const newElm = Object.assign({}, elm);
                if (this.colors && this.colors.length) {
                    Object.assign(newElm, this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(this.chartType, index, newElm.data.length));
                }
                return newElm;
            }));
        }
        if (!datasets) {
            throw new Error(`ng-charts configuration error,
      data or datasets field are required to render char ${this.chartType}`);
        }
        return datasets;
    }
    /**
     * @private
     * @return {?}
     */
    refresh() {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx);
    }
}
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
BaseChartDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
        (color) => rgba(color, 0.6))),
        borderColor: colors.map((/**
         * @return {?}
         */
        () => '#fff')),
        pointBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        (color) => rgba(color, 1))),
        pointBorderColor: colors.map((/**
         * @return {?}
         */
        () => '#fff')),
        pointHoverBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        (color) => rgba(color, 1))),
        pointHoverBorderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        (color) => rgba(color, 1))),
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
        (color) => rgba(color, 0.6))),
        borderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        (color) => rgba(color, 1))),
        hoverBackgroundColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        (color) => rgba(color, 0.8))),
        hoverBorderColor: colors.map((/**
         * @param {?} color
         * @return {?}
         */
        (color) => rgba(color, 1))),
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
    const colorsArr = new Array(count);
    for (let i = 0; i < count; i++) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9jaGFydHMvY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBSUwsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQW1DN0IsWUFBMEIsT0FBbUIsRUFBdUIsVUFBa0I7UUFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQWpCN0IsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixZQUFPLEdBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUc5QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU1wRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFHckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFB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QUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQztLQUN4RTtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7Ozs7Ozs7O0FBS0QsU0FBUyxTQUFTLENBQUMsU0FBaUIsRUFBRSxLQUFhLEVBQUUsS0FBYTtJQUNoRSxJQUFJLFNBQVMsS0FBSyxLQUFLLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRTtRQUNuRCxPQUFPLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMvQztJQUVELElBQUksU0FBUyxLQUFLLFdBQVcsRUFBRTtRQUM3QixPQUFPLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBRUQsSUFBSSxTQUFTLEtBQUssTUFBTSxJQUFJLFNBQVMsS0FBSyxPQUFPLEVBQUU7UUFDakQsT0FBTyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFFRCxJQUFJLFNBQVMsS0FBSyxLQUFLLElBQUksU0FBUyxLQUFLLGVBQWUsRUFBRTtRQUN4RCxPQUFPLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIERpcmVjdGl2ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi9jb2xvci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi9jb2xvcnMuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBDaGFydDogYW55O1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdjYW52YXNbbWRiQ2hhcnRdJywgZXhwb3J0QXM6ICdtZGItYmFzZS1jaGFydCcgfSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2hhcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0LCBDb2xvcnMge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRDb2xvcnM6IEFycmF5PG51bWJlcltdPiA9IFtcbiAgICBbMjU1LCA5OSwgMTMyXSxcbiAgICBbNTQsIDE2MiwgMjM1XSxcbiAgICBbMjU1LCAyMDYsIDg2XSxcbiAgICBbMjMxLCAyMzMsIDIzN10sXG4gICAgWzc1LCAxOTIsIDE5Ml0sXG4gICAgWzE1MSwgMTg3LCAyMDVdLFxuICAgIFsyMjAsIDIyMCwgMjIwXSxcbiAgICBbMjQ3LCA3MCwgNzRdLFxuICAgIFs3MCwgMTkxLCAxODldLFxuICAgIFsyNTMsIDE4MCwgOTJdLFxuICAgIFsxNDgsIDE1OSwgMTc3XSxcbiAgICBbNzcsIDgzLCA5Nl0sXG4gIF07XG5cbiAgQElucHV0KCkgcHVibGljIGRhdGE6IG51bWJlcltdIHwgYW55W107XG4gIEBJbnB1dCgpIHB1YmxpYyBkYXRhc2V0czogYW55W107XG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbHM6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IGFueSA9IHsgbGVnZW5kOiB7IGRpc3BsYXk6IGZhbHNlIH0gfTtcbiAgQElucHV0KCkgcHVibGljIGNoYXJ0VHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgY29sb3JzOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKSBwdWJsaWMgbGVnZW5kID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFydEhvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3R4OiBhbnk7XG4gIHB1YmxpYyBjaGFydDogYW55O1xuXG4gIGN2czogYW55O1xuICBpbml0RmxhZyA9IGZhbHNlO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IGFueSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmN0eCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgICB0aGlzLmN2cyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5kYXRhIHx8IHRoaXMuZGF0YXNldHMpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNoYW5nZXMgYXJlIGluIHRoZSBkYXRhIG9yIGRhdGFzZXRzXG4gICAgICBpZiAoXG4gICAgICAgIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkYXRhJykgfHwgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGF0YXNldHMnKSkgJiZcbiAgICAgICAgIWNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xhYmVscycpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2RhdGEnXSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKGNoYW5nZXNbJ2RhdGEnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ2hhcnREYXRhKGNoYW5nZXNbJ2RhdGFzZXRzJ10uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvdGhlcndpc2UgcmVidWlsZCB0aGUgY2hhcnRcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IHZvaWQgMDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hhcnRCdWlsZGVyKGN0eDogYW55KTogYW55IHtcbiAgICBjb25zdCBkYXRhc2V0czogYW55ID0gdGhpcy5nZXREYXRhc2V0cygpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAodGhpcy5sZWdlbmQgPT09IGZhbHNlKSB7XG4gICAgICBvcHRpb25zLmxlZ2VuZCA9IHsgZGlzcGxheTogZmFsc2UgfTtcbiAgICB9XG4gICAgLy8gaG9jayBmb3Igb25Ib3ZlciBhbmQgb25DbGljayBldmVudHNcbiAgICBvcHRpb25zLmhvdmVyID0gb3B0aW9ucy5ob3ZlciB8fCB7fTtcbiAgICBpZiAoIW9wdGlvbnMuaG92ZXIub25Ib3Zlcikge1xuICAgICAgb3B0aW9ucy5ob3Zlci5vbkhvdmVyID0gKGV2ZW50OiBhbnksIGFjdGl2ZTogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlICYmIGFjdGl2ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNoYXJ0SG92ZXIuZW1pdCh7IGV2ZW50LCBhY3RpdmUgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLm9uQ2xpY2spIHtcbiAgICAgIG9wdGlvbnMub25DbGljayA9IChldmVudDogYW55LCBhY3RpdmU6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgdGhpcy5jaGFydENsaWNrLmVtaXQoeyBldmVudCwgYWN0aXZlIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdHlwZTogdGhpcy5jaGFydFR5cGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiBkYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIH07XG5cbiAgICByZXR1cm4gbmV3IENoYXJ0KGN0eCwgb3B0cyk7XG4gIH1cblxuICAvLyBmZWF0dXJlKGNoYXJ0KTogYWRkZWQgZ2V0UG9pbnREYXRhQXRFdmVudCB3aGljaCB3aWxsIHJldHVybiBjbGlja2VkIGNoYXJ0J3MgcG9pbnQgZGF0YVxuICBwdWJsaWMgZ2V0UG9pbnREYXRhQXRFdmVudChldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkYXRhc2V0SW5kZXggPSBldmVudC5hY3RpdmVbMF0uX2RhdGFzZXRJbmRleDtcbiAgICAgIGNvbnN0IGRhdGFJbmRleCA9IGV2ZW50LmFjdGl2ZVswXS5faW5kZXg7XG4gICAgICBjb25zdCBkYXRhT2JqZWN0ID0gdGhpcy5kYXRhc2V0c1tkYXRhc2V0SW5kZXhdLmRhdGFbZGF0YUluZGV4XTtcbiAgICAgIHJldHVybiBkYXRhT2JqZWN0O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hhcnREYXRhKG5ld0RhdGFWYWx1ZXM6IG51bWJlcltdIHwgYW55W10pOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuZXdEYXRhVmFsdWVzWzBdLmRhdGEpKSB7XG4gICAgICB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHMuZm9yRWFjaCgoZGF0YXNldDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgZGF0YXNldC5kYXRhID0gbmV3RGF0YVZhbHVlc1tpXS5kYXRhO1xuXG4gICAgICAgIGlmIChuZXdEYXRhVmFsdWVzW2ldLmxhYmVsKSB7XG4gICAgICAgICAgZGF0YXNldC5sYWJlbCA9IG5ld0RhdGFWYWx1ZXNbaV0ubGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IG5ld0RhdGFWYWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRhc2V0cygpOiBhbnkge1xuICAgIGxldCBkYXRhc2V0czogYW55ID0gdm9pZCAwO1xuICAgIC8vIGluIGNhc2UgaWYgZGF0YXNldHMgaXMgbm90IHByb3ZpZGVkLCBidXQgZGF0YSBpcyBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmRhdGFzZXRzIHx8ICghdGhpcy5kYXRhc2V0cy5sZW5ndGggJiYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoKSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YVswXSkpIHtcbiAgICAgICAgZGF0YXNldHMgPSAodGhpcy5kYXRhIGFzIEFycmF5PG51bWJlcltdPikubWFwKChkYXRhOiBudW1iZXJbXSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiB7IGRhdGEsIGxhYmVsOiB0aGlzLmxhYmVsc1tpbmRleF0gfHwgYExhYmVsICR7aW5kZXh9YCB9O1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXRzID0gW3sgZGF0YTogdGhpcy5kYXRhLCBsYWJlbDogYExhYmVsIDBgIH1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodGhpcy5kYXRhc2V0cyAmJiB0aGlzLmRhdGFzZXRzLmxlbmd0aCkgfHwgKGRhdGFzZXRzICYmIGRhdGFzZXRzLmxlbmd0aCkpIHtcbiAgICAgIGRhdGFzZXRzID0gKHRoaXMuZGF0YXNldHMgfHwgZGF0YXNldHMpLm1hcCgoZWxtOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxtOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCBlbG0pO1xuICAgICAgICBpZiAodGhpcy5jb2xvcnMgJiYgdGhpcy5jb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdFbG0sIHRoaXMuY29sb3JzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdFbG0sIGdldENvbG9ycyh0aGlzLmNoYXJ0VHlwZSwgaW5kZXgsIG5ld0VsbS5kYXRhLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdFbG07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGFzZXRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG5nLWNoYXJ0cyBjb25maWd1cmF0aW9uIGVycm9yLFxuICAgICAgZGF0YSBvciBkYXRhc2V0cyBmaWVsZCBhcmUgcmVxdWlyZWQgdG8gcmVuZGVyIGNoYXIgJHt0aGlzLmNoYXJ0VHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YXNldHM7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2goKTogYW55IHtcbiAgICB0aGlzLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5jaGFydCA9IHRoaXMuZ2V0Q2hhcnRCdWlsZGVyKHRoaXMuY3R4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZ2JhKGNvbG91cjogQXJyYXk8bnVtYmVyPiwgYWxwaGE6IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiAncmdiYSgnICsgY29sb3VyLmNvbmNhdChhbHBoYSkuam9pbignLCcpICsgJyknO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExpbmVDb2xvcihjb2xvcnM6IEFycmF5PG51bWJlcj4pOiBDb2xvciB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC40KSxcbiAgICBib3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IHJnYmEoY29sb3JzLCAwLjgpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRCYXJDb2xvcihjb2xvcnM6IEFycmF5PG51bWJlcj4pOiBDb2xvciB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC42KSxcbiAgICBib3JkZXJDb2xvcjogcmdiYShjb2xvcnMsIDEpLFxuICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiByZ2JhKGNvbG9ycywgMC44KSxcbiAgICBob3ZlckJvcmRlckNvbG9yOiByZ2JhKGNvbG9ycywgMSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFBpZUNvbG9ycyhjb2xvcnM6IEFycmF5PG51bWJlcltdPik6IGFueSB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuNikpLFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMubWFwKCgpID0+ICcjZmZmJyksXG4gICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICAgIHBvaW50Qm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKCkgPT4gJyNmZmYnKSxcbiAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IGNvbG9ycy5tYXAoKGNvbG9yOiBudW1iZXJbXSkgPT4gcmdiYShjb2xvciwgMSkpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRQb2xhckFyZWFDb2xvcnMoY29sb3JzOiBBcnJheTxudW1iZXJbXT4pOiBDb2xvciB7XG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDAuNikpLFxuICAgIGJvcmRlckNvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgICBob3ZlckJhY2tncm91bmRDb2xvcjogY29sb3JzLm1hcCgoY29sb3I6IG51bWJlcltdKSA9PiByZ2JhKGNvbG9yLCAwLjgpKSxcbiAgICBob3ZlckJvcmRlckNvbG9yOiBjb2xvcnMubWFwKChjb2xvcjogbnVtYmVyW10pID0+IHJnYmEoY29sb3IsIDEpKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29sb3IoKTogbnVtYmVyW10ge1xuICByZXR1cm4gW2dldFJhbmRvbUludCgwLCAyNTUpLCBnZXRSYW5kb21JbnQoMCwgMjU1KSwgZ2V0UmFuZG9tSW50KDAsIDI1NSldO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9ycyBmb3IgbGluZXxiYXIgY2hhcnRzXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3IoaW5kZXg6IG51bWJlcik6IG51bWJlcltdIHtcbiAgcmV0dXJuIEJhc2VDaGFydERpcmVjdGl2ZS5kZWZhdWx0Q29sb3JzW2luZGV4XSB8fCBnZXRSYW5kb21Db2xvcigpO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlIGNvbG9ycyBmb3IgcGllfGRvdWdobnV0IGNoYXJ0c1xuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9ycyhjb3VudDogbnVtYmVyKTogQXJyYXk8bnVtYmVyW10+IHtcbiAgY29uc3QgY29sb3JzQXJyOiBBcnJheTxudW1iZXJbXT4gPSBuZXcgQXJyYXkoY291bnQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb2xvcnNBcnJbaV0gPSBCYXNlQ2hhcnREaXJlY3RpdmUuZGVmYXVsdENvbG9yc1tpXSB8fCBnZXRSYW5kb21Db2xvcigpO1xuICB9XG4gIHJldHVybiBjb2xvcnNBcnI7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgY29sb3JzIGJ5IGNoYXJ0IHR5cGVcbiAqL1xuZnVuY3Rpb24gZ2V0Q29sb3JzKGNoYXJ0VHlwZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogYW55IHtcbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3BpZScgfHwgY2hhcnRUeXBlID09PSAnZG91Z2hudXQnKSB7XG4gICAgcmV0dXJuIGZvcm1hdFBpZUNvbG9ycyhnZW5lcmF0ZUNvbG9ycyhjb3VudCkpO1xuICB9XG5cbiAgaWYgKGNoYXJ0VHlwZSA9PT0gJ3BvbGFyQXJlYScpIHtcbiAgICByZXR1cm4gZm9ybWF0UG9sYXJBcmVhQ29sb3JzKGdlbmVyYXRlQ29sb3JzKGNvdW50KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAnbGluZScgfHwgY2hhcnRUeXBlID09PSAncmFkYXInKSB7XG4gICAgcmV0dXJuIGZvcm1hdExpbmVDb2xvcihnZW5lcmF0ZUNvbG9yKGluZGV4KSk7XG4gIH1cblxuICBpZiAoY2hhcnRUeXBlID09PSAnYmFyJyB8fCBjaGFydFR5cGUgPT09ICdob3Jpem9udGFsQmFyJykge1xuICAgIHJldHVybiBmb3JtYXRCYXJDb2xvcihnZW5lcmF0ZUNvbG9yKGluZGV4KSk7XG4gIH1cbiAgcmV0dXJuIGdlbmVyYXRlQ29sb3IoaW5kZXgpO1xufVxuIl19