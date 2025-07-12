export function calculateReadTime(text: string): calculateReadTime {
    let hour: number = 0, minute: number = 0, seconds: number = 0;
    let hourString: string, minuteString: string, secondsString: string;

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

    return {
        milliseconds: timeToMilliSeconds,
        hour,
        minute,
        seconds,
        timeFormat: `${hourString}:${minuteString}:${secondsString}`    // hh:mm:ss
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
