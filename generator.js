
function generateBooks(){

var search = $("a[name='book']");
var title='';
$.ajax({url : "https://www.googleapis.com/books/v1/volumes/?q="+search,
    type:'GET',
    dataType: 'jsonp',
    success:function(result){
    result.items.forEach(element => {
    title =  $('<div>'+element.id+'</div>');
    title.appendTo('#parent');
    });
    }
    });
}
