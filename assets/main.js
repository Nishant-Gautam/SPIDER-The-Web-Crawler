
// Back to top button

 // ===========> Amoeba

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 100) {
  //     $('.back-to-top').fadeIn('slow');
  //   } else {
  //     $('.back-to-top').fadeOut('slow');
  //   }
  // });

  // $('.back-to-top').click(function() {
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 1500, 'easeInOutExpo');
  //   return false;
  // });

  // =====================>

//Get the button:
mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ============> NeoVersion

 // $(window).scroll(function() {
 //    if ($(this).scrollTop() > 100) {
 //      $('#back-to-top').fadeIn('slow');
 //    } else {
 //      $('#back-to-top').fadeOut('slow');
 //    }
 //  });

 //  $('#back-to-top').click(function() {
 //    $('html, body').animate({
 //      scrollTop: 0
 //    }, 1500, 'easeInOutExpo');
 //    return false;
 //  });