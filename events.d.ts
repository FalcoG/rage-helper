declare namespace RageHelperDebugEnums {
  const enum EventKey {
    VECTOR_TO_STREET = 'rage-helper:vector-to-street'
  }
}

interface vectorToStreetPayload {
  x: number
  y: number
  z: number
}
