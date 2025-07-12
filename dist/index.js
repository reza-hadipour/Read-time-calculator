"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateReadTime = calculateReadTime;
function calculateReadTime(text) {
    let hour = 0, minute = 0, seconds = 0;
    let hourString, minuteString, secondsString;
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
    return {
        milliseconds: timeToMilliSeconds,
        hour,
        minute,
        seconds,
        timeFormat: `${hourString}:${minuteString}:${secondsString}` // hh:mm:ss
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
