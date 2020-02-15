<template>
    <div class="rating">
        <ul class="list">
            <li v-for="star in maxStars" :key="star" :class="{'active': star <= stars}" class="star">
                <icon @click="rate(star)" name="star"></icon>
            </li>
        </ul>
        <span v-if="hasCounter">{{ counter }}</span>
        <HelloWorld />
    </div>

</template>

<script>
    import 'vue-awesome/icons/star'
    import Icon from 'vue-awesome/components/Icon'
    import HelloWorld from "./HelloWorld";
    export default {
        components: { Icon, HelloWorld },
        props: {
            grade:{
                type: Number,
                required: true
            },
            maxStars:{
                type: Number,
                default: 5
            },
            hasCounter:{
                type: Boolean,
                default: true
            }
        },
        name: "Rating",
        data(){
            return{
                stars: this.grade,
            }
        },
        methods:{
          rate(star){
              this.stars = star;
          },
        },
        computed:{
            counter(){
                return `${this.stars} of ${this.maxStars}`
            }
        }
    }
</script>

<style scoped lang="scss">
    $active:  #f3d23e;
    $in-active: #a7a8a8;
    .rating {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: $in-active;

        .list {
            margin: 0 0 5px 0;
            padding: 0;
            list-style-type: none;
            &:hover .star {
                color:  $active;
            }
        }

        .star {
            display: inline-block;
            cursor: pointer;
            &:hover ~ &:not(.active) {
                color: inherit;
            }
        }

        .active {
            color:  $active;
        }
    }

</style>