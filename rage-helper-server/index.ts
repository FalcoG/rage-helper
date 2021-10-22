import { vehicles } from 'rage-helper'

mp.events.addCommand('getplayerstreet', (player) => {
  const payload: vectorToStreetPayload = {
    x: player.position.x,
    y: player.position.y,
    z: player.position.z
  }

  player.call(RageHelperDebugEnums.EventKey.VECTOR_TO_STREET, [payload])
})

mp.events.addCommand('getvehiclespawn', (player: PlayerMp) => {
  if (player.vehicle != null) {
    const vehicle = vehicles.getVehicleByHash(player.vehicle.model)
    const name = vehicle?.Name
    const rotation = new mp.Vector3(player.vehicle.rotation.x, player.vehicle.rotation.y, player.vehicle.rotation.z)

    console.log(vehicle)
    console.log(name, player.vehicle.position.toArray(), rotation.toArray())
  }
})
