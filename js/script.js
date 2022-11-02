const { createApp } = Vue;

createApp({

  data(){
    return {
      message: "Hello!",
      styleMsg: "color-text",
      path: "https://picsum.photos/id/",
      imgId: "1041",
      isShown : true
    }
  },

  methods:{
    changeStyle(style){
      this.styleMsg = style;
    },

    changeImg(newId){
      this.imgId = newId;
    },

    toggleImg(){
      this.isShown = !this.isShown;
    }
    
  }

}).mount('#app')