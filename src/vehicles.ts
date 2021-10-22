import vehicles from '../gta-v-data-dumps/vehicles.json'

export default {
  getVehicleByHash (hash: number) {
    return vehicles.find(vehicle => vehicle.Hash === hash)
  }
}
