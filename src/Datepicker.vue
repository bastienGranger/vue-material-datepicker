<style lang="scss">
    .datepicker-container {
        position: relative;
    }
</style>

<template>
    <div class="datepicker-container">
        <input type="text"
               readonly="{{ isMobile }}"
               class="{{ classDesign }}"
               value="{{ date_formatted }}"
               @click="showDatepicker">

        <input type="hidden"
               id="{{ id }}"
               name="{{ name }}"
               value="{{ date_raw }}">

        <datepicker-agenda :disable-passed-days="disablePassedDays"
                           :doubled="doubled"
                           :disabled-days="disabledDays"
                           :lang="lang"
                           :orientation="orientation"
                           :show="isVisible"
                           @change="selectDate"
                           @hide="hideDatePicker"
                           @cancel="cancelDateSelection">
        </datepicker-agenda>
    </div>
</template>

<script>
    import moment from 'moment';

    import DatepickerAgenda from './components/DatepickerAgenda.vue';

    export default {
        components: {
            'datepicker-agenda': DatepickerAgenda
        },
        props: {
            classDesign: { type: String, default: '' },
            disablePassedDays: { type: Boolean, default: false },
            disabledDays: { type: Array, default() { return [] } },
            doubled: { type: Boolean, default: false },
            format: { type: String, default: 'YYYY-MM-DD' },
            id: { type: String, default: 'vue-datepicker' },
            lang: { type: String, default: 'en' },
            name: { type: String, default: 'datepicker' },
            orientation: { type: String, default: 'portrait' }
        },
        data() {
            return {
                date: '',
                isVisible: false
            };
        },
        computed: {
            date_formatted() {
                if (this.date) return this.date.format(this.format);
                return '';
            },
            date_raw() {
                if (this.date) return this.date.format('YYYY-MM-DD');
                return '';
            },
            isMobile() {
                if ($(window).width() <= 768) return 'true';
                return 'false';
            }
        },
        ready() {
            moment.locale(this.lang);

            this.setOrientation();

            window.addEventListener("orientationchange", () => {
                this.setOrientation();
            }, false);
        },
        methods: {
            selectDate(date) {
                this.$set('date', date);
            },
            setOrientation() {
                if ($(window).width() <= 768) {
                    if ($(window).width() < $(window).height()) this.orientation = 'portrait';
                    else this.orientation = 'landscape';
                }
            },
            showDatepicker() {
                this.isVisible = true;
                setTimeout( () => document.addEventListener('click', this.hideDatePicker), 0);
            },
            hideDatePicker() {
                this.isVisible = false;
                document.removeEventListener('click', this.hideDatePicker);
            },
            cancelDateSelection() {
                this.date = null;
                this.hideDatePicker();
            }
        }
    };
</script>