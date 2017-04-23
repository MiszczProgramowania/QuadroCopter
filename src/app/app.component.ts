import { Component } from '@angular/core';
import {MapService} from "./map/services/map.service";
import {Marker} from "./marker/models/marker.model";
import {CoordinatesInterface} from "./marker/interfaces/coordinates.interface";
import * as _ from "lodash";
import {GridNodeInterface} from "./map/interfaces/gridNode.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapService]
})
export class AppComponent {
  newMarker:Marker;
  markers:Array<Marker> = [];
  route:GridNodeInterface[];
  start:CoordinatesInterface;
  end:CoordinatesInterface;
  defaultMarkerSize:number = 3;
  debouncedUpdateMarkers = _.debounce(this.placeMarkers,700);

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
  placeMarkers(marker?:Marker, event?: Event){
    event ? event.preventDefault() : null;
    if(marker){
      this.markers.push(
        new Marker(
          _.clone(marker.coordinates),
          marker.size
        )
      );
    }

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
  ) :boolean {
   return _.isEqual(currentCoordinates, toMatchCoordinates);
  }

  coordinatesAreRoute(currentCoordinates:CoordinatesInterface) : boolean{
      return !!_.find(this.route,function(r){
        return (r.x === currentCoordinates.x && r.y === currentCoordinates.y);
      });
  }
  /**
   * place start or end
   * @param coordinates
   */
  placeDots(coordinates:CoordinatesInterface){
    if(!this.start){
      this._placeStart(coordinates);
      return;
    }
    if(!this.end){
      this._placeEnd(coordinates);
      return;
    }
    this.placeMarkers(
      new Marker(
        _.clone(coordinates),
        this.defaultMarkerSize
      ));
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
    this.route = this.mapService.searchGraph(this.start, this.end);
  }

}
