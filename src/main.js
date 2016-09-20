var Vue =  require('vue');
var Datepicker = require('./Datepicker.vue');
var moment = require('moment');

moment.locale('es');

new Vue({
    el: 'body',
    components: { datepicker: Datepicker }
});
