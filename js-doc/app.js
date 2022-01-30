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

        //active menu
        jQuery(function($) {
            var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
              $(".active-btn > li > a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("mn-225-active");
              // $(this).parent("li").addClass("active");
            })
        });

        //Quill EDITOR

        $('.summernote').summernote({
          placeholder: 'Donnez les informations aux utilisateurs sur vous',
          tabsize: 2,
          height: 120,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear', 'fontsize']],
            ['color', ['forecolor', 'backcolor']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video', 'hr']],
            ['view', ['help']],
          ]
        });

});

  (function() {
    var copyButton = document.querySelector('.copy button');
    var copyInput = document.querySelector('.copy input');
    copyButton.addEventListener('click', function(e) {
      e.preventDefault();
      var text = copyInput.select();
      document.execCommand('copy');
    });

    copyInput.addEventListener('click', function() {
      this.select();
    });
  })();
