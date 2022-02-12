import { reactive,readonly } from "vue"


const state = reactive({
    counter:0,
    colorCode:' '
})

const methods = {
    addOne(){
        state.counter++
    },
    deleteOne(){
        state.counter--
    },
    setColorCode(val){
        state.colorCode = val
    }

    
}

const getters = {
    counterSquared(){
        return Math.pow(state.counter, 2)
    }

}

export default{
    state: readonly(state),
    methods,
    getters
}

