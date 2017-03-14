$('.search').keypress(function(e) {
   //When enter key is selected plug input into Wiki url
   if(e.which == 13) {
      $('.output').css({
        'width': '80%',
        'height': '1250px',
        'margin': '180px auto'
      })
      $('.random').css('margin-top', '25px');
      $('.search').css('margin-top', '80px');
      $('.text').html("")
      
     
      var input = $('.search').val();
          var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json&callback=?";
      //json file
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
          console.log(data[1][0]);
          console.log(data[2][0]);
          console.log(data[3][0]);
          
          $('.output').html('');
          for(i=0; i<data[1].length; i++) {
	          
            $('.output').append("<li><a href= "+data[3][i]+"><h3>"+data[1][i]+"</a></h3><p>"+data[2][i]+"</p></li>");
            
            $('.output a').css({
              "color": "black",
              "text-decoration": "none"
            });
            $('li').css({
              "padding": "15px 30px 5px 30px",
              "background-color": "#E7E7E8",
              "margin-bottom": "10px",
              "list-style": "none"
              
            });
            
           }
         },
        error: function(errorMessage){
          alert("error")
         }
        });
     }  
 });

