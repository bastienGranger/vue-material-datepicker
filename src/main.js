var Vue =  require('vue');
var Datepicker = require('./components/Datepicker.vue');

new Vue({
    el: 'body',
    components: { datepicker: Datepicker }
});
