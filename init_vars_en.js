var send_msg = "<p>Sending image...(The first time can take up to 1 minute, waking up the dragon...)</p>";
var received_msg = "";
var error_msg = "<p>There was an error =(). Please try again later or upload another image</p>";
var send_image_button_text = "Analyze Image ";

var clear_results_button_text = "Clear results";
var rotate_right_text = 'Rotate Image clockwise';
var rotate_left_text = 'Rotate Image anti-clockwise';

var rotate_right_desc = rotation_text(direction='right',color='black')+rotate_right_text;
var rotate_left_desc = rotation_text(direction='left',color='black')+rotate_left_text;

var rotate_right_button_html = rotation_text(direction='right',color='white')+rotate_right_text;
var rotate_left_button_html = rotation_text(direction='left',color='white')+rotate_left_text;

var send_image_button_html = gears_color(color='white')+' '+send_image_button_text;
var send_image_button_desc = gears_color(color='black')+' '+send_image_button_text;


var top_header_text = `Which scientists look similar to you?`;
var top_description_text = `
  Upload your photograph and see which scientists look more similar to you.
   Press the<strong> Choose File </strong> button in order to upload an image.
   Next, after your picture is displayed, press the <strong>`+send_image_button_desc+` </strong>.
   The first time it might take a while to warm up, up to 1 minute.
   <a href="https://bsaldivaremc2.github.io/facenet/index_es.html">(Mirar en Español)</a></br>
   Before sending the image for processing check if the faces of the picture are vertically alligned (º_º)</br>
   Use the button <strong>`+rotate_right_desc+` or `+rotate_left_desc+`</strong> until this happens.</br>
   </br>
   (We do not store any picture, in compliance with the Data protection laws.)
   </p>
   <br/>
`+html_contact;

var description_start = 'Looks like:</br>';
var description_distance_message_start = ' (Difference: ';
var description_distance_message_end = ') </br>';
var description_end = '</br>The lower the Difference the higher the similarity.</br>A value of 30 or lower is very similar';

var lang='en';
