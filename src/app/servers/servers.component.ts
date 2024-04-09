import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', //select by attribute
  //selector: '.app-servers', //select by class (like in css)
  templateUrl: './servers.component.html', //referencing template with it's url
  /*template: `
      <app-server></app-server>
      <app-server></app-server>`, //referencing by template itself
  styleUrls: ['./servers.component.css']*/
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); //set allowNewServer to true after 2 seconds - when angular first runs
  }

  ngOnInit(): void {   
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
