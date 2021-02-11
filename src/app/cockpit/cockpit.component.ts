import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent {
  //Tieto premenne sa zasielaju do [(ngModel)] v cockpit.component.html subore
  // serverName = '';
  // serverContent = '';

  @ViewChild('serverName') serverName: ElementRef;
  @ViewChild('serverContent') serverContent: ElementRef;

  //Kedze mame dve funkcie, ktore po kliknuti na button maju prepisovat hodnotu v premennych serverName a serverContent, musime si vytvorit instanciu EventEmitter(). Ta sa pouziva na vytvorenie vazby funkcie s udalostou, emit() sa pouziva na spustenie udalosti. Vyuzivame @Output dekorator, kedze data posielame smerom von z komponenty do rodicovskej komponenty(createGreenServers a createYellowServers su preposlane do app.component.html)

  //premenne v objekte, ktory vchadza do EventEmitteru musia byt pomenovane rovnako ako premenne v objekte data v addGreenServers a addYellowServers v subore cockpit.components.ts
  @Output()
  createGreenServers = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() createYellowServers = new EventEmitter<{
    name: string;
    content: string;
  }>();

  addGreenServers() {
    console.log(this.serverName);

    this.createGreenServers.emit({
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value,
    });
  }
  addYellowServers() {
    this.createYellowServers.emit({
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value,
    });
  }
}
