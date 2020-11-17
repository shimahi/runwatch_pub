document.addEventListener('DOMContentLoaded', function () {
  var userAgent = window.navigator.userAgent.toLowerCase()
  var target = document.querySelector('body')
  if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
    console.log('ieです')
    var target = document.querySelector('body')
    target.innerHTML =
      '<div style="color: white; font-size: 18px;text-align: center; margin-top: 45vh; width: 100%;">RunWatch は、Internet Explorer ではご利用いただけません。<br/> <a href="https://www.google.com/aclk?sa=l&ai=DChcSEwj0he2L_OrsAhUYrJYKHfj_ABgYABAAGgJ0bA&sig=AOD64_34OclwEultoAHQpIiK99G-6PxNvA&q&adurl&ved=2ahUKEwjV4OWL_OrsAhUCxosBHQGwCw0Q0Qx6BAgrEAE">Google Chrome</a>を使用してください。</div>'
  }
})
