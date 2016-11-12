<template>

    <div class="styleguide">


        <div class="styleguide__title">Icons</div>

        <input class="styleguide__range" v-model="sizeIndex" type="range" min="0" :max="sizeKeys.length - 1">

        <div v-for="icon in icons" class="styleguide__row">
            <icon class="styleguide__icon" :icon="icon" :size="sizeKeys[sizeIndex]"></icon>
            <pre class="styleguide__code">
                &lt;icon icon="{{ icon }}" size="{{ sizeKeys[sizeIndex] }}"&gt;&lt;/icon&gt;
            </pre>
        </div>

    </div>

</template>

<script>

    import _ from 'lodash'
    
    import icon from '../../components/icon/icon.vue'

    import styles from '../../styles/variables'


    export default {
        
        components: { icon },

        data: function() {
            return {
                icons: [],
                sizeIndex: 1,
                sizeKeys: _.keys(styles.iconSizes),
            }
        },

        mounted: function() {
            this.$http.get('./svg/main.svg')
            .then(res => {

                var reader = new FileReader();
                var parser = new DOMParser();

                reader.readAsText(res.body)
                
                reader.onload = () => {
                    var doc = parser.parseFromString(reader.result, 'image/svg+xml')
                    var symbols = doc.querySelectorAll('symbol')
                    for (var i = 0; i < symbols.length; ++i) {
                        this.icons.push(symbols[i].id)
                    }
                }

            })
        }
    }

</script>