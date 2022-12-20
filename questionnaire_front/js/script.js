mybutton = document.getElementById("go_to_top_btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.nextElementSibling.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function myAlertSuccess(){
    $(".myAlert-success").show();
    setTimeout(function(){
        $(".myAlert-success").hide();
    }, 2000);
}

function myAlertDanger(){
    $(".myAlert-danger").show();
    setTimeout(function(){
        $(".myAlert-danger").hide();
    }, 2000);
}

function golestanAnswers() {
    var GA1 = $('input[name="Gq1"]:checked').val();
    var GA2 = $('input[name="Gq2"]:checked').val();
    var GA3 = $('input[name="Gq3"]:checked').val();
    var GA4 = $('input[name="Gq4"]:checked').val();
    var GA5 = $('input[name="Gq5"]:checked').val();

    $.post("https://***/insertGolestan",
        {
            Gq1: GA1,
            Gq2: GA2,
            Gq3: GA3,
            Gq4: GA4,
            Gq5: GA5
        },
        function(data, status){
            if (status === 'success')
                myAlertSuccess();
            else
                myAlertDanger();

            $('#submit-btn-golestan').html(
                '<button id="golestan-btn" class="btn btn-general btn-header" type="submit" role="button">ثبت نظر</button>'
            );
        });
}

function vianaAnswers() {
    var VA1 = $('input[name="Vq1"]:checked').val();
    var VA2 = $('input[name="Vq2"]:checked').val();
    var VA3 = $('input[name="Vq3"]:checked').val();
    var VA4 = $('input[name="Vq4"]:checked').val();
    var VA5 = $('input[name="Vq5"]:checked').val();

    $.post("https://***/insertViana",
        {
            Vq1: VA1,
            Vq2: VA2,
            Vq3: VA3,
            Vq4: VA4,
            Vq5: VA5
        },
        function(data, status){
            if (status === 'success')
                myAlertSuccess();
            else
                myAlertDanger();

            $('#submit-btn-viana').html(
                '<button id="viana-btn" class="btn btn-general btn-header" type="submit" role="button">ثبت نظر</button>'
            );
        });
}

$('#golestan-btn').click(function() {
    $('#golestan-btn').html('<span class="spinner-border text-warning" role="status" aria-hidden="true"></span>در حال ثبت نظر ...').attr('disabled', true);
    golestanAnswers();
});

$('#viana-btn').click(function() {
    $('#viana-btn').html('<span class="spinner-border text-warning" role="status" aria-hidden="true"></span>در حال ثبت نظر ...').attr('disabled', true);
    vianaAnswers();
});
