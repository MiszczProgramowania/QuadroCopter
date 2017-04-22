import { Component } from '@angular/core';
import {MapService} from "./map/services/map.service";
import {Marker} from "./marker/models/marker.model";
import {CoordinatesInterface} from "./marker/interfaces/coordinates.interface";
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService]
})
export class AppComponent {
  newMarker:Marker;
  markers:Array<Marker> = [];
  start:CoordinatesInterface;
  end:CoordinatesInterface;
  /**
   * AppComponent constructor
   * @param mapService
   */
  constructor(private mapService: MapService){
    this.newMarker = new Marker({x:0,y:0},0);
  }

  /**
   * place start
   * @param coordinates
   */
  _placeStart(coordinates:CoordinatesInterface){
    this.start = {
      x:coordinates.x,
      y:coordinates.y
    };
  }

  /**
   * place end
   * @param coordinates
   */
  _placeEnd(coordinates:CoordinatesInterface){
    this.end = {
      x:coordinates.x,
      y:coordinates.y
    };
  }

  /**
   * getMap
   */
  getMap():Array<Array<number>>{
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

  /**
   * coordinatesMatch
   * @param currentCoordinates
   * @param toMatchCoordinates
   * @returns {boolean}
   */
  coordinatesMatch(
    currentCoordinates:CoordinatesInterface,
    toMatchCoordinates:CoordinatesInterface
  ){
   return _.isEqual(currentCoordinates, toMatchCoordinates);
  }

  /**
   * place start or end
   * @param coordinates
   */
  placeStartEnd(coordinates:CoordinatesInterface){
    this.start ? this._placeEnd(coordinates) : this._placeStart(coordinates);
  }

  /**
   * resetStartEnd
   */
  resetStartEnd(){
    this.start = undefined;
    this.end = undefined;
  }

  /**
   * searchGraph
   * @returns {any|number}
   */
  searchGraph(){
    console.log(this.mapService.searchGraph(this.start, this.end));
  }


}
