$(document).ready(function(){
//add ligne in facture
      const html = '<ul class="list-group list-group-horizontal-sm head-inv225 inv-lign">'+
        '<li class="list-group-item dropdown bg-transparent px-2">'+
          '<span class="btn px-0 del px-1" type="button">'+
            '<i class="bi bi-trash btn btn-danger text-white p-1 i-size py-0"></i>'+
          '</span>'+
        '</li>'+
        '<li class="list-group-item bg-transparent border border-bottom-0 border-top-0 des">'+
          '<textarea class="form-control form-control-sm border border-bottom border-end-0 border-start-0 border-top-0 rounded-0" placeholder="Désignation" id="floatingTextarea"></textarea>'+
        '</li>'+
        '<li class="list-group-item bg-transparent border border-bottom-0 border-top-0 px-2 qt">'+
          '<input type="number" class="form-control p-1" id="examplenumber1" aria-describedby="emailNumber">'+
        '</li>'+
        '<li class="list-group-item bg-transparent border border-bottom-0 border-top-0 pu">'+
          '<input type="number" class="form-control p-1" id="examplenumber1" aria-describedby="emailNumber">'+
        '</li>'+
        '<li class="list-group-item bg-light border border-bottom-0 border-top-0 ht d-flex align-items-center justify-content-end fs-6">'+
          '0 <span class="ms-2">Fcfa</span>'+
        '</li>'+

      '</ul>';

    	$("#add-lign").click(function(){
    		$('.lign ').append(html);
    });

    $(document).on('click','.del',function(){
        $(this).parents('ul').remove();
    });

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
            $('#image-preview').attr('src', e.target.result);
            $('#image-preview').hide();
            $('#image-preview').fadeIn(650);
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



});
