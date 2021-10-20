# Rage Helper
![https://www.npmjs.com/package/rage-helper](https://img.shields.io/npm/v/rage-helper.svg?style=flat)
![https://github.com/FalcoG/rage-helper/blob/main/typings.d.ts](https://img.shields.io/badge/typedef-.d.ts-blue.svg?style=flat&longCache=true)

## Installation

```npm install rage-helper```

## Configuration
In order to use the typings, you should add it to your TSConfig compilerOptions.

```json
{
  "compilerOptions": {
    "types": ["rage-helper/typings"]
  }
}

```

## Usage
```javascript
import { busStops } from 'rage-helper'

busStops.forEach(...)
```
