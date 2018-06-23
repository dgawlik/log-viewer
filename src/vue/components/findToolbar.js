
let findToolbar =  {
  data: function () {
    return {
    }
  },

  methods: {

  },

  template: `
<div id="findToolbar">
  <input type="text" id="findToolbarInput">
  <i class="fas fa-angle-left"></i>
  <i class="fas fa-angle-right"></i>
  <button id="findToolbarSearch">
    <i class="fas fa-search"></i>
    Search
  </button>
  <i class="fas fa-times"></i>
</div>
`
};

module.exports = {
  'findToolbar': findToolbar
}