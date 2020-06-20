<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                         <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                        >
    <b-card-text>
      Luis Galaz mONTOYA
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { BCard } from 'bootstrap-vue';
    export default {
        components: {BCard},
        mounted() {
            console.log('Component mounted.');
        }
    };
</script>
