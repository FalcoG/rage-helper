import worldBusStops from '../gta-v-data-dumps/objectslocations/worldBusStops.json'
import metaBusStops from './bus-stops.json'

type BusStopsRaw = BusStopRaw[]
type BusStops = BusStop[]

interface BusStopRaw {
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
  Meta?: BusStopMeta
}

export interface BusStop extends BusStopRaw {
  Meta: BusStopMeta
}

interface BusStopMeta {
  setback: boolean
  flipped: boolean
}

const busStopsData: BusStopsRaw = worldBusStops

const busStopsMeta: { [any: string]: BusStop['Meta'] } = metaBusStops

const busStops: BusStops = busStopsData.map((busStop, index) => {
  const meta = busStopsMeta[index]

  const enhanced: BusStop = {
    ...busStop,
    Meta: meta !== undefined
      ? meta
      : {
          setback: false,
          flipped: false
        }
  }

  return enhanced
})

export default busStops
