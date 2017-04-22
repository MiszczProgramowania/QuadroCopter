import { Component } from '@angular/core';

// Not best way but i don't have much time for project preperation for old js libraries
declare var Graph:any;
// Not best way ends

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(){
    console.log('teast');
    var graph = new Graph([
      [1,1,1,1],
      [0,1,1,0],
      [0,0,1,1]
    ]);
    console.log(graph);
  }
}
