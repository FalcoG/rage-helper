type BusStops = BusStop[]

interface BusStop {
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
