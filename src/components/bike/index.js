import Bike from './Bike.vue'

const bike = {
    install:function (Vue){
        Vue.component('bikeFla',Bike);
    }
}

export default bike;