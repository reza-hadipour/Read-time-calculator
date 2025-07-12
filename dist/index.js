"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateReadTime = calculateReadTime;
function calculateReadTime(text) {
    let hour = 0, minute = 0, seconds = 0;
    let hourString, minuteString, secondsString;
    if (text.trim().length == 0) {
        return {
            milliseconds: 0,
            hour,
            minute,
            seconds,
            timeFormat: `00':00"`
        };
    }
    const baseTime = calculateBaseTime(text);
    const { integerPart, decimalPart } = departedBaseTime(baseTime);
    seconds = Math.floor(decimalPart * 60);
    const minutesInSeconds = integerPart * 60;
    const timeToMilliSeconds = (minutesInSeconds + seconds) * 1000;
    const date = new Date(timeToMilliSeconds);
    // Show time
    hour = date.getUTCHours();
    minute = date.getUTCMinutes();
    seconds = date.getUTCSeconds();
    hourString = hour.toString().padStart(2, "0");
    minuteString = minute.toString().padStart(2, "0");
    secondsString = seconds.toString().padStart(2, "0");
    const timeFormat = (hour > 0) ? `${hourString}:${minuteString}':${secondsString}"` : `${minuteString}':${secondsString}"`;
    return {
        milliseconds: timeToMilliSeconds,
        hour,
        minute,
        seconds,
        timeFormat // hh:mm':ss"
    };
}
function calculateBaseTime(text) {
    let countOfWords = text.trim().split(" ").length;
    const baseTime = countOfWords / 200; // 200, Average of words an adult reads per minute.
    return baseTime;
}
function departedBaseTime(baseTime) {
    const integerPart = Math.floor(baseTime);
    const decimalPart = +(baseTime - integerPart);
    return {
        integerPart,
        decimalPart
    };
}
// export declare type CalculateReadTimeType={
//     milliseconds: number,
//     hour: number
//     minute: number
//     seconds: number
//     timeFormat: string
// }
// export declare type departedBaseTimeType= {
//     integerPart: number,
//     decimalPart: number
// }
