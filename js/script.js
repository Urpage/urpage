$('a.anch').on('click', function (event) {
    var $anchor = $(this)
    $('html, body')
        .stop()
        .animate(
            {
                scrollTop: $($anchor.attr('href')).offset().top,
            },
            {
                duration: 500,
            }
        )
    event.preventDefault()
})