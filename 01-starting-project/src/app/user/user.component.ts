import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

/* type User = {
    id: string;
    avatar: string;
    name: string;
} */

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User ;
  //@Input({required: true}) id!: string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;

  @Output() select = new EventEmitter(); //can add <string>
  //select = output<string>(); replaces @Output() select = new EventEmitter; output is still an emitter, not a signal

  //avatar = input.required<string>();
  //name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
   };
  /* imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  })
 */



  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
