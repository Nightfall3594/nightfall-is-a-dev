import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function fromNow(date) {
    return dayjs(date).fromNow();
}