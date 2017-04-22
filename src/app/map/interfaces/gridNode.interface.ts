/**
 * Created by grzegorz on 22.04.17.
 */
export interface GridNodeInterface{
  closed  : boolean;
  f       : number;
  g       : number;
  h       : number;
  parent? : any;
  visited : boolean;
  weight  : number;
  x       : number;
  y       : number;
}
