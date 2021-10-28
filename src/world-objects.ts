import { WorldObject } from './index'

import worldBinsDumpsters from '../gta-v-data-dumps/objectslocations/worldBinsDumpsters.json'
import worldGasPumps from '../gta-v-data-dumps/objectslocations/worldGasPumps.json'
import worldPostBoxes from '../gta-v-data-dumps/objectslocations/worldPostBoxes.json'
import worldRecycleBins from '../gta-v-data-dumps/objectslocations/worldRecycleBins.json'

export default {
  binsDumpsters: worldBinsDumpsters as WorldObject[],
  gasPumps: worldGasPumps as WorldObject[],
  postBoxes: worldPostBoxes as WorldObject[],
  recycleBins: worldRecycleBins as WorldObject[]
}
