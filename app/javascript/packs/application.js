// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "bootstrap"
 
require("trix")
require("@rails/actiontext")
require("packs/jquery.raty")

global.$ = jQuery;

function hideFlash() {
  setInterval(function() {document.querySelector('#flash').style.display = "none";}, 3000);
}

hideFlash();

const scroll_bottom = function () {
  if ($('.message-container').length > 0) {
      $('.message-container').scrollTop($('.message-container')[0].scrollHeight)
  }
}
$(document).on('turbolinks:load', function() {
  scroll_bottom();
})


import "controllers"
