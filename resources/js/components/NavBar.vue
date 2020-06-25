<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">{{ this.$store.state.appName }}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item-button @click="logout">Sign out</b-dropdown-item-button>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import { BNavbar } from 'bootstrap-vue';

    export default {
        components: { BNavbar },
        methods: {
            async logout() {
                try {
                    let response = await window.axios.post(this.route('logout'));
                    console.log('res', response);
                    document.location = this.route('welcome');
                } catch (err) {
                    console.log(err);
                }
            }
        }
    };
</script>
