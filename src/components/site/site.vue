<template>

    <div class="site">

            <div class="site__top" @click="open = ! open">
                
                <icon
                    class="site__top__icon"
                    :icon="statusMap[site.status].icon"
                    :color="statusMap[site.status].color"
                    size="md"
                ></icon>

                <div class="site__top__title">{{ site.name }}</div>

                <div class="site__links" v-for="links in site.topLinks">
                    <div
                        v-for="link in links"
                        class="site__link"
                        :class="linkClass(link)"
                    >
                        {{ link.name }}
                    </div>
                </div>

            </div>

            <div v-for="links in site.bottomLinks" class="site__bottom" v-if="open">
                <div class="site__group" v-for="group in links">
                    <div v-for="link in group" class="site__link" :class="linkClass(link)">{{ link.name }}</div>
                </div>
            </div>


        </div>

    </div>

</template>

<script>
    
    import icon from '../icon/icon.vue'
    
    export default {

        components: { icon },

        props: {
            site: {default: () => {}}
        },
        
        methods: {
            linkClass: function(link) {
                if (link.prio == 'small') { return 'site__link__small'}
                if (link.prio == 'big') { return 'site__link__big'}
                if (link.prio == 'title') { return 'site__link__title'}
                return ''
            }
        },
        data: () => ({
            open: false,
            statusMap: {
                ok: {icon: 'world', color: 'gray'},
                warning: {icon: 'warning', color: 'orange'},
                error: {icon: 'warning', color: 'red'}
            }
        })

    }

</script>