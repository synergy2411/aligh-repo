import { Directive, 
    ElementRef, 
    Renderer2, 
    HostListener } from '@angular/core';

@Directive({
    selector : '[appHighlight]'
})
export class HighlightDirective{

    @HostListener('mouseenter') 
    mouseenter(eventdata){
        this.renderer.setStyle(this.elementRef.nativeElement,
            'background-color', "green");
    }

    @HostListener('mouseleave') 
    mouseleave(eventdata){
        this.renderer.setStyle(this.elementRef.nativeElement,
            'background-color', "transparent");
    }

    constructor(private elementRef : ElementRef,
                private renderer : Renderer2){
        //this.elementRef.nativeElement.style.backgroundColor = "aqua";
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //             'background-color', "green");
    }
}