export interface TimeDifferenceType {
  days ?: number;
  hour ?: number;
  minutes : number;
  seconds : number;
  time?: number;
}

export function padStartTime(time:number) {
  return String(time).padStart(2, '0');
}

export function getTimeDifference(gap: number) {
  return {
    days : Math.floor(gap / (1000 * 60 * 60 * 24)),
    hour : Math.floor((gap/ (1000 * 60 * 60 )) % 24 ),
    minutes : Math.floor((gap  / (1000 * 60 )) % 60 ),
    seconds : Math.floor((gap / 1000 ) % 60),
    time: gap
  }
}

export function getStringTimeDifference(gap: number) {
  return {
    days : String(Math.floor(gap / (1000 * 60 * 60 * 24))),
    hour : String(Math.floor((gap/ (1000 * 60 *60 )) % 24 )).padStart(2, "0"),
    minutes : String(Math.floor((gap  / (1000 * 60 )) % 60 )).padStart(2, "0"),
    seconds : String(Math.floor((gap / 1000 ) % 60)).padStart(2, "0"),
  }
}