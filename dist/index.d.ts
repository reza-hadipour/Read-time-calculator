export declare function calculateReadTime(text: string): ICalculateReadTime;

declare type ICalculateReadTime={
    milliseconds: number,
    hour: number
    minute: number
    seconds: number
    timeFormat: string
}