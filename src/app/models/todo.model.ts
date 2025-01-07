import { WritableSignal } from '@angular/core';

export interface ToDo {
  id: string;
  title: string;
}

export interface Column {
  id: number;
  title: string;
  tasks: WritableSignal<ToDo[]>;
}
