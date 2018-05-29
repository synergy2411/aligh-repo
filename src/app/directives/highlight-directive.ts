import { Directive, 
    ElementRef, 
    Renderer2, 
    HostListener, 
    Input,
    HostBinding} from '@angular/core';

@Directive({
    selector : '[appHighlight]'
})
export class HighlightDirective{

    @Input('defaultColor') defaultColor : string;
    @Input('newColor') newColor : string = "transparent";

    @HostBinding('style.backgroundColor') backgroundColor : any;
  
    @HostListener('mouseenter') 
    mouseenter(eventdata){
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //     'background-color', this.defaultColor);
    }

    @HostListener('mouseleave') 
    mouseleave(eventdata){
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //     'background-color', "transparent");
        this.backgroundColor = this.newColor;
    }

    constructor(private elementRef : ElementRef,
                private renderer : Renderer2){
        //this.elementRef.nativeElement.style.backgroundColor = "aqua";
        // this.renderer.setStyle(this.elementRef.nativeElement,
        //             'background-color', "green");
    }
}