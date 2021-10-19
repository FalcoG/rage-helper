mp.events.addCommand('getplayerstreet', (player) => {
  const payload: vectorToStreetPayload = {
    x: player.position.x,
    y: player.position.y,
    z: player.position.z
  }

  player.call(RageHelperDebugEnums.EventKey.VECTOR_TO_STREET, [payload])
})
