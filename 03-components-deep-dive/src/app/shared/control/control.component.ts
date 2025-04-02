import { Component, HostBinding, input, ViewEncapsulation,} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //sets styles in component to global (none disables it)
  host: {
    class: 'control'
  } //add key-value pairs as properties to app-control wherever it is being used
})
export class ControlComponent {
  //@HostBinding('class') className = "control"; an alternative way to bind via class
  label = input.required<string>();

}
