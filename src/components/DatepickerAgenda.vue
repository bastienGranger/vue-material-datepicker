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

        &.is-doubled {
            width: 630px;
        }
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
        cursor: pointer;
    }

    .datepicker-date {
        position: relative;
        font-size: 32px;
        line-height: 32px;
        height: 34px;
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
        width: 287px;
        margin: 14px;
        margin-bottom: 0;
        height: $day-size * 6;
        position: relative;
        overflow: hidden;
        float: left;
        transition: height 300ms cubic-bezier(0.75, 0.02, 0.27, 0.99);
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
        z-index: 2;
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

    .datepicker-next {
        width: 56px;
        height: 56px;
        line-height: 56px;
        float: right;
    }

    .datepicker-prev {
        width: 56px;
        height: 56px;
        line-height: 56px;
        float: left;

    }

    .datepicker-arrow {
        width: 11px;
        height: 11px;
    }

    .datepicker-month {
        width: 315px;
        position: relative;
        padding-top: 56px;
        margin-top: -56px;
        float: left;
        overflow: hidden;
    }

    .datepicker-month-label {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        width: 150px;
        margin-left: auto;
        margin-right: auto;
        line-height: 16px;
        height: 16px;
        text-align: center;
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
                background-color: darken(#ffffff, 5%);
            }
        }
    }

    .datepicker-years {
        width: 315px;
        height: $day-size * 6 + 56 + 16;
        background-color: #ffffff;
        position: absolute;
        z-index: 2;
        margin-top: -56px;

        overflow: scroll;

        .datepicker-years-content {

            .datepicker-year {
                width: 100%;
                text-align: center;
                font-size: 25px;
                line-height: 25px;
                height: 25px;
                margin: 15px 0;

                transition: all 0.3s ease;

                &.selected, &:hover {
                    font-size: 30px;
                    height: 30px;
                    font-weight: 300;
                    color: $primary-color;
                }
            }
        }

        &.is-doubled {
            width: 630px;
        }
    }

</style>

<template>
    <div class="datepicker"
         :class="isDoubled"
         @click.stop
         v-if="show"
         transition="datepicker-slide">

        <div class="datepicker-header">
            <div class="datepicker-year" @click="showOrHideYears">
                <span v-for="year in [year]" :class="dayDirection" transition="slideh">
                    {{ year }}
                </span>
            </div>
            <div class="datepicker-date">
                <span v-for="dateFormatted in [dateFormatted]"
                      :class="dayDirection"
                      transition="slideh">
                    {{ dateFormatted }}
                </span>
            </div>
        </div>

        <div class="datepicker-body">
            <div class="datepicker-controls">
                <button class="datepicker-next" @click="nextMonth">
                    <svg class="datepicker-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0.5 900.5 30 30" enable-background="new 0.5 900.5 30 30"><path d="M8.779 928.31c-.473.567-.396 1.406.171 1.88.566.474 1.409.396 1.881-.17l11.391-13.664c.208-.247.31-.551.31-.855 0-.304-.103-.607-.31-.855l-11.391-13.666c-.472-.566-1.315-.644-1.881-.17-.565.473-.643 1.313-.171 1.881l10.679 12.809-10.679 12.81z"/></svg>                </button>
                <button class="datepicker-prev" @click="prevMonth">
                    <svg class="datepicker-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0.5 900.5 30 30" enable-background="new 0.5 900.5 30 30"><path d="M22.221 928.31l-10.679-12.81 10.679-12.809c.472-.567.395-1.408-.171-1.881-.565-.474-1.409-.396-1.881.17l-11.39 13.665c-.208.248-.31.552-.31.855 0 .305.103.608.31.855l11.391 13.664c.472.566 1.315.644 1.881.17.566-.473.643-1.312.17-1.879z"/></svg>
                </button>
            </div>

            <div class="datepicker-month" v-for="month in months">
                <div class="datepicker-month-label"
                     :class="classDirection"
                     v-for="month in [month]"
                     transition="slidev">
                    {{ month.getFormatted() }}
                </div>

                <div class="datepicker-week">
                    <div class="datepicker-weekday"
                         v-for="day in weekDays"
                         track-by="$index">
                        {{ day }}
                    </div>
                </div>

                <div class="datepicker-days" :class="classWeeks">
                    <div v-for="month in [month]"
                         transition="slidev"
                         :class="classDirection">
                        <div class="datepicker-day"
                             :style="{ width: (month.getWeekStart() * 41) + 'px' }">
                        </div>

                        <div class="datepicker-day"
                             :class="{ selected: isSelected(day) }"
                             v-for="day in month.getDays()"
                             @click="selectDate(day)">
                            <span class="datepicker-day-effect"></span>
                            <span class="datepicker-day-text">{{ day.format('D') }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="datepicker-years" :class="isDoubled" v-show="yearsVisible" transition="fade">
                <div class="datepicker-years-content">
                    <div class="datepicker-year"
                         v-for="year in years"
                         :class="classYear(year)"
                         @click="selectYear(year)">
                        {{ year.year() }}
                    </div>
                </div>
            </div>

            <div class="datepicker-actions">
                <button @click="cancel()">{{ language[1] }}</button>
                <button @click="submitDay()">{{ language[0] }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    import month from '../modules/month.js';
    import * as monthClasses from '../modules/month.js';

    export default {
        props: {
            date: {
                type: Object,
                default() {
                    return moment();
                }
            },
            show: { type: Boolean, required: true },
            doubled: { type: Boolean, default: false },
            lang: { type: String, default: 'en' }
        },
        data() {
            return {
                weekDays: monthClasses.getWeekDays(this.lang),
                months: [],
                classDirection: 'off',
                dayDirection: 'off',
                yearsVisible: false,
                years: null
            };
        },
        computed: {
            year() {
                return this.date.format('YYYY');
            },
            dateFormatted() {
                if (this.doubled) return this.date.format('dddd DD MMMM');
                return this.date.format('dddd DD MMM');
            },
            classWeeks() {
                let max = 0;
                for (var i = 0; i < this.months.length; i++) {
                    if (max < this.months[i].getWeeks()) max = this.months[i].getWeeks();
                }
                return 'has-' + max + '-weeks';
            },
            isDoubled() {
                if (this.doubled) return 'is-doubled';
                return '';
            },
            language() {
                let tmp = ['ok', 'cancel'];

                if (this.lang == 'da') tmp[1] = 'afbestille';   //Danish
                if (this.lang == 'nl') tmp[1] = 'annuleren';    //Dutch
                if (this.lang == 'de') tmp[1] = 'abbrechen';    //German
                if (this.lang == 'es' || this.lang == 'es-do') tmp[1] = 'cancelar'; //Spanish and spanish (Dominican Republic)
                if (this.lang == 'fi') tmp[1] = 'peruuttaa';    //Finish
                if (this.lang == 'fr' || this.lang == 'fr-ca' || this.lang == 'fr-ch') tmp[1] = 'annuler'; //French(France-Canada-Switzerland)
                if (this.lang == 'hu') tmp[1] = 'megszünteti';  //Hugarian
                if (this.lang == 'it') tmp[1] = 'annullare';    //Italian
                if (this.lang == 'lb') tmp[1] = 'annuléieren';  //Luxembourgish
                if (this.lang == 'nb') tmp[1] = 'avbryte';      //Norwegian
                if (this.lang == 'pl') tmp[1] = 'anulować';     //Polish
                if (this.lang == 'pt' || this.lang == 'pt-br') tmp[1] = 'cancelar'; //Portuguese and Portuguese(Brazil)
                if (this.lang == 'ro') tmp[1] = 'anula'; //Romaninan
                if (this.lang == 'ru') tmp[1] = 'отменить'; //Romaninan
                if (this.lang == 'sk') tmp[1] = 'zrušiť'; //Slovak
                if (this.lang == 'sl') tmp[1] = 'preklic'; //Slovenian
                if (this.lang == 'sv') tmp[1] = 'avboka'; //Swedish
                if (this.lang == 'uk') tmp[1] = 'preklic'; //Ukrainian

                return tmp;
            }
        },
        watch: {
            show(val, oldval) {
                if (val === false) {
                    this.classDirection = 'off';
                    this.dayDirection = 'off';
                } else {
                    let newDate = moment([this.date.year(), this.date.month(), this.date.date()]);
                    this.date = newDate.clone();
                }
            },
            yearsVisible(val, oldval) {
                let scrollOffset = (this.date.year() - this.years[0].year()) * 40 - 130;
                $('.datepicker-years').scrollTop(scrollOffset);
            }
        },
        ready() {
            this.date = this.date.clone();

            this.$nextTick(() => {
                this.setMonths();
                this.years = this.months[0].getYears();
            });
        },
        methods: {
            classYear(year) {
                if (year.year() == this.date.year()) return 'selected';
                else return '';
            },
            isSelected(day) {
                return this.date.unix() === day.unix();
            },
            selectDate(date) {
                this.classDirection = 'off';
                this.setClassDirection(date);
                this.date = date.clone();
                this.$dispatch('change', this.date);
            },
            selectYear(date) {
                this.setClassDirection(date);

                let newDate = moment([date.year(), this.date.month(), this.date.date()]);
                this.date = newDate.clone();

                this.setMonths();

                let scrollOffset = (this.date.year() - this.years[0].year()) * 40 - 130;
                $('.datepicker-years').animate({ scrollTop: scrollOffset}, '100', () => {
                    this.showOrHideYears();
                });

                this.$dispatch('change', this.date);
            },
            setClassDirection(date) {
                this.dayDirection = 'direction-next';
                if (date.isBefore(this.date)) this.dayDirection = 'direction-prev';
            },
            setMonths() {
                let newMonths = [];
                let firstMonth = new month(this.date.month(), this.date.year());
                newMonths.push(firstMonth);

                if (this.doubled) {
                    let mon = this.date.month() + 1;
                    let year = this.date.year();

                    if (mon > 11) {
                        mon = 0;
                        year += 1;
                    }

                    let secondMonth = new month(mon, year);
                    newMonths.push(secondMonth);
                }

                this.months = newMonths;
            },
            nextMonth() {
                let tmpMonths = [];
                let monthsLength = this.months.length - 1;

                for (var i = 0; i < monthsLength; i++) {
                    tmpMonths.push(new month(this.months[i+1].month, this.months[i+1].year));
                }

                let mon = this.months[monthsLength].month + 1;
                let year = this.months[monthsLength].year;

                if (mon > 11) {
                    mon = 0;
                    year += 1;
                }

                let tmpMonth = new month(mon, year);
                tmpMonths.push(tmpMonth);

                this.classDirection = 'direction-next';
                this.months = tmpMonths;
            },
            prevMonth() {
                let tmpMonths = [];
                let monthsLength = this.months.length - 1;

                for (var i = monthsLength; i > 0; i--) {
                    tmpMonths.push(new month(this.months[i-1].month, this.months[i-1].year));
                }

                let mon = this.months[0].month - 1;
                let year = this.months[0].year;

                if (mon < 0) {
                    mon = 11;
                    year -= 1;
                }

                let tmpMonth = new month(mon, year);
                tmpMonths.unshift(tmpMonth);

                this.classDirection = 'direction-prev';
                this.months = tmpMonths;
            },
            submitDay() {
                this.classDirection = 'off';
                this.dayDirection = 'off';
                this.yearsVisible = false;
                this.$dispatch('change', this.date);
                this.$dispatch('hide');
            },
            cancel() {
                this.classDirection = 'off';
                this.dayDirection = 'off';
                this.$dispatch('cancel');
            },
            showOrHideYears() {
                this.yearsVisible = !this.yearsVisible;
            }
        }
    };
</script>