import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent {
  serverName = '';
  serverContent = '';

  //Kedze mame dve funkcie, ktore po kliknuti na button maju prepisovat stav v premennych, musime si vytvorit instanciu EventEmitter(). Ta sa pouziva na vytvorenie vazby funkcie s udalostou, emit sa pouziva na spustenie udalosti. Vyuzivame @Output dekorator, kedze data posielame smerom von z komponenty
  @Output() createGreenServers = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() createYellowServers = new EventEmitter<{
    name: string;
    content: string;
  }>();

  addGreenServers() {
    this.createGreenServers.emit({
      name: this.serverName,
      content: this.serverContent,
    });
  }
  addYellowServers() {
    this.createYellowServers.emit({
      name: this.serverName,
      content: this.serverContent,
    });
  }
}
