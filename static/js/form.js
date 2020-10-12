$(function() {

  // Get the form.
  var form = $('#form-submit');

  // Get the messages div.
  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = {
              "name": $("#form-submit #name").val(),
              "email": $("#form-submit #email").val(),
              "phone": $("#form-submit #phone").val(),
              "age": $("#form-submit #age").val(),
              "company": $("#form-submit #company").val(),
              "designation": $("#form-submit #designation").val(),
              "firstTime": $("#form-submit #firstTime").val(),
              "referral": $("#form-submit #referral").val(),
              "workshop": $("#form-submit #workshop").val(),
              "date": $("#form-submit #date").val(),
              "time": $("#form-submit #time").val()
          };


    // Submit the form using AJAX.
    $.ajax({
      type: "POST",
      url: " https://ei1ujyrp95.execute-api.ap-south-1.amazonaws.com/01/event",
      dataType: "json",
      crossDomain:true,
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(formData),
    })
    .done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
     $('#contact-alert-success').removeClass('hidden');
              $('#contact-alert-error').addClass('hidden');
              //reset the form 
             document.getElementById("form-submit").reset();
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $("#contact-alert-error").removeClass("hidden");
                $("#contact-alert-success").addClass("hidden");
               document.getElementById("form-submit").reset();
              
    });

  });

});
