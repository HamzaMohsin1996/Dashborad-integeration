$(document).ready(function() {
 
	$("#select-all").click(function() {
		   $(".modal-content-inner").toggleClass("main-content-inner-chechked"); 
	 });
	$(".checkmark").click(function() {
		   $(this).parent().toggleClass("checked"); 
	 });
	$(".step").click(function() {
          $(".step").removeClass("active");
           $(this).addClass("active"); 
     });
  $(".single-tab").click(function(){
        $(".single-tab").removeClass("active");
        $(this).addClass("active");
      });

});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});