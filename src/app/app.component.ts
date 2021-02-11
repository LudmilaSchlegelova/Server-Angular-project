import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serverElements = [{ type: 'yellow', name: 'test', content: 'test' }];

  //premenne, ktore su v objekte data musia byt pomenovane rovnako ako premenne v @Output-och createGreenServers a createYellowServers v subore cockpit.components.ts

  // data: { name: string; content: string} ==> toto predstavuje zachyteny $event vo funkcii addGreenServers() a addYellowServers v app.component.html
  addGreenServers(data: { name: string; content: string }) {
    this.serverElements.push({
      type: 'green',
      name: data.name,
      content: data.content,
    });
  }
  addYellowServers(data: { name: string; content: string }) {
    this.serverElements.push({
      type: 'yellow',
      name: data.name,
      content: data.content,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed';
  }
}
