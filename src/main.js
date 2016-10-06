var Vue =  require('vue');
var Datepicker = require('./Datepicker.vue');
import moment from 'moment';

new Vue({
    el: 'body',
    components: { datepicker: Datepicker },
    data() {
        return {
            disableDays: []
        }
    },
    ready() {
        for (let i=0; i<31; i++) {
            var tmp = moment().add(i, 'days');

            if (i%2) this.disableDays.push(tmp);
        }
    }
});
