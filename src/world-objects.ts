import { WorldObject } from './index'

import worldPostBoxes from '../gta-v-data-dumps/objectslocations/worldPostBoxes.json'
import worldGasPumps from '../gta-v-data-dumps/objectslocations/worldGasPumps.json'

const gasPumps: WorldObject[] = worldGasPumps
const postBoxes: WorldObject[] = worldPostBoxes

export default {
  gasPumps,
  postBoxes
}
