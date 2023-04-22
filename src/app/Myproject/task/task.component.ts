import { Component, OnInit } from '@angular/core';
import{Task} from"../../Task";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  task:Task[];
  constructor() {
    this.task = [
      {
        sno:1,
        title:"this is title",
        desc:"Descripation",
        active:true
      },
      {
        sno:2,
        title:"this is title2",
        desc:"Descripation",
        active:true
      },
      {
        sno:3,
        title:"this is title3",
        desc:"Descripation",
        active:true
      }
    ]
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
