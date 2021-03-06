import { Injectable } from '@angular/core';
import {GridNodeInterface} from "../interfaces/gridNode.interface";
import {GraphAstarInterface} from "../interfaces/graphAstar.interface";
import {Marker} from "../../marker/models/marker.model";

// Not best way but i dont have much time for project preperation for no ts libraries
declare var Graph:any;
declare var astar:any;
// Not best way ends

/**
 * MapService is responsible for graph utilities
 */

@Injectable()
export class MapService {
  private _mapSize:number = 30;
  private _graph:GraphAstarInterface;
  private _map:Array<Array<number>>;
  private _options = { diagonal: true };
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
  static _markingEquasion(x1:number,y1:number,start_X:number,start_Y:number,size:number):number{
    if(((x1 - start_X) * (x1 - start_X) + (y1 - start_Y) * (y1 - start_Y)) <= size * size){
      return 1;
    }
    return 0;
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
              if(column === 1){return column;}
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
    this._map[marker.coordinates.x][marker.coordinates.y] = 1;
    this._setMarkCircle(marker);
  }

  placeMarkers(markers:Array<Marker>){
    setTimeout(()=>{
      this.setGraph(this.generateArray());
      markers.forEach((m)=>this.placeMarker(m));
    },1);
  }

  /**
   * graph getter
   * @returns {GraphAstarInterface}
   */
  getGraph(): GraphAstarInterface {
    return this._graph;
  }

  searchGraph(start, end){
    this.setGraph(this._map);
    let fromNode = this.getGraph().grid[start.x][start.y];
    let toNode = this.getGraph().grid[end.x][end.y];
    return astar.search(this._graph, fromNode, toNode);
  }

  /**
   * graph setter
   * @param value
   */
  setGraph(value: Array<Array<number>>) {
    this._map = value;
    this._graph = new Graph(value, this._options);
  }

  /**
   * Map getter
   * @returns {Array<Array<number>>}
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
  generateArray(size?:number):Array<Array<number>>{
    size = size || this.mapSize;
    let map = [];
    for (let i = 0; i < size; i++) {
      let row = [];
      for (let j = 0; j < size; j++) {
        row.push(0);
      }
      map.push(row);
    }
    return map;
  }


}
