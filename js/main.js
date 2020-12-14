$(document).ready(() => {

    $('#products-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        dots: false,
        responsive: [
            {
                breakpoint: 1229,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 836,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    });

    $('#reserve-btn').click(() => {
        $(".error").hide();
        $('input').css("border-color", "");

        let name = $('#name');
        let phone = $('#phone');
        let order = $('#order-name');
        let hasError = false;

        if (!name.val()) {
            name.siblings(".error").show()
            name.css("border-color", "red")
            hasError = true;
        }
        if (!phone.val()) {
            phone.siblings(".error").show();
            phone.css("border-color", "red")
            hasError = true;
        }
        if (!order.val()) {
            order.siblings(".error").show();
            order.css("border-color", "red")
            hasError = true;
        }
        if (!hasError) {
            $('#order-form').hide();
            $('#order-title').hide();
            $('#order-text').hide();
            $('#order-text-submit').show();
        }
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
};
document.querySelectorAll('#menu > *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})