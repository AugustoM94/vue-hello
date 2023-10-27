const { createApp } = Vue

createApp({
    data () {
        return {
            message: 'Hello World!',
            miaClasse: 'red',
            img:  '',
            
        }
    },
    methods: {
        cambiaMsg() {
            this.message = this.message === 'Hello World!' ? 'Hello Vue!' : 'Hello World!'
             this.miaClasse = this.miaClasse === 'red' ? 'green' : 'red'
             this.img =  this.img  ===  'img/logo-vue.gif' ? '' : 'img/logo-vue.gif'
        }
    }
  }).mount('#app');