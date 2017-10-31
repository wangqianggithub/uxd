<template>
    <div id="app">
        <bgFlash></bgFlash>
        <Navs></Navs>
        <div class="content"><router-view></router-view></div>
        <Bottoms></Bottoms>
    </div>
</template>

<script>
    import Nav from './components/Nav.vue'
    import Btm from './components/Bottom.vue'
    export default {
        name: 'app',
        data () {
            return {
                msg: ''
            }
        },
        components:{
            Navs:Nav,
            Bottoms:Btm
        }
    }
</script>

<style>
    #app{position: absolute;top:0px;left:0px;right:0px;bottom:0px;overflow: hidden;}
    .content{position: absolute;top:30px;left:120px;bottom:40px;right:20px;border:2px solid #fff;}
</style>
