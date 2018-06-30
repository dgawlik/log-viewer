const {tab} = require('./components/tab.js');
const {tabs} = require('./components/tabs.js');
const {buffer} = require('./components/buffer.js');
const {scrollbar} = require('./components/scrollbar.js');
const {settings} = require('./components/settings.js');
const {globalShortcut} = require('electron');

let mainApp = {
  el: '#content',

  data: {
    message: 'Hello Vue!',
    display: 'buffer'
  },

  components: {
    'tabs': tabs,
    'buffer': buffer,
    'scrollbar': scrollbar,
    'settings': settings
  },

  mounted(){
    this.tabs = this.$children[0];
    this.buffer = this.$children[1];
    this.scrollbar = this.$children[2];
  },

  methods: {
    delegateStopDrag(){
      if(this.scrollbar.doDrag){
        this.scrollbar.doDrag = false;
      }
    },

    delegateMouseMove(e){
      if(this.scrollbar.doDrag){
        this.scrollbar.onMouseMove(e);
      }
    },

    delegateChangePage(isUp){
      this.buffer.changePage(isUp);
    },

    changeWrapping(val){
      this.tabs.changeWrapping(val);
    },

    findKeyDown(){
      findToolbar.isShow = true;
    },

    closeFindKeyDown(){
      findToolbar.isShow = false;
      console.log('close');
    }
  }
};

module.exports = {
  'mainApp': mainApp
};
