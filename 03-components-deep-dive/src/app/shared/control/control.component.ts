import { Component, input, ViewEncapsulation,} from '@angular/core';

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
  label = input.required<string>();

}
