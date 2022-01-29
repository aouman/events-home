$(document).ready(function(){
    //colorPicker

    const colorPicker = document.querySelectorAll("input.input-color-picker");

    const colorUpdate = (cssVars) => {
      const root = document.querySelector(":root");
      const keys = Object.keys(cssVars);
      keys.forEach((key) => {
        root.style.setProperty(key, cssVars[key]);
      });
    };

    colorPicker.forEach((item) => {
      item.addEventListener("input", (e) => {
        const cssPropName = `--primary-${e.target.getAttribute("data-id")}`;
        console.log(cssPropName);
        colorUpdate({
          [cssPropName]: e.target.value
        });
      });

    });

    //add logo

    function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
            $('.image-preview').attr('src', e.target.result);
            $('.image-preview').hide();
            $('.image-preview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }

      $("#file-input").change(function() {
        readURL(this);
      });

      $('#inputGroupFile02').on('change',function(){
          //get the file name
          var fileName = $(this).val();
          //replace the "Choose a file" label
          $(this).next('.custom-file-label').html(fileName);
      })

      //change devise

      $('#select_box').change(function () {
        var select=$(this).find(':selected').val();
         $(".inv_d span").hide();
         $('.' + select).show();

	    }).change();


        // Change payement block
        $("#mobile").on('click', function(){
          $("#del-2").removeClass('d-del');
          $("#del-1").addClass('d-del');
        });

        // Change payement block
        $("#bank").on('click', function(){
          $("#del-1").removeClass('d-del');
          $("#del-2").addClass('d-del');
        });

});
