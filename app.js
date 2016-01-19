$(document).ready(function() {

    var movieQuotes = [{
        quote: "I got your 4 basic food groups. Beans, bacon, whiskey, and Lard!",
        author: "-Atlantis"
    }, {
        quote: "Did you ever find bugs bunny attractive when he put on a dress and played a girl bunny?",
        author: "-Waynes World"
    }, {
        quote: "My safe word will be Whiskey.",
        author: "-Hot Rod"
    }, {
        quote: "Room filled with empty people.",
        author: "- Murder by Death"
    }, {
        quote: "If you were thinking you wouldn't of thought that.",
        author: "-The Sandlot"
    }, {
        quote: "As you wish.",
        author: "-The Princess Bride"
    }, {
        quote: "Are you pondering what I'm pondering Pinkey?",
        author: "-Pinkey and the Brain"
    }, {
        quote: "There is no dignity quite so impressive, and no one independence quite so important, as living within your means.",
        author: "-Last Man Standing (quoting Calvin Coolidge)"
    }, {
        quote: "How many cups of sugar does it take to get to the moon?",
        author: "-A Goofy Movie"
    }, {
        quote: "Life is like a box of chocolates, you never know what you're gonna get.",
        author: "-Forest Gump"
    }, {
        quote: "I find that smuggling is the life for me and would be delighted to kill your friend the maggot.",
        author: "-The Count of Monte Cristo"
    }];
    $('.quote').text(movieQuotes[0].quote);
    $('.author').text(movieQuotes[0].author);
    $('.tweetBtn').css("display", "none");


    $('.btn').click(function() {
        $('.tweetBtn').css("display", "initial");
        var random = Math.floor(Math.random() * (movieQuotes.length - 0)) + 0;
        $('.quote').text(movieQuotes[random].quote);
        $('.author').text(movieQuotes[random].author);

        $('.tweetBtn').click(function() {
            if ((movieQuotes[random].quote.length + movieQuotes[random].author.length) > 139) {
                alert('Tweet should be less than 140 Characters');
            } else {
                var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(movieQuotes[random].quote + " " + movieQuotes[random].author);
                window.open(twtLink, '_blank');
            }
        });

    });

});