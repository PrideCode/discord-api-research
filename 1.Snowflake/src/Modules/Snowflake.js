// Copyright (C) 2021 PrideCode. Written by the PrideCode Contributors. Licensed under the MIT License (https://opensource.org/licenses/MIT)

/**
* This Class can convert snowflake to the single units like (timestamp, iworkerid, processid, id)
* @author   liquiddevelopmentnet
*/
export class Snowflake {

    /**
    * Constructor for the SnowflakeBinaryUtils class
    * @author   liquiddevelopmentnet
    * @param    {number} snowflake
    */
    constructor(snowflake) {
        this.provided = snowflake

        if(snowflake == undefined) {
            throw new Error("You must provide a snowflake while creating a Instance of this class.")
        }
    }

    /**
    * This Function analyzes the Snowflake and return its data.
    * @author   liquiddevelopmentnet
    * @returns  {SnowflakeData}
    */
    analyze() {
        this.binary = (this.provided % 2).toString();
        for (; this.provided > 1 ;) {
            this.provided = parseInt(this.provided / 2);
            this.binary =  (this.provided % 2) + (this.binary);
        }

        this.data = this.#convertBinaryToData(this.binary)

        return this.data
    }

    /**
    * This Function generates a data struct out of a binary number
    * @author   liquiddevelopmentnet
    * @param    {string} binary
    * @returns  {SnowflakeData}
    */
    #convertBinaryToData(binary) {

        var incremented = binary.slice(binary.length - 12)
        binary = binary.slice(0, binary.length - 12)

        var internal_process_id = binary.slice(binary.length - 5)
        binary = binary.slice(0, binary.length - 5)

        var internal_worker_id = binary.slice(binary.length - 5)
        binary = binary.slice(0, binary.length - 5)

        var timestamp_discord = parseInt(binary, 2)
        var timestamp_unix = timestamp_discord + 1420070400000
    
        return {
            timestamp_discord: timestamp_discord,
            timestamp_unix: timestamp_unix,
            internal_worker_id: internal_worker_id,
            internal_process_id: internal_process_id,
            incremented: incremented
        }
    }

}