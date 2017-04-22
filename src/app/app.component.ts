import { Component } from '@angular/core';
import {MapService} from "./map/services/map.service";
import {Marker} from "./marker/models/marker.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private mapService: MapService){
    let marker = new Marker({x:1,y:1},10);
    console.log(mapService.getMap());
    mapService.placeMarker(marker);
    console.log(mapService.getMap());
  }
}
