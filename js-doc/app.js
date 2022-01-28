$(document).ready(function(){
//add ligne in facture
    /*  const html = '<ul class="list-group list-group-horizontal-sm head-inv225 inv-lign">'+
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
        '<li class="list-group-item bg-light border border-bottom-0 border-top-0 ht d-flex align-items-center justify-content-end fs-6 inv_d">'+
          '<input name="inv_total[]" class="inv_total form-control" type="number" value="0" aria-label="0" readonly>'+
          '<span class="ms-2 cfa">Fcfa</span>'+
          '<span class="ms-2 cedi">Cedi ₵</span>'+
          '<span class="ms-2 naira">Naira ₦</span>'+
        '</li>'+

      '</ul>';

    	$("#add-lign").click(function(){
    		$('.lign ').append(html);
    });

    $(document).on('click','.del',function(){
        $(this).parents('ul').remove();
    });
*/
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




        // invoice calcule

/*

        $('#tab_logic #inv_body').on('keyup change',function(){
            calc();
          });
          $('#inv_tax').on('keyup change',function(){
            calc_total();
          });

          function calc()
            {
            	$('#tab_logic #inv_body ul').each(function(i, element) {
            		var html = $(this).html();
            		if(html!='')
            		{
            			var qty = $(this).find('.inv_qty').val();
            			var price = $(this).find('.inv_price').val();
            			$(this).find('.inv_total').val(qty*price);

            			calc_total();
            		  }
                });
            }

            function calc_total()
            {
            	total=0;
            	$('.inv_total').each(function() {
                    total += parseInt($(this).val());
                });
            	$('#inv_sub_total').val(total.toFixed(1));
            	tax_sum=total/100*$('#inv_tax').val();
            	$('#inv_tax_amount').val(tax_sum.toFixed(1));
            	$('#inv_total_amount').val((tax_sum+total).toFixed(1));
            }*/
});
