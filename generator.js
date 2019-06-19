
function generateBooks(){

var search = $("[name='book']")[0].value;
var title='';
var searchUrl = "https://www.googleapis.com/books/v1/volumes/?q="+search;
$.ajax({url : searchUrl,
    type:'GET',
    dataType: 'jsonp',
    success:function(result){
    console.log(result);
    result.items.forEach(element => {
    title =  $('<div class="position-relative col-6 ">'+element.volumeInfo.publisher+'</div>');
    title.appendTo('#parent');
    });
    }
    });
}

