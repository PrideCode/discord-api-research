// Copyright (C) PrideCode. Written by the PrideCode Contributors. Licensed under the MIT License (https://opensource.org/licenses/MIT)

import chai from "chai"
import { Snowflake } from "../Modules/Snowflake.js"

var expect = chai.expect

it("Test the UNIX Timestamp data", () => {
    const mySnowflake = new Snowflake(914139936427475026)
    const unix_timestamp = mySnowflake.analyze().timestamp_unix

    const secondSnowflake = new Snowflake(914938362203353138)
    const unix_timestamp_2 = secondSnowflake.analyze().timestamp_unix

    expect(unix_timestamp).to.equal(1638018344743)
    expect(unix_timestamp_2).to.equal(1638208704282)
})