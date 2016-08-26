<style lang="scss">
	@import '../assets/scss/variables';
	@import '../assets/scss/transitions';

	.datepicker {
		position: absolute;
		width: 315px;
		top: 100%;
		background-color: #ffffff;
		-webkit-box-shadow: 5px 22px 95px -14px rgba(0,0,0,1);
		-moz-box-shadow: 5px 22px 95px -14px rgba(0,0,0,1);
		box-shadow: 5px 22px 95px -14px rgba(0,0,0,1);
	}

	.datepicker-header {
		background-color: $primary-color;
		color: #ffffff;
		padding: 20px;
	}

	.datepicker-year {
		margin-bottom: 10px;
		line-height: 16px;
		position: relative;
		height: 16px;
		opacity: 0.7;
		overflow: hidden;
	}

	.datepicker-date {
		position: relative;
		font-size: 32px;
		line-height: 32px;
		height: 32px;
		overflow: hidden;
	}

	.datepicker-week {
		font-size: 12px;
		line-height: 12px;
		color: rgba(0, 0, 0, 0.8);
		padding: 0 14px;
	}

	.datepicker-weekday {
		float: left;
		width: $day-size;
		text-align: center;
	}

	.datepicker-days {
		margin: 14px;
		margin-bottom: 0;
		height: $day-size * 5;
		position: relative;
		overflow: hidden;
		transition: height 0.3s ease;
		&.has-6-weeks {
			height: $day-size * 6;
		}
	}

	.datepicker-day {
		width: $day-size;
		height: $day-size;
		text-align: center;
		float: left;
		line-height: $day-size;
		cursor: pointer;
		position: relative;
		transition: color 450ms ease;

		&:hover {
			color: #ffffff;
			.datepicker-day-effect {
				transform: scale(1);
				opacity: 0.6;
			}
		}

		&.selected {
			color: #ffffff;
			.datepicker-day-effect {
				transform: scale(1);
				opacity: 1;
			}
		}
	}

	.datepicker-day-effect {
		position: absolute;
		width: $day-size - 4px;
		height: $day-size - 4px;
		border-radius: 50%;
		background-color: lighten($primary-color, 5%);
		top: 2px;
		left: 2px;
		transform: scale(0);
		opacity: 0;
		transition: all 450ms ease;
	}

	.datepicker-day-text {
		position: relative;
	}

	.datepicker-controls {
		position: relative;
		height: 56px;
		line-height: 56px;
		text-align: center;

		button {
			position: relative;
			background-color: transparent;
			border: none;
			user-select: none;
			outline: none;
			cursor: pointer
		}
	}

	.datepicker-controls-next {
		width: 56px;
		height: 56px;
		line-height: 56px;
		float: right;
	}

	.datepicker-controls-prev {
		width: 56px;
		height: 56px;
		line-height: 56px;
		float: left;
	}

	.datepicker-controls-label {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		width: 150px;
		margin: auto;
	}

	.datepicker-actions {
		text-align: right;
		padding: 8px;

		button {
			border: none;
			background-color: transparent;
			display: inline-block;
			cursor: pointer;
			outline: none;
			color: lighten($primary-color, 10%);
			font-size: 14px;
			font-weight: 500;
			text-transform: uppercase;
			min-width: 88px;
			text-align: center;
			-webkit-appearance: none;
			line-height: 36px;
			transition: all 0.3s ease;
			&:hover {
				background-color: rgba(153, 153, 153, 0.3);
			}
		}
	}

</style>

<template>
	<div class="datepicker" v-if="visible" transition="datepicker-slide" @click.stop>
		<div class="datepicker-header">
			<div class="datepicker-year">
				<span v-for="year in [year]" transition="slideh" :class="dayDirection">
					{{ year }}
				</span>
			</div>
			<div class="datepicker-date">
				<span v-for="dateFormatted in [dateFormatted]" transition="slideh" :class="dayDirection">
					{{ dateFormatted }}
				</span>
			</div>
		</div>
		<div class="datepicker-controls">
			<div class="datepicker-controls-label">
				<span v-for="month in [month]" transition="slidev" :class="classDirection">
					{{ month.getFormatted() }}
				</span>
			</div>
			<button class="datepicker-controls-next" @click="nextMonth()">
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</button>
			<button class="datepicker-controls-prev" @click="prevMonth()">
				<i class="fa fa-angle-left" aria-hidden="true"></i>
			</button>
		</div>
		<div class="datepicker-week">
			<div v-for="day in weekDays" track-by="$index" class="datepicker-weekday">
				{{ day }}
			</div>
		</div>
		<div class="datepicker-days" :class="classWeeks">
			<div v-for="month in [month]" transition="slidev" :class="classDirection">
				<div class="datepicker-day" :style="{ width: (month.getWeekStart() * 41) +'px' }">
				</div>
				<div class="datepicker-day"
					 v-for="day in month.getDays()"
					 :class="{ selected: isSelected(day) }"
					 @click="selectDate(day)">
					<span class="datepicker-day-effect"></span>
					<span class="datepicker-day-text">{{ day.format('D') }}</span>
				</div>
			</div>
		</div>
		<div class="datepicker-actions">
			<button @click="cancel()">Annuler</button>
			<button @click="submitDay()">Choisir</button>
		</div>
	</div>
</template>

<script>
	import moment from 'moment';

	import month from '../modules/month.js';

	export default {
		props: {
			date: {},
			visible: {
				type: Boolean,
				required: true
			}
		},
		data() {
			return {
				weekDays: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
				month: new month(this.date.month(), this.date.year()),
				classDirection: 'off',
				dayDirection: 'off'
			};
		},
		computed: {
			year() {
				return this.date.format('YYYY');
			},
			dateFormatted() {
				return this.date.format('dddd DD MMM');
			},
			classWeeks() {
				return 'has-' + this.month.getWeeks() + '-weeks';
			}
		},
		watch: {
			visible(val, oldval) {
				if (val === false) {
					this.classDirection = 'off';
					this.dayDirection = 'off';
				}
			}
		},
		methods: {
			isSelected(day) {
				return this.date.unix() === day.unix();
			},
			selectDate(day) {
				this.dayDirection = 'direction-next';
				if (day.isBefore(this.date)) this.dayDirection = 'direction-prev';
				console.log(day.format('DD/MM/YYYY'));
				this.date = day.clone();
				console.log(this.date.format('DD/MM/YYYY'))
			},
			nextMonth() {
				let m = this.month.month + 1;
				let y = this.month.year;
				if (m > 11) {
					m = 0;
					y += 1;
				}
				this.month = new month(m, y);
				this.classDirection = 'direction-next';
			},
			prevMonth() {
				let m = this.month.month - 1;
				let y = this.month.year;
				if (m < 0) {
					m = 11;
					y -= 1;
				}
				this.month = new month(m, y);
				this.classDirection = 'direction-prev';
			},
			submitDay() {
				this.$dispatch('change', this.date);
			},
			cancel() {
				this.$dispatch('cancel');
			},
			show() {

			}
		}
	};
</script>