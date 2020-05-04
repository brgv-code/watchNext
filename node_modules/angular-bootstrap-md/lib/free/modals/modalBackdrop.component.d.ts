import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class ModalBackdropOptions {
    animate: boolean;
    constructor(options: ModalBackdropOptions);
}
/** This component will be added as background layout for modals if enabled */
export declare class ModalBackdropComponent implements OnInit {
    element: ElementRef;
    renderer: Renderer2;
    classNameBackDrop: boolean;
    isAnimated: boolean;
    isShown: boolean;
    protected _isAnimated: boolean;
    protected _isShown: boolean;
    constructor(element: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
