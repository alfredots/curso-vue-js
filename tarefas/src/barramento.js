import Vue from 'vue'

export default new Vue({
    methods: {
        addTask(usuario) {
            this.$emit('addTask', usuario)
        },
        whenAddTask(callback) {
            this.$on('addTask', callback)
        },
        deleteTask(usuario) {
            this.$emit('deleteTask', usuario)
        },
        whenDeleteTask(callback) {
            this.$on('deleteTask', callback)
        },
        addFinishedTask(usuario) {
            this.$emit('addFinishedTask', usuario)
        },
        whenAddFinishedTask(callback) {
            this.$on('addFinishedTask', callback)
        },
        deleteFinishedTask(usuario) {
            this.$emit('deleteFinishedTask', usuario)
        },
        whenDeleteFinishedTask(callback) {
            this.$on('deleteFinishedTask', callback)
        },
    }
})