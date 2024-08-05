import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { User } from '../../app.component';

function setUserNameToUpperCase(user: User): User {
  return {
    ...user,
    name: user.name.toUpperCase(),
  };
}

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [],
  template: ` <h2>Idade: {{ userAge }}</h2> `,
})
export class InputTransformComponent implements OnInit {
  ngOnInit(): void {
    console.log(typeof this.userAge);
  }
  @Input({ required: true, transform: numberAttribute })
  public userAge!: number;
}
