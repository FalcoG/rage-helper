import vehiclesData from '../gta-v-data-dumps/vehicles.json'

export interface Vehicle {
  Name: string
  DisplayName: null | string
  Hash: number
  SignedHash: number
  HexHash: string
  DlcName: string
  HandlingId: string
  LayoutId: string
  Manufacturer: string
  ManufacturerDisplayName: null | string
  Class: string
  Type: string
  PlateType: string
  DashboardType: null | string
  WheelType: string
  Flags: string[]
  Seats: number
  Price: number
  MonetaryValue: number
  HasConvertibleRoof: boolean
  HasSirens: boolean
  Weapons: string[]
  ModKits: string[]
  DimensionsMin: {
    X: number
    Y: number
    Z: number
  }
  DimensionsMax: {
    X: number
    Y: number
    Z: number
  }
  BoundingCenter: {
    X: number
    Y: number
    Z: number
  }
  BoundingSphereRadius: number
  Rewards: null | string[]
  MaxBraking: number
  MaxBrakingMods: number
  MaxSpeed: number
  MaxTraction: number
  Acceleration: number
  Agility: number
  MaxKnots: number
  MoveResistance: number
}

const vehicles: Vehicle[] = vehiclesData

export default {
  getVehicleByName (name: string) {
    return vehicles.find(vehicle => vehicle.Name === name)
  },

  getVehicleByHash (hash: number) {
    return vehicles.find(vehicle => vehicle.Hash === hash)
  },

  getVehiclesByFlag (flag: string) {
    return this.getVehiclesByFlags([flag])
  },

  getVehiclesByFlags (flags: string[]) {
    return vehicles.filter(vehicle => vehicle.Flags.some(flag => flags.includes(flag)))
  }
}
