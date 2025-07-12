<<<<<<< HEAD
import { CalculateReadTimeType } from "./result";
export declare function calculateReadTime(text: string): CalculateReadTimeType;
=======
export declare function calculateReadTime(text: string): ICalculateReadTime;

declare type ICalculateReadTime={
    milliseconds: number,
    hour: number
    minute: number
    seconds: number
    timeFormat: string
}
>>>>>>> a39bb72a1883c3b3fa7afd05edc5d7d96e6e679e
