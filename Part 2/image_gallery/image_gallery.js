$(document).ready(function() {

    function preloadImage(url)
    {
        var img=new Image();
        img.src=url;
    }

    $('#image_list').children('li').each(function() {
        alert($(this).attr("href"));
       preloadImage(this.attr("href"));

    });
    // set up event handlers for links
    $("#image_list a").click(function(evt) {
        // swap image
        /*var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);

        //swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancel the default action of the link
         */
        evt.preventDefault();  // jQuery method that's cross-browser compatible


        alert("hello")
    }); // end click

    // move focus to first thumbnail
    $("li:first-child a").focus();
})
