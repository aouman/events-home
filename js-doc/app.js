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

        //add nombre de salle

        //onchange of rooms-count
       $('#search_rooms_select').change(function() {
         var roomsSelected = $('#search_rooms_select option:selected').val();
         var roomsDisplayed = $('[id^="room-"]:visible').length;
         var roomsRendered = $('[id^="room-"]').length;
         const content_rooms ='';

         //if room count is greater than number displayed - add or show accordingly
         if (roomsSelected > roomsDisplayed) {
           for (var i = 1; i <= roomsSelected; i++) {
             var r = $('#room-' + i);
             if (r.length == 0) {
               var clone = $('#room-1').clone(); //clone
               clone.children(':first').append("");
               //change ids appropriately
               setNewID(clone, i);
               clone.children('div').children('select').each(function() {
                 setNewID($(this), i);
               });
               $(clone).insertAfter($('#room-' + roomsRendered));
             } else {
               //if the room exists and is hidden
               $(r).show();
             }
           }
         } else {
           //else if less than room count selected - hide
           for (var i = ++roomsSelected; i <= roomsRendered; i++) {
             $('#room-' + i).hide();
           }
         }
       });

       function setNewID(elem, i) {
         oldID = elem.attr('id');
         newId = oldID.substring(0, oldID.indexOf('-')) + "-" + i;
         elem.attr('id', newId);
       }


       //add service

          $('#services').on("change", function () {
              if ($(this).val()== "Yes") {
                  $('#vues_services').removeClass('vue_service');
              }
               else {
                  $('#vues_services').addClass('vue_service');
              }
          });


          //upload multiple image

          jQuery(document).ready(function () {
              ImgUpload();
            });

            function ImgUpload() {
              var imgWrap = "";
              var imgArray = [];

              $('.upload__inputfile').each(function () {
                $(this).on('change', function (e) {
                  imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
                  var maxLength = $(this).attr('data-max_length');

                  var files = e.target.files;
                  var filesArr = Array.prototype.slice.call(files);
                  var iterator = 0;
                  filesArr.forEach(function (f, index) {

                    if (!f.type.match('image.*')) {
                      return;
                    }

                    if (imgArray.length > maxLength) {
                      return false
                    } else {
                      var len = 0;
                      for (var i = 0; i < imgArray.length; i++) {
                        if (imgArray[i] !== undefined) {
                          len++;
                        }
                      }
                      if (len > maxLength) {
                        return false;
                      } else {
                        imgArray.push(f);

                        var reader = new FileReader();
                        reader.onload = function (e) {
                          var html = "<div class='img-thumbnail shadow p-3 mb-4 bd-color me-3 upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close bg-color shadow'></div></div></div>";
                          imgWrap.append(html);
                          iterator++;
                        }
                        reader.readAsDataURL(f);
                      }
                    }
                  });
                });
              });

              $('body').on('click', ".upload__img-close", function (e) {
                var file = $(this).parent().data("file");
                for (var i = 0; i < imgArray.length; i++) {
                  if (imgArray[i].name === file) {
                    imgArray.splice(i, 1);
                    break;
                  }
                }
                $(this).parent().parent().remove();
              });
            }


          //search clients

          $("#search-box").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                var filter = $('#search-filter').val().toLowerCase();
                if(filter == "listitem") {
                  $(".listitem").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                } else {
                  $(".td-"+filter).filter(function() {
                    $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                }
              });
              $('#search-filter').on("change",function(){
                var value = $("#search-box").val().toLowerCase();
                var filter = $(this).val().toLowerCase();
                if(filter == "listitem") {
                  $(".listitem").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                } else {
                  $(".td-"+filter).filter(function() {
                    $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                }
              });
               $(".tbl-btn").click(function(e) {
                 e.preventDefault();
                 $(this).parent().parent().find('td:not(:first-child)').toggleClass('active');
                 $(this).toggleClass('rotate');
               });


        //Création de tache

        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            });

           $("input[name=ListItem]").keyup(function(event){
              if(event.keyCode == 13){
                $("#button").click();
              }
          });

          $(document).on('dblclick','li', function(){
            $(this).toggleClass('strike').fadeOut('slow');
          });

          $('input').focus(function() {
            $(this).val('');
          });

          $('ol').sortable(); 

    });

// copy url btn
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
