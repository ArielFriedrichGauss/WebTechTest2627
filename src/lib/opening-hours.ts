import type { OpeningHours, Weekday } from "./types";

const WEEKDAYS: Weekday[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/**
 * A range like "18:00–02:00" closes after midnight, so the close time is
 * numerically smaller than the open time. We detect that and treat "now"
 * as inside the range if it's after open today OR before close on the
 * morning after.
 */
function isWithinRange(range: string, minutesNow: number) {
  const [openStr, closeStr] = range.split("–");
  const open = toMinutes(openStr);
  const close = toMinutes(closeStr);

  if (close > open) {
    return minutesNow >= open && minutesNow < close;
  }
  return minutesNow >= open || minutesNow < close;
}

export function isOpenNow(hours: OpeningHours, now = new Date()) {
  const today = WEEKDAYS[now.getDay()];
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  const todayRange = hours[today];
  if (todayRange && isWithinRange(todayRange, minutesNow)) {
    return true;
  }

  // Still covered by yesterday's overnight range (e.g. open past midnight).
  const yesterday = WEEKDAYS[(now.getDay() + 6) % 7];
  const yesterdayRange = hours[yesterday];
  if (yesterdayRange) {
    const [openStr, closeStr] = yesterdayRange.split("–");
    const open = toMinutes(openStr);
    const close = toMinutes(closeStr);
    if (close <= open && minutesNow < close) {
      return true;
    }
  }

  return false;
}
