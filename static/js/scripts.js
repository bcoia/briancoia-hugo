jQuery(function($) {

    /* ============================================================ */
    /* Responsive Videos */
    /* ============================================================ */

    $(".post-content").fitVids();

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0});
    });
});

hljs.initHighlightingOnLoad();

function getRandomHeader() {
    document.getSelection().removeAllRanges();
    $.get('/headers.txt', function(txt) {
        var lines = txt.split("\n");
        var randLineNum = Math.floor(Math.random() * lines.length);
        var randLine = lines[randLineNum];
        $('.random-header').html(randLine).css("opacity", "1");
    });
}

$(function () {
    getRandomHeader();
});

$('.random-header').click(function() {
    getRandomHeader();
});
