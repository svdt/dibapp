import { Component } from '@angular/core';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-kontakte',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  templateUrl: './kontakte.component.html',
  styleUrl: './kontakte.component.scss'
})
export class KontakteComponent {

}
