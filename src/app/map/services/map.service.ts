import { Injectable } from '@angular/core';

/**
 * MapService is responsible for map utilities
 */

@Injectable()
export class MapService {
  private _mapSize:number = 20;
  private _map:Array<Array<number>>;

  constructor() { }

  /**
   * map getter
   * @returns {Array<Array<number>>}
   */
  get map(): Array<Array<number>> {
    return this._map;
  }

  /**
   * map setter
   * @param value
   */
  set map(value: Array<Array<number>>) {
    this._map = value;
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
   * mapGenerator
   * @param size
   * @returns {Array}
   */
  mapGenerator(size?:number):Array<Array<number>>{
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
