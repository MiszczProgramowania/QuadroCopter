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
  newMarker:Marker;
  markers:Array<Marker> = [];

  /**
   * AppComponent constructor
   * @param mapService
   */
  constructor(private mapService: MapService){
    this.newMarker = new Marker({x:0,y:0},0);
  }

  /**
   * getMap
   */
  getMap():Array<Array<boolean>>{
    return this.mapService.getMap();
  }

  /**
   * removeMarker
   * @param index
   */
  removeMarker(index:number){
    this.markers.splice(index,1);
    this.mapService.placeMarkers(this.markers);
  }

  /**
   * placeMarker
   * @param marker
   * @param event
   */
  placeMarkers(marker:Marker, event?: Event){
    event ? event.preventDefault() : null;
    this.markers.push(
      new Marker({
            x: marker.coordinates.x,
            y: marker.coordinates.y
        },
        marker.size
      )
    );
    this.mapService.placeMarkers(this.markers);
  }
}
