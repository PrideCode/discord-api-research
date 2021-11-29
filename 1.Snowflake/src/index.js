// Copyright (C) 2021 PrideCode. Written by the PrideCode Contributors. Licensed under the MIT License (https://opensource.org/licenses/MIT)

import { Snowflake } from "./Modules/Snowflake.js"

/* Playground (uncomment for testing) */

const mySnowflake = new Snowflake(914938362203353138n) // <- Your Snowflake ID
console.log(mySnowflake.analyze().timestamp_unix)

