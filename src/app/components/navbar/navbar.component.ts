import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isProfileMenuOpen = false;
  isBodyOpen = false;
  faClose = faClose;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  avatarImg = 'https://api.dicebear.com/6.x/adventurer/svg';

  toogleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }
}
