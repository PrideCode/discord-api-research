// Copyright (C) PrideCode. Written by the PrideCode Contributors. Licensed under the MIT License (https://opensource.org/licenses/MIT)

export class Snowflake {
    constructor(snowflake: number)

    #convertBinaryToData(binary: string): SnowflakeData
    analyze(): SnowflakeData
}

export interface SnowflakeData {
    timestamp_discord: string,
    timestamp_unix: string,
    internal_worker_id: string,
    internal_process_id: string,
    incremented: string
}

export var provided: number
export var binary: number