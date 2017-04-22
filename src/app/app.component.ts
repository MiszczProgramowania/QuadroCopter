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

  /**
   * AppComponent constructor
   * @param mapService
   */
  constructor(private mapService: MapService){
    let marker = new Marker({x:10,y:10},4);
    mapService.placeMarker(marker);
  }

  /**
   * getMap
   */
  getMap():Array<Array<boolean>>{
    return this.mapService.getMap();
  }
}
