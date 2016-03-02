$(document).ready(function() {

    $("a").click(function(){


            if ($(this).prev().hasClass("hide")) {
                $(this).prev().toggleClass("hide");
                this.innerHTML ="Show less";
            }
            else {
                $(this).prev().toggleClass("hide");
                this.innerHTML ="Show more";
            }



    })
})
