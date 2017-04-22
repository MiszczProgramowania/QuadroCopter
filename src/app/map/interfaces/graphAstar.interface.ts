import {GridNodeInterface} from "./gridNode.interface";
/**
 * Created by grzegorz on 22.04.17.
 */
export interface GraphAstarInterface{
  diagonal:boolean;
  dirtyNodes:Array<GridNodeInterface>;
  grid:Array<Array<GridNodeInterface>>;
  nodes:Array<GridNodeInterface>;
}
