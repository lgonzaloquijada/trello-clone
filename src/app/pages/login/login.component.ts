import { Component } from '@angular/core';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-login',
  imports: [BtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
