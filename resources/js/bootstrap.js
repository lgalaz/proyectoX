/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import { Ziggy } from './ziggy';
import route from 'ziggy';
import pluralize from 'pluralize';

Vue.mixin({
    methods: {
        route: (name, params, absolute) => route(name, params, absolute, Ziggy),
    }
});

Vue.filter('pluralize', function (value, element) {
    let number = 1;

    if(Array.isArray(element)) {
        number = element.length;
    }

    if (Number.isInteger(element)) {
        number = element;
    }

    return pluralize(value, number);
});

/**
 * This is an event bus for vue.js communication.
 */

window.events = new Vue();

let userHeader = document.head.querySelector('meta[name="user"]');

window.user = null;

if (userHeader && userHeader.content) {
    window.user = JSON.parse(userHeader.content);
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
