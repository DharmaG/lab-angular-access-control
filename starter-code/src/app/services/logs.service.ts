import { Injectable } from '@angular/core';

@Injectable()
export class LogsService {

  logs: any[] = [];

  constructor() { }

  works: boolean= false;


  getAccesLog() {
    return this.logs;
  }

  addAccessItem(item){
    this.logs.push(item);
    this.works = true;
    this.logs.forEach(log => console.log(log));

  }
}
