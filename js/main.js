$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// formSpree.io ajax 


$('#contact-submit').click(function(event) {

  

  $.ajax({
    url: "http://www.formspree.io/priyesh114@hotmail.co.uk", 
    method: "POST",
    data: $( "form" ).serializeArray(),
    dataType: "json",
})
.done(function() {
  
  swal("Thank You!", "We will get back to you as soon as possible.", "success");
})
.fail(function() {
  swal("Error!", "Something went wrong! Please try again...", "error")
  
})
.always(function() {
  console.log("complete");
});
  

});


$('.BookThis').click(function(){
  var car = $(this).parents('li.box').data('car');
 

  $('html, body').animate({
        scrollTop: $('#contactUs').offset().top
    });

   $('#contactUs').find('select').val(car);

})