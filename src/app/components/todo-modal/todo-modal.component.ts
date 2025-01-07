import { Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';

interface inputData {
  todo: ToDo;
}

interface outputData {
  response: boolean;
}

@Component({
  selector: 'app-todo-modal',
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-modal.component.html',
})
export class TodoModalComponent {
  private dialogRef = inject(DialogRef<outputData>);
  private data: inputData = inject(DIALOG_DATA);

  icons = {
    faClose: faClose,
    faCheckToSlot: faCheckToSlot,
    faBars: faBars,
    faUser: faUser,
    faTag: faTag,
    faCheckSquare: faCheckSquare,
    faClock: faClock,
  };
  todo: ToDo = this.data.todo;

  closeModal() {
    this.dialogRef.close();
  }

  closeWithResponse(answer: boolean) {
    this.dialogRef.close({ response: answer });
  }
}
