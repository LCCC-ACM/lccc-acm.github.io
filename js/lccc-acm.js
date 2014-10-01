function validateName(inputId, groupId) {
    var input = $("#" + inputId).val();
    if (input.length == 0) {
        $("#" + groupId).addClass('has-error').removeClass('has-success');
    } else {
        $("#" + groupId).addClass('has-success').removeClass('has-error');
    }
    
    updateSubmitButton();
}

function updateSubmitButton() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message= $("#message").val();
    
    if (name == 0 || email == 0 || message == 0) {
        $("#contactsubmit").prop('disabled', true);
    } else {
        $("#contactsubmit").prop('disabled', false);
    }
}

jQuery(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-40
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});