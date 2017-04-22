import { Injectable } from '@angular/core';
import {GridNodeInterface} from "../interfaces/gridNode.interface";
import {GraphAstarInterface} from "../interfaces/graphAstar.interface";

// Not best way but i dont have much time for project preperation for no ts libraries
declare var Graph:any;
// Not best way ends

/**
 * MapService is responsible for graph utilities
 */

@Injectable()
export class MapService {
  private _mapSize:number = 20;
  private _graph:GraphAstarInterface; //represent Graph class model ('any' is not best but quick here)

  constructor() {
    this.setGraph(this.generateArray());
  }

  /**
   * graph getter
   * @returns {Array<Array<number>>}
   */
  getGraph(): GraphAstarInterface {
    return this._graph;
  }

  /**
   * graph setter
   * @param value
   */
  setGraph(value: Array<Array<number>>) {
    this._graph = new Graph(value);
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
   * generateArray of x and y coordinates
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
