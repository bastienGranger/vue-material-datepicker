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

	getYears() {
		let start = moment([this.start.year() - 50, 0]);
		let end = moment([this.start.year() + 50, 0]);

		return moment.range(start, end).toArray('years');
	}
}

export function getWeekDays(lang) {
	let days = [];

	moment.locale(lang);

	for (let i=0; i<7; i++) days.push(moment().weekday(i).format('dd'));

	return days;
}