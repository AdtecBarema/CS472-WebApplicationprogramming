$(function () {

    $('#bookingForm').submit(function (event) {

        event.preventDefault();
        $('#errors').empty();

        submitFlag=true;
        const name=$('#name').val();
        const street = $('#street').val(); // .val() used to get/set the value of a form input, select, textarea, ...
        const zipcode=$('#zipcode').val();
        const seat=$('input[name="seats"]').val();

        if(name===''){
            $('#errors').append('Name cannot be null.<br/>')
            submitFlag=false;
        }

        if(street==='') {
            $('#errors').append('street cannot be null.<br/>');
            submitFlag=false;
        }

        if(zipcode===''){
            $('#errors').append('zipcode cannot be null.<br/>');
            submitFlag=false;
        }

        if(seat<=0|| seat>200){
            $('#errors').append('You cannot book more than 200 seats.<br/>');
            submitFlag=false;
        }

        if ($('input[name="taxi"]:checked').val()===undefined){
            $('#errors').append('You must select taxi type.<br>');
            submitFlag=false;
        }
        if($('input[name="Extras"]:checked').val()===undefined){
            $('#errors').append('You must check one extra. <br/>');
            submitFlag=false;
        }

        if(submitFlag){
            this.submit();
        }
    });
});