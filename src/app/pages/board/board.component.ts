import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
//import { DialogModule } from '@angular/cdk/dialog';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.model';
import { BtnComponent } from '../../components/btn/btn.component';
import { TodoModalComponent } from '../../components/todo-modal/todo-modal.component';

@Component({
  selector: 'app-board',
  imports: [DragDropModule, NavbarComponent, BtnComponent],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  private dialogService = inject(Dialog);

  columns: WritableSignal<Column[]> = signal([
    {
      id: Date.now(),
      title: 'To do',
      tasks: signal([
        { id: '1', title: 'Task 1' },
        { id: '2', title: 'Task 2' },
        { id: '3', title: 'Task 3' },
      ]),
    },
    {
      id: Date.now() + 1,
      title: 'Doing',
      tasks: signal([{ id: '4', title: 'Task 4' }]),
    },
    {
      id: Date.now() + 2,
      title: 'Done',
      tasks: signal([{ id: '5', title: 'Task 5' }]),
    },
  ]);

  openModal(task: ToDo) {
    const dialogRef = this.dialogService.open(TodoModalComponent, {
      width: '600px',
      autoFocus: false,
      data: { todo: task },
    });

    dialogRef.closed.subscribe((result) => {
      console.log('Dialog closed', result);
    });
  }

  onListDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addNew() {
    let id = Date.now().toString();
    this.columns()[0].tasks.update((prev) => [
      ...prev,
      { id: id, title: 'example-' + id },
    ]);
  }

  addNewBoard() {
    let id = Date.now().toString();
    this.columns.update((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: 'New Board',
        tasks: signal([]),
      },
    ]);
  }
}
