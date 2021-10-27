import busStops, { BusStop } from './bus-stops'
import vehicles, { Vehicle } from './vehicles'
import postBoxes from './post-boxes'

export interface WorldObject {
  Name: string
  Position: {
    X: number
    Y: number
    Z: number
  }
  Rotation: {
    X: number
    Y: number
    Z: number
  }
}

export { busStops, BusStop, vehicles, Vehicle, postBoxes }
