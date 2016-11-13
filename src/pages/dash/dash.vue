<template>
    <div>
        <site
            class="margin-bottom-md"
            v-for="site in sites"
            :site="site"
        >
        </site>
    </div>
</template>

<script>

    import yaml from 'js-yaml'
    import site from '../../components/site/site.vue'

    export default {
        components: { site },
        data: function() {
            return {
                sites: []
            }
        },
        created() {
            this.$http.get('./data/dash.yaml')
                .then(res => {
                    this.sites = yaml.safeLoad(res.text())
                })
        }
    }

</script>