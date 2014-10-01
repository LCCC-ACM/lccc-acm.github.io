$(function(){
  
  $('#sendit').click(function(){
    var fromName = $("#fromName").val();
    var fromEmail = $("#fromEmail").val();
    var message = '<p>' + $("#emailMessage").val() + '</p>';
    var emailHeader = '<img src=\"http://lccc-acm.github.io/images/lccc-acm.png\"><br><h3>New Message From the LCCC-ACM Website</h3><br>';
    var emailFromInformation = '<p><b>From: </b>' + fromName + " (" + fromEmail + ")</p><p><b>Message: </b></p>";
    var emailFooter = '<br><br><p>&copy;2014 LCCC-ACM</p>';
    var htmlFormattedEmail = emailHeader + emailFromInformation + message + emailFooter;
      
    var xhr = $.ajax({
      type: 'POST',
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      dataType: 'json',
      data: {
        key: '1WL501bhJGjJr1cw2QJxpg',
        message: {
          html: htmlFormattedEmail,
          subject: "New Message from the LCCC-ACM Website",
          from_email: "noreply@lccc-acm.github.io",
          from_name: "LCCC-ACM",
          to: [{
                  "email": "mkoch227@gmail.com"
              }]
            
        }
      }
    });
    
    xhr.done(function(data) {
      $('#console').append(JSON.stringify(data));
    });
    
    xhr.fail(function(jqXHR, textStatus, errorThrown) {
      $('#console').append(jqXHR.responseText);
    });
    
  });
   
});