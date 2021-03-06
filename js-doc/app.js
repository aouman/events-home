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

        //Ajouter le nombre de salle

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


        //CREATION DE TACHE
        // A- C??ation de cat??gorie

        $("#addCat").click(function() {
          let value = $("#task_category_value").val();

          // If input is empty, exit
          if (value == "") {
            return false;
          }

          // Add item to list
          let newTaskCategory =  `<div class="card text-center mb-3 ms-3 task2_category" id="category">
                              <button type="button" class="btn-close bg-white shadow-sm fs-6 float-end delete_category position-absolute"></button>
                              <div class="card-header bg-color shadow-sm text-white fw-bold fs-5 text-start border-0 text-uppercase">
                                ${value}
                              </div>
                              <div class="card-body px-2" id="task_box">

                              </div>
                              <div class="card-footer border-0">
                                <button type="button" name="button" class="btn bg-color text-white fw-bold" data-bs-toggle="modal" data-bs-target="#taskModal">
                                  Ajouter une tache
                                </button>
                              </div>
                          </div>`;

          $("#task_category").append(newTaskCategory);

          $("#task_category").children().last().fadeIn(300);

          // Clear input once created new item
          $("#task_category_value").val("");
        });

        // 'click()' won't target newly created elements - must use 'on()'
        $(document.body).on('click', '.delete_category', function() {
          $(this).parent().fadeOut(300, function(){
            $(this).remove();
          });
        });

        // B- C??ation de Tache

        $("#addTask").click(function() {
          let value_user = $("#task_user_value").val();
          let value_name = $("#task_name_value").val();
          let value_date = $("#task_date_value").val();

          // If input is empty, exit
          if (value_user == ""){
            return false;
          } else if (value_name == "") {
            return false;
          }else if (value_date == "") {
            return false;
          }


          // Add item to list
          let newTask =`<div class="card shadow-sm border-white mb-3" id="task_item">
                            <div class="card-body">
                              <div class="">
                                <p>
                                  <span class="me-3">
                                    <i class="bi bi-person-circle"></i>
                                  </span>
                                ${value_user}
                                </p>
                              </div>
                              <div class="">
                                <p>${value_name}</p>
                              </div>
                              <div class="">
                                <p>${value_date}</p>
                              </div>
                            </div>
                          </div>`;

          $("#task_box").append(newTask);
          $("#task_box").children().last().fadeIn(300);

          // Clear input once created new item
          $("#task_user_value").val("");
          $("#task_name_value").val("");
          $("#task_date_value").val("");
        });




        // 'click()' won't target newly created elements - must use 'on()'
        /*$(document.body).on('click', '.delete_category', function() {
          $(this).parent().fadeOut(300, function(){
            $(this).remove();
          });
        });*/

/*
        //add category for inventory
        let cloneCount = 2;
         $("#addInventory").click(function(){
            $('#inventorys')
                .clone()
                .attr("id", "inventorys-"+ cloneCount++)
                .insertAfter($('[id^=inventorys]:last'));
         });

         //Add cat??gory stock
               let num = 0; // var num = 0;
                function insertTemplate(){
                  const parent = document.querySelector('#inventoryBox'); // var parent = $('#parent');
                  const template=`<p id="paragraph${num}">${num}</p>`; // var template = $('<p id="paragraph' + num +'"></p>').text(num);
                  num += 1;
                  parent.appendChild(template); // $(parent).append(template)
                }

                var stockCount = 0;
                var updatedStock = Number($(".opening.balance").html()) == "NaN" ? 0 : Number($(".opening.balance").html());

                $("tr.product").each(function(index) {
                  stockCount = 0;

                  var entry = Number($("td.entry", $(this)).html());
                  var exit = Number($("td.exit", $(this)).html());

                  entry = entry == "NaN" ? 0 : entry;
                  exit = exit == "NaN" ? 0 : exit;

                  var stock = updatedStock + entry - exit;
                  updatedStock = stock;

                  stockCount += stock;
                  $("td.stock", $(this)).html(stock);
                });



                 $("#addInventory").click(function() {
                   let value_inventory_category = $("#inventory_total_category").val();

                   // If input is empty, exit
                   if (value_inventory_category == "") {
                     return false;
                   }

                   // Add item to list
                   let newinventoryCategory =  `<div class="card mb-3" id="inventorys">
                     <div class="d-flex align-items-center justify-content-between p-2 bg-color text-white fw-bold fs-5">
                       <p class="mb-0 d-flex align-items-center w-75" >
                         <span class="me-3 btn shadow border-white text-white"><i class="bi bi-pencil-square"></i></span>
                         ${value_inventory_category}
                       </p>
                       <p class="mb-0 btn border rounded-circle shadow bd-color text-white">x</p>
                     </div>
                     <div class="card-body">
                       <table class="table table-striped">
                         <thead>
                           <tr>
                             <th scope="col">Date</th>
                             <th scope="col">Nom</th>
                             <th scope="col">Entr??</th>
                             <th scope="col">Sortie</th>
                             <th scope="col">Total disponible</th>
                             <th scope="col">Action</th>
                           </tr>
                         </thead>
                         <tbody class="inventory-box">

                         </tbody>
                       </table>
                     </div>
                   </div>`;

                   $("#inventoryBox").append(newinventoryCategory);


                   // Clear input once created new item
                 });

                 // 'click()' won't target newly created elements - must use 'on()'
                /* $(document.body).on('click', '.delete_category', function() {
                   $(this).parent().fadeOut(300, function(){
                     $(this).remove();
                   });
                 });


         //add inventory item
         $("#addUnit").click(function() {
           let value_inventory_date = $("#inventory_date_value").val();
           let value_inventory_name = $("#inventory_name_value").val();
           let value_inventory_entry = $("#inventory_entry_value").val();
           let value_inventory_exit = $("#inventory_exit_value").val();
           let value_inventory_total = $("#inventory_total_value").val();


           // If input is empty, exit
           if (value_inventory_date == ""){
             return false;
           } else if (value_inventory_name == "") {
             return false;
           }else if (value_inventory_entry == "") {
             return false;
           }else if (value_inventory_exit == "") {
             return false;
           }else if (value_inventory_total == "") {
             return false;
           }


           // Add item to list
           let newInventory =` <tr>
                                 <td>${value_inventory_date}</td>
                                 <td>${value_inventory_name}</td>
                                 <td>${value_inventory_entry}</td>
                                 <td>${value_inventory_exit}</td>
                                 <td class="stock"></td>
                                 <td>
                                 <span class="btn btn-success"><i class="bi bi-pencil-square"></i></span>
                                 <span class="btn btn-danger"><i class="bi bi-trash"></i></span>
                                 </td>
                               </tr>`;

           $(".inventory-box").append(newInventory);
           $(".inventory-box").children().last().fadeIn(300);

           // Clear input once created new item
           $("#inventory_date_value").val("");
           $("#inventory_name_value").val("");
           $("#inventory_entry_value").val("");
           $("#inventory_exit_value").val("");
           $("#inventory_total_value").val("");
         });
*/

         // 'click()' won't target newly created elements - must use 'on()'
         /*$(document.body).on('click', '.delete_category', function() {
           $(this).parent().fadeOut(300, function(){
             $(this).remove();
           });
         });*/
         //<p id="paragraph${num}">${num}</p>
/*
          //Clicque pour modifier
          let $count = 0;

          let $eb = $('.edit-button');
          let $ei = $('.editable-input');
          let $ec = $('.editable-cell');

          //Editable input fields
          $eb.on('click', function() {
            $count++
            if ($count < 2) {
              $ei.prop('readonly', false).focus();
              $ei.prop('placeholder','');
              $ei.val('');
              $(this).addClass('hide');
              $ec.addClass('editing');
            } else {
              $ei.prop('readonly', false).focus();
              $eb.addClass('hide');
              $ec.addClass('editing');
            }
          });


          $ei.on('blur', function() {
            $eb.removeClass('hide');
            $ei.prop('readonly', true);
            $ec.removeClass('editing');
          });
*/
          // add cat??gory and
          //sub cat??gory for Stocks

          // add category start
          $('.add-category').on('click', function(){
            var $e = $(this);
            var $categoryBody = $('.category-body');
            var $categoryElement = $('.category-element .category-add-element');

            $('<div class="category-list mb-2"></div>').insertBefore($e);
            $categoryElement.clone().appendTo($categoryBody.find('.category-list:last'));
          });

          $(document).on('click', '.cancel-add-category', function(){
            var $e = $(this);
            $e.closest('.category-add-element').remove();
          });

          $(document).on('click', '.save-add-category', function(){
            var $e = $(this);
            var $closeAdd = $e.siblings('.cancel-add-category');
            var $val = $e.closest('.category-add-element').find('input').val();
            var $categoryList = $e.closest('.category-list');
            var $categoryElement = $('.category-element .category-result-element');
            $categoryElement.clone().appendTo($categoryList);
            $e.closest('.category-list').find('.category-list-title h3').text($val)
            $closeAdd.trigger('click');
          });
          // add category end

          // edit category start
          $(document).on('click', '.edit-category', function(){
            var $e = $(this);
            var $categoryElement = $('.category-element .category-edit-element');
            var $categoryList = $e.closest('.category-list');
            var $categoryName = $e.siblings('h3').text();

            $categoryElement.clone().appendTo($categoryList);
            $categoryList.find('.category-edit-element input').val($categoryName).focus();
            $e.closest('.category-result-element').hide();

          });

          $(document).on('click', '.save-edit-category', function(){
            var $e = $(this);
            var $closeEdit = $e.siblings('.cancel-edit-category');
            var $val = $e.closest('.category-edit-element').find('input').val();
            var $categoryList = $e.closest('.category-list');
            var $categoryElement = $('.category-element .category-result-element');
            $e.closest('.category-list').find('.category-list-title h3').text($val)
            $closeEdit.trigger('click');
          });

          $(document).on('click', '.cancel-edit-category', function(){
            var $e = $(this);
            var $categoryList = $e.closest('.category-list');
            $e.closest('.category-edit-element').remove();
            $categoryList.find('.category-result-element').show();
          });
          // edit category end

          // delete category start
          $(document).on('click', '.delete-category', function(){
            var $e = $(this);
            var $categoryList = $e.closest('.category-list');
            var $closeEdit = $categoryList.find('.cancel-edit-category');
            var $subLength = $categoryList.find('.category-list-body .subcategory-list').length
            if($subLength != 0){
             alert('gak boleh dihapus')
            } else{
              $closeEdit.trigger('click');
              $categoryList.slideUp(function(){
                $(this).remove();
              });
            }
          });
          // delete category end





          // add sub category start
          $(document).on('click', '.add-subcategory', function(){
            var $e = $(this);
            var $categoryListBody = $e.closest('.category-list').find('.category-list-body');
            var $categoryElement = $('.subcategory-element .subcategory-add-element');

            $('<div class="subcategory-list py-2 border-bottom"></div>').insertBefore($e);
            $categoryElement.clone().appendTo($categoryListBody.find('.subcategory-list:last'));
          });

          $(document).on('click', '.cancel-add-subcategory', function(){
            var $e = $(this);
            $e.closest('.subcategory-add-element').remove();
          });

          $(document).on('click', '.save-add-subcategory', function(){
            //let value_user = $("#task_user_value").val();
            //let value_name = $("#task_name_value").val();
            //let value_date = $("#task_date_value").val();
            var $e = $(this);
            var $closeAdd = $e.siblings('.cancel-add-subcategory');
            var $val = $e.closest('.subcategory-add-element').find('input').val();
            var $subcategoryList = $e.closest('.subcategory-list');
            var $subcategoryElement = $('.subcategory-element .subcategory-result-element');
            $subcategoryElement.clone().appendTo($subcategoryList);
            $e.closest('.subcategory-list').find('.subcategory-list-title em').text($val)
            $closeAdd.trigger('click');
          });
          // add sub category end

          // edit sub category start
          $(document).on('click', '.edit-subcategory', function(){
            var $e = $(this);
            var $subcategoryElement = $('.subcategory-element .subcategory-edit-element');
            var $subcategoryList = $e.closest('.subcategory-list');
            var $subcategoryName = $e.siblings('em').text();

            $subcategoryElement.clone().appendTo($subcategoryList);
            $subcategoryList.find('.subcategory-edit-element input').val($subcategoryName).focus();
            $e.closest('.subcategory-result-element').hide();

          });

          $(document).on('click', '.save-edit-subcategory', function(){
            var $e = $(this);
            var $closeEdit = $e.siblings('.cancel-edit-subcategory');
            var $val = $e.closest('.subcategory-edit-element').find('input').val();
            var $subcategoryList = $e.closest('.subcategory-list');
            var $subcategoryElement = $('.subcategory-element .subcategory-result-element');
            $e.closest('.subcategory-list').find('.subcategory-list-title em').text($val)
            $closeEdit.trigger('click');
          });

          $(document).on('click', '.cancel-edit-subcategory', function(){
            var $e = $(this);
            var $subcategoryList = $e.closest('.subcategory-list');
            $e.closest('.subcategory-edit-element').remove();
            $subcategoryList.find('.subcategory-result-element').show();
          });
          // edit sub category end

          // delete sub category start
          $(document).on('click', '.delete-subcategory', function(){
            var $e = $(this);
            var $subcategoryList = $e.closest('.subcategory-list');
            var $closeEdit = $subcategoryList.find('.cancel-edit-subcategory');

            $closeEdit.trigger('click');
            $subcategoryList.slideUp(function(){
              $(this).remove();
            })
          });
          // delete sub category end


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
