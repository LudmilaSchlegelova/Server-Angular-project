import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})

//Pouzivame @Input dekorator, pretoze data nam prichadzaju z rodicovskeho elementu z app.component.ts, nasledne su tieto data poslane do app.component.html do nasej komponenty <server-element></server-element> cez atribut [serverElement]. Tento atribut ma hodnotu rovnu jednemu prvku z pola serverElements. Tento prvok bude ocakavat 3 premenne (type, name a content)
export class ServerElementComponent implements OnInit, OnChanges {
  @ContentChild('test') selektorDiv;
  @Input() serverElement: { type: string; name: string; content: string };

  @Input() name: string;

  constructor() {
    console.log('volany constructor');
  }

  ngOnInit() {
    console.log('volany ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('volany ngOnChanges', changes);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.selektorDiv);
  }
}

// https://blog.hackages.io/angular-component-interaction-with-input-output-and-eventemitter-72526422b95c
