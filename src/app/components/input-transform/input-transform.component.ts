import { Component, Input } from '@angular/core';
import { User } from '../../app.component';

@Component({
  selector: 'app-input-transform',
  standalone: true,
  imports: [],
  template: `
    <h2>Nome: {{ user?.name }}</h2>
    <h2>Idade: {{ user?.age }}</h2>
    <h2>Profissao: {{ user?.profession }}</h2>
  `,
})
export class InputTransformComponent {
  @Input({ required: true }) public user!: User;
}
