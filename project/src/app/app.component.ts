import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newServerName = '';
  newServerContent = '';

  serverElements = [{ type: 'red', name: 'test', content: 'test' }];

  onAddRedServers() {
    this.serverElements.push({
      type: 'red',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
  onAddBlueServers() {
    this.serverElements.push({
      type: 'blue',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
