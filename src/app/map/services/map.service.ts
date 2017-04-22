import { Injectable } from '@angular/core';
import {GridNodeInterface} from "../interfaces/gridNode.interface";
import {GraphAstarInterface} from "../interfaces/graphAstar.interface";
import {Marker} from "../../marker/models/marker.model";

// Not best way but i dont have much time for project preperation for no ts libraries
declare var Graph:any;
// Not best way ends

/**
 * MapService is responsible for graph utilities
 */

@Injectable()
export class MapService {
  private _mapSize:number = 20;
  private _graph:GraphAstarInterface;
  private _map:Array<Array<boolean>>;

  /**
   * MapService constructor
   */
  constructor() {
    this.setGraph(this.generateArray());
  }

  /**
   * marking equasion
   * @param x1
   * @param y1
   * @param start_X
   * @param start_Y
   * @param size
   * @returns {boolean}
   * @private
   */
  static _markingEquasion(x1,y1,start_X,start_Y,size){
    return ((x1 - start_X) * (x1 - start_X) + (y1 - start_Y) * (y1 - start_Y)) <= size * size;
  }

  /**
   * setMarkCircle on the map
   * @param marker
   */
  _setMarkCircle(marker:Marker){
    this._map = this._map.map(
        (row,x1)=>{
          return row.map(
            (column,y1)=>{
              if(column === true){return column;}
              return MapService._markingEquasion(
                x1,
                y1,
                marker.coordinates.x,
                marker.coordinates.y,
                marker.size);
            }
          );
        }
      );
  }

  /**
   * place your marker on the map
   * @param marker
   */
  placeMarker(marker:Marker){
    this._map[marker.coordinates.x][marker.coordinates.y] = true;
    this._setMarkCircle(marker);
  }

  placeMarkers(markers:Array<Marker>){
    this.setGraph(this.generateArray());
    markers.forEach((m)=>this.placeMarker(m));
  }

  /**
   * graph getter
   * @returns {GraphAstarInterface}
   */
  getGraph(): GraphAstarInterface {
    return this._graph;
  }

  searchGraph(){
    this.setGraph(this._map);
    //TODO: unfinsihed
  }

  /**
   * graph setter
   * @param value
   */
  setGraph(value: Array<Array<boolean>>) {
    this._map = value;
    this._graph = new Graph(value);
  }

  /**
   * Map getter
   * @returns {Array<Array<boolean>>}
   */
  getMap(){
    return this._map;
  }

  /**
   * mapSize getter
   * @returns {number}
   */
  get mapSize(): number {
    return this._mapSize;
  }

  /**
   * mapSize setter
   * @param value
   */
  set mapSize(value: number) {
    this._mapSize = value;
  }

  /**
   * generateArray doubled layer
   * @param size
   * @returns {Array}
   */
  generateArray(size?:number):Array<Array<boolean>>{
    size = size || this.mapSize;
    let map = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(false);
      }
      map.push(row);
    }
    return map;
  }


}
