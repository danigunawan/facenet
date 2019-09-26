$( function() {
 $( "#send_img_btn" ).on('click touch',function() {

  console.log(send_msg);
  //var image_l = image_dic['image'].length;
  $('#message').html(send_msg);
  var input = json_data;
  //console.log(input);
  //validate if image exist
  $.ajax({
    type: "POST",
    url:server,
    data: input,//JSON.stringify(input),
    dataType: 'json'
    }).done(function(data){
      //var output = JSON.stringify(data);
      output = data;
      console.log(output);
      $('#message').html(received_msg);
      var faces = output['result']['faces'];
      use_faces(faces);
      }
    }).fail(function(){
      $('#message').html(error_msg);
    });

 });

   $( "#clear_results_btn" ).on('click touch',function() {
     $("#right").html("");

   });//End of clear_results_btn
   //Start rotate
   $( "#rotate_right" ).on('click touch',function() {
     rotate(direction="right");
   });
   $( "#rotate_left" ).on('click touch',function() {
     rotate(direction="left");
   });
  //End rotate
});//End of loop functions
