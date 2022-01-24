$(document).ready(function(){

      const html = '<tr>'+
         '<td>'+
           '<span class="del">'+
             '<i class="bi bi-trash btn btn-danger text-white p-1 i-size py-0"></i>'+
           '</span>'+
         '</td>'+
         '<td>'+
           '<textarea class="form-control form-control-sm border border-bottom border-end-0 border-start-0 border-top-0 rounded-0" placeholder="Désignation" id="floatingTextarea"></textarea>'+
         '</td>'+
         '<td>'+
         '<input type="number" class="form-control p-1" id="examplenumber1" aria-describedby="emailNumber"></td>'+
         '<td>'+
         '<input type="number" class="form-control p-1" id="examplenumber1" aria-describedby="emailNumber"></td>'+
         '<td class="table-active text-end">@mdo</td>'+
       '</tr>';

    	$("#add-lign").click(function(){
    		$('.lign ').prepend(html);
    });

    $(document).on('click','.del',function(){
        $(this).parents('tr').remove();
    });


});
