
function generateBooks(){

var search = $("[name='book']");
var title='';
var searchUrl = "https://www.googleapis.com/books/v1/volumes/?q="+search
$.ajax({url : searchUrl,
    type:'GET',
    dataType: 'jsonp',
    success:function(result){
    console.log(result);
    result.items.forEach(element => {
    title =  $('<div>'+element.id+'</div>');
    title.appendTo('#parent');
    });
    }
    });
}

