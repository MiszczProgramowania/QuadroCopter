import {CoordinatesInterface} from "../interfaces/coordinates.interface";

/**
 * Marker class is responsible for marker utilities
 */
export class Marker {

  private _coordinates:CoordinatesInterface;
  private _size:number;

  /**
   * Marker constructor
   * @param coordinates
   * @param size
   */
  constructor(coordinates:CoordinatesInterface, size:number){
    this.coordinates = coordinates;
    this.size = size;
  }

  /**
   * size getter
   * @returns {number}
   */
  get size(): number {
    return this._size;
  }

  /**
   * size setter
   * @param value
   */
  set size(value: number) {
    this._size = value;
  }

  /**
   * coordinates getter
   * @returns {CoordinatesInterface}
   */
  get coordinates(): CoordinatesInterface {
    return this._coordinates;
  }

  /**
   * coordinates setter
   * @param value
   */
  set coordinates(value: CoordinatesInterface) {
    this._coordinates = value;
  }

}
