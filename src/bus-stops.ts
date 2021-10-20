import busStopsData from '../gta-v-data-dumps/objectslocations/worldBusStops.json'

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

const busStops: BusStops = busStopsData

export default busStops
