$(document).ready(function() {
    // Open the popup
    $('#openPopup').click(function() {
        $('#popup').fadeIn();
        $('body').addClass('blur'); // Add blur class to body
    });

    // Close the popup when the user clicks on <span> (x)
    $('.close').click(function() {
        $('#popup').fadeOut();
        $('body').removeClass('blur'); // Remove blur class from body
    });

    // Close the popup when the user clicks anywhere outside of the popup content
    $(window).click(function(event) {
        if ($(event.target).is('#popup')) {
            $('#popup').fadeOut();
            $('body').removeClass('blur'); // Remove blur class from body
        }
    });
});