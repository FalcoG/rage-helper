# Rage Helper
[![npm](https://img.shields.io/npm/v/rage-helper.svg?style=flat)](https://www.npmjs.com/package/rage-helper)
[![typedef](https://img.shields.io/badge/typedef-.d.ts-blue.svg?style=flat&longCache=true)](https://github.com/FalcoG/rage-helper/blob/main/typings.d.ts)

## Installation

```npm install rage-helper```

## Configuration
In order to use the types, you should add it to your TSConfig compilerOptions.

```json
{
  "compilerOptions": {
    "types": ["rage-helper"]
  }
}

```

## Usage
```javascript
import { busStops } from 'rage-helper'

busStops.forEach(busStop => {
  console.log(busStop.Name)
  console.log(busStop.Position) // X, Y, Z
  console.log(busStop.Rotation) // X, Y, Z
  console.log(busStop.Meta) // flipped, setback
})
```
