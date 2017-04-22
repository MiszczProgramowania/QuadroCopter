import { Component } from '@angular/core';
import {MapService} from "./map/services/map.service";

// Not best way but i dont have much time for project preperation for old js libraries
declare var Graph:any;
// Not best way ends

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private mapService: MapService){
    console.log('teast');
    var graph = new Graph(
      mapService.getMap()
    );
    console.log(graph);
  }
}
