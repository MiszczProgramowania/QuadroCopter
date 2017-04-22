import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

  private _mapSize:number = 20;
  constructor() { }

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
  static mapGenerator(size:number):Array<Array<number>>{
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

  /**
   * map getter
   * @returns {Array<Array<number>>}
   */
  getMap():Array<Array<number>>{
      return MapService.mapGenerator(this.mapSize);
  }
}
