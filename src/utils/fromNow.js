import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

export default function fromNow(date) {
    return dayjs.utc(date).tz("America/New_York").fromNow();
}