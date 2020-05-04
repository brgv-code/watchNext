/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbTableDirective } from './directives/mdb-table.directive';
import { MdbTableSortDirective } from './directives/mdb-table-sort.directive';
import { MdbTableScrollDirective } from './directives/mdb-table-scroll.directive';
import { MdbTableRowDirective } from './directives/mdb-table-row.directive';
import { MdbTableService } from './services/mdb-table.service';
import { MdbTablePaginationComponent } from './components/mdb-table-pagination.component';
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        MdbTablePaginationComponent,
                        MdbTableRowDirective,
                        MdbTableScrollDirective,
                        MdbTableSortDirective,
                        MdbTableDirective,
                    ],
                    exports: [
                        MdbTablePaginationComponent,
                        MdbTableRowDirective,
                        MdbTableScrollDirective,
                        MdbTableSortDirective,
                        MdbTableDirective,
                    ],
                    entryComponents: [MdbTablePaginationComponent],
                    providers: [MdbTableService],
                },] }
    ];
    return TableModule;
}());
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL3RhYmxlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUxRjtJQUFBO0lBbUIwQixDQUFDOztnQkFuQjFCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDWiwyQkFBMkI7d0JBQzNCLG9CQUFvQjt3QkFDcEIsdUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsaUJBQWlCO3FCQUNsQjtvQkFDRCxlQUFlLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUM3Qjs7SUFDeUIsa0JBQUM7Q0FBQSxBQW5CM0IsSUFtQjJCO1NBQWQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWRiVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVNvcnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlRhYmxlU2Nyb2xsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi10YWJsZS1zY3JvbGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlRhYmxlUm93RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi10YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlRhYmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWRiLXRhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21kYi10YWJsZS1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgTWRiVGFibGVSb3dEaXJlY3RpdmUsXG4gICAgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUsXG4gICAgTWRiVGFibGVTb3J0RGlyZWN0aXZlLFxuICAgIE1kYlRhYmxlRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIE1kYlRhYmxlUm93RGlyZWN0aXZlLFxuICAgIE1kYlRhYmxlU2Nyb2xsRGlyZWN0aXZlLFxuICAgIE1kYlRhYmxlU29ydERpcmVjdGl2ZSxcbiAgICBNZGJUYWJsZURpcmVjdGl2ZSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTWRiVGFibGVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUge31cbiJdfQ==