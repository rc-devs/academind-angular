import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation,} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //sets styles in component to global (none disables it)
  host: {
    class: 'control', //adds to component as attribute
    '(click)': 'onClick()', //adds event listener
  } //add key-value pairs as properties to host element(app-control in this case) wherever it is being used (for css?)
})
export class ControlComponent {
  //@HostBinding('class') className = "control"; an alternative way to bind via class
  //@HostListener() //for event binding, assign method and event to be listened as param
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick(){
    console.log("Clicked")
    console.log(this.el)
  }


}
