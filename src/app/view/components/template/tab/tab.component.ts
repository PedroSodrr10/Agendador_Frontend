import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  selectedTab = 0;

  aoSalvar(): void {
    this.selectedTab = 0;
  }

}
