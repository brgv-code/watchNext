import { EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';
export interface SortedData {
    data: any[];
    sortOrder: string;
    sortBy: string;
}
export declare class MdbTableSortDirective implements OnInit {
    private el;
    private renderer;
    sortedInto: boolean;
    order: string;
    dataSource: Array<any>;
    sortBy: string;
    sortEnd: EventEmitter<any[]>;
    sorted: EventEmitter<SortedData>;
    constructor(el: ElementRef, renderer: Renderer2);
    onclick(): void;
    trimWhiteSigns(headElement: any): string;
    moveArrayItem(arr: any, oldIndex: number, newIndex: number): any;
    sortDataBy(key: string | any): void;
    ngOnInit(): void;
}
