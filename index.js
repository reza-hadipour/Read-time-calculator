class EstimateTimeToStudy{
    #text= "";

    #calculateTimeBase(){
        let contOfWords = this.#text.split(" ").length;
        const timeBase = contOfWords / 200;
        return timeBase
    }

    calculateTime(text){
        this.#text = text;

        let hour = 0 , minute = 0 , seconds = 0;
        let hourString, minuteString, secondsString;

        const timeBase = this.#calculateTimeBase();

        const integerPart = Math.floor(timeBase);
        const decimalPart = +(timeBase-integerPart);

        seconds = Math.floor(decimalPart * 60);

        const minutesInSeconds = integerPart * 60;
        const timeToMilliSeconds = (minutesInSeconds + seconds) * 1000;


        const date = new Date(timeToMilliSeconds);

        // Show time

        hour = date.getUTCHours();
        minute = date.getUTCMinutes()
        seconds = date.getUTCSeconds();


        hourString = hour.toString().padStart(2,"0");
        minuteString = minute.toString().padStart(2,"0");
        secondsString = seconds.toString().padStart(2,"0");

        
        return {
            milliseconds: timeToMilliSeconds,
            hour,
            minute,
            seconds,
            timeFormat: `${hourString}:${minuteString}:${secondsString}`
        };
    }

}

module.exports = new EstimateTimeToStudy;