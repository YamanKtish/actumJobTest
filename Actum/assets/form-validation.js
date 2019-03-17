(function () {
  'use strict'

  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        $(".complete").hide();
        var isValid = form.checkValidity();
          event.preventDefault();
            if(isValid){
                $.ajax({
                    type: "POST",
                    url: "https://actum-form-ulcrunoxba.now.sh/api/submit",
                    data: $( "form" ).serialize(), // serializes the form's elements.
                    success: function(data)
                    {
                        if(data.success === true){
                          $(".wrong-response").hide();
                          $(".alert-success").show();
                        }else{
                          $(".alert-success").hide();
                          $(".wrong-response").show();
                        }
                    }
                });
            }
        if (form.checkValidity() === false) {
          $(".complete").show();
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
}())
