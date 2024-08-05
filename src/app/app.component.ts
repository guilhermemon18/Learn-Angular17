import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTransformComponent } from './components/input-transform/input-transform.component';
import { of } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface User {
  name: string;
  age: string;
  profession: string;
  id: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputTransformComponent],
  template: `
    <app-input-transform
      [userAge]="userDatasList[0].age"
      [showUserAge]="showUser"
    />
    <!-- <div
      style="display: flex;justify-content: center;align-items: center;flex-direction: column; gap: 1rem;"
    >
      <button (click)="renderblock = true">Renderizar título</button>
      <h3 #studying>I am studyng</h3>
      @defer (when renderblock) {
      <h3 style="color: red;">Element rendered on interaction</h3>
      } @placeholder {
      <span style="color: blue;">Conteúdo inicial do placeholder</span>
      }
    </div> -->
  `,
})
export class AppComponent implements OnInit {
  //referência para se desinscrever do observable quando o componente atual for destruído
  destroyedRef = inject(DestroyRef);
  showUser = 'true';
  renderblock = false;
  title = 'learnAngular17';
  userDatasList: Array<User> = [
    { age: '20', name: 'Marcos', profession: 'Software Developer', id: '123' },
    { age: '30', name: 'Marcelo', profession: 'Software Developer', id: '456' },
    { age: '40', name: 'Carlos', profession: 'Scrum Master', id: '789' },
    { age: '30', name: 'Maria', profession: 'UX Designer', id: '123' },
  ];
  um = 1;
  dois = 2;

  userDatas$ = of(this.userDatasList);

  ngOnInit(): void {
    //nova forma de se desinscrever de um observable (Angular 16+)
    this.userDatas$.pipe(takeUntilDestroyed(this.destroyedRef)).subscribe({
      next: (response) => console.log('User Datas in observable', response),
    });
  }

  getnames(): void {
    if (this.um === this.dois) {
    } else if (this.um !== 2) {
    }
  }
}
