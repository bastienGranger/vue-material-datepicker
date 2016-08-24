var moment = require('moment');
var momentRange = require('moment-range');

export default class Month {

	constructor(month, year) {
		this.start = moment([year, month]);
		this.end = this.start.clone().endOf('month');
		this.month = month;
		this.year = year;
	}

	getWeekStart() {
		return this.start.weekday();
	}

	getDays() {
		return moment.range(this.start, this.end).toArray('days');
	}

	getFormatted() {
		return this.start.format('MMMM YYYY');
	}

	getWeeks() {
		return this.end.week() - this.start.week() + 1;
	}
}