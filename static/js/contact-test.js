$(function() {

  // Get the form.
  var form = $('#contact-form');

  // Get the messages div.
  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = {
                "name": $("#contact-form #name").val(),
              "email": $("#contact-form #email").val(),
              "phone": $("#contact-form #phone").val(),
              "message": $("#contact-form #message").val(),
              "mailto":"ranjith.raj@goideotic.com"
          };


    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: "https://qewat1rlae.execute-api.ap-south-1.amazonaws.com/01/contact-us",
      dataType: "json",
      crossDomain:true,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(formData),
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
    alert('success');
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
       alert('fail');
              
    });

  });

});
