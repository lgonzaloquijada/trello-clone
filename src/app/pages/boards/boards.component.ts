import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MenuItem } from './models/menu-item.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import {
  faComputerMouse,
  faWaveSquare,
  faClock,
  faAngleDown,
  faAngleUp,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Board } from './models/board.model';

@Component({
  selector: 'app-boards',
  imports: [
    CommonModule,
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule,
  ],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  icons = {
    faClock: faClock,
    faAngleDown: faAngleDown,
    faAngleUp: faAngleUp,
    faClipboard: faClipboard,
    faComputerMouse: faComputerMouse,
    faWaveSquare: faWaveSquare,
    faTrello: faTrello,
    faHeart: faHeart,
    faBorderAll: faBorderAll,
    faUsers: faUsers,
    faGear: faGear,
  };

  menuItems: MenuItem[] = [
    { title: 'Boards', icon: this.icons.faClipboard },
    { title: 'Templates', icon: this.icons.faComputerMouse },
    { title: 'Home', icon: this.icons.faWaveSquare },
  ];

  boards: Board[] = [
    { title: 'board1', color: 'bg-blue-500' },
    { title: 'board2', color: 'bg-red-500' },
    { title: 'board3', color: 'bg-orange-500' },
    { title: 'board3', color: 'bg-purple-500' },
  ];

  workspaces = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },
        {
          label: 'Sub Item 1.2',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1',
        },
        {
          label: 'Sub Item 3.2',
        },
        {
          label: 'Sub Item 3.3',
        },
      ],
    },
  ];

  constructor() {}
}
