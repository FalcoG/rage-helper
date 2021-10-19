mp.events.add(RageHelperDebugEnums.EventKey.VECTOR_TO_STREET, (payload: vectorToStreetPayload) => {
  const { x, y, z } = payload

  const street = mp.game.pathfind.getStreetNameAtCoord(x, y, z, 0, 0)
  const streetName = mp.game.ui.getStreetNameFromHashKey(street.streetName)

  mp.gui.chat.push(`Rage Helper: The street name is "${streetName}" (x: ${x}, y: ${y}, z: ${z})`)
})
