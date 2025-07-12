import {CalculateReadTimeType, departedBaseTimeType} from "../types"

export function calculateReadTime(text: string): CalculateReadTimeType {
    let hour: number = 0, minute: number = 0, seconds: number = 0;
    let hourString: string, minuteString: string, secondsString: string;

    if(text.trim().length == 0) {
        return {
            milliseconds:0,
            hour,
            minute,
            seconds,
            timeFormat: `00':00"`
        }
    }

    const baseTime = calculateBaseTime(text);

    const { integerPart, decimalPart } = departedBaseTime(baseTime)

    seconds = Math.floor(decimalPart * 60);

    const minutesInSeconds = integerPart * 60;
    const timeToMilliSeconds = (minutesInSeconds + seconds) * 1000;

    const date = new Date(timeToMilliSeconds);

    // Show time
    hour = date.getUTCHours();
    minute = date.getUTCMinutes()
    seconds = date.getUTCSeconds();

    hourString = hour.toString().padStart(2, "0");
    minuteString = minute.toString().padStart(2, "0");
    secondsString = seconds.toString().padStart(2, "0");

    const timeFormat = (hour > 0) ? `${hourString}:${minuteString}':${secondsString}"` : `${minuteString}':${secondsString}"`

    return {
        milliseconds: timeToMilliSeconds,
        hour,
        minute,
        seconds,
        timeFormat    // hh:mm':ss"
    }
}

function calculateBaseTime(text: string): number {
    let countOfWords: number = text.trim().split(" ").length;
    const baseTime = countOfWords / 200;    // 200, Average of words an adult reads per minute.
    return baseTime;
}

function departedBaseTime(baseTime: number): departedBaseTimeType {
    const integerPart = Math.floor(baseTime);
    const decimalPart = +(baseTime - integerPart);

    return {
        integerPart,
        decimalPart
    }
}