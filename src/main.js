var Vue =  require('vue');
var Datepicker = require('./Datepicker.vue');

new Vue({
    el: 'body',
    components: { datepicker: Datepicker }
});
