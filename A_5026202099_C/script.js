$(function() {
    
    $("#judul").focusout(function(){
        check_judul();
    });

    function check_judul() {
        var judul_length = $("#judul").val().length;
        if (judul_length < 8) {
            $("#judulSalah").html("At least more than 10 character");
            $("#judulSalah").show();
            $("#judul").css("border-bottom", "2px solid #F90A0A");
        } else {
            $("#judulSalah").hide();
            $("#judul").css("border-bottom", "2px solid #303030");
        }
    }

    jQuery('#reset').click(function(){
        $(':input','#form')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
    });

})