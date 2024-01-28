export default class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }
    get _futureDate() {
        return new Date(this.futureDate);
    }
    get _actualDate() {
        return new Date();
    }

    get timeStampDiff() {
        let time = this._futureDate.getTime() - this._actualDate.getTime();
        return time;
    }

    get days() {
        const millis = this.timeStampDiff;
        const days = millis / (1000 * 60 * 60 * 24);
        return Math.floor(days);
    }

    get hours() {
        const millis = this.timeStampDiff;
        const hours = millis / (1000 * 60 * 60);
        return Math.floor(hours);
    }

    get minutes() {
        const millis = this.timeStampDiff;
        const minutes = millis / (1000 * 60);
        return Math.floor(minutes);
    }

    get seconds() {
        const millis = this.timeStampDiff;
        const seconds = millis / 1000;
        return Math.floor(seconds);
    }

    get timeUntil() {
        return {
            days: this.days,
            hours: String(this.hours % 24).padStart(2, "0"),
            minutes: String(this.minutes % 60).padStart(2, "0"),
            seconds: String(this.seconds % 60).padStart(2, "0"),
        };
    }
}
