import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  imports: [CommonModule],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() btnType: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'primary' | 'success' | 'danger' | 'sky' = 'primary';

  get colors() {
    return {
      'bg-primary-700 hover:bg-primary-800 focus:ring-primary-950': this.color === 'primary',
      'bg-success-700 hover:bg-success-800 focus:ring-success-950': this.color === 'success',
      'bg-danger-700 hover:bg-danger-800 focus:ring-danger-950': this.color === 'danger',
      'bg-sky-700 hover:bg-sky-800 focus:ring-sky-950': this.color === 'sky',
    };
  }
}
