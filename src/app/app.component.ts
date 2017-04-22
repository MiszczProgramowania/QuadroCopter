import { Component } from '@angular/core';
import {MapService} from "./map/services/map.service";
import {Marker} from "./marker/models/marker.model";

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
    var marker = new Marker({x:1,y:1},10);
    var graph = new Graph(
      mapService.mapGenerator()
    );
    console.log(graph);
  }
}
