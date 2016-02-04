//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
            console.log('ready');

            $('#keys').hover(function () {
                $(this).attr('src', 'images/keys_h.png').fadeIn();
            }, function () {
                $(this).attr('src', 'images/keys_tb.png').fadeIn();
            });

            $('#phone').hover(function () {
                $(this).attr('src', 'images/phone_h.png').fadeIn();
            }, function () {
                $(this).attr('src', 'images/phone_tb.png').fadeIn();
            });

            $('#note').hover(function () {
                $(this).attr('src', 'images/note_h.png').fadeIn();
            }, function () {
                $(this).attr('src', 'images/note_tb.png').fadeIn();
            });

            $('#scissors').hover(function () {
                $(this).attr('src', 'images/scissors_h.png').fadeIn();
            }, function () {
                $(this).attr('src', 'images/scissors_tb.png').fadeIn();
            });

            $('#pencil').hover(function () {
                $(this).attr('src', 'images/pencil_h.png').fadeIn();
            }, function () {
                $(this).attr('src', 'images/pencil_tb.png').fadeIn();
            });

            $('#keys').click(function () {

                var center = $(window).width() / 2;

                $('section#overlay').css('left', center).animate({
                    width: '100%',
                    left: '0'
                });

                $('section img').attr('src', 'images/keys.png').css('visibility', 'visible').css('width', '800px');

                $('section nav#close').css('visibility', 'visible');
                return false;
            });

            $('nav#close').click(function () {
                var center = $(window).width() / 2;
                $('section#overlay').animate({
                    width: '0%',
                    left: center
                });
                $('section img').css('visibility', 'hidden');
                $('section nav').css('visibility', 'hidden');
                return false;
            });

            $('#phone').click(function () {

                    var center = $(window).width() / 2;

                    $('section#overlay').css('left', center).animate({
                        width: '100%',
                        left: '0'
                    });

                    $('section img').attr('src', 'images/phone.png').css('visibility', 'visible').css('width', '500px');

                        $('section nav#close').css('visibility', 'visible');
                        return false;
                    });

                $('nav#close').click(function () {
                    var center = $(window).width() / 2;
                    $('section#overlay').animate({
                        width: '0%',
                        left: center
                    });
                    $('section img').css('visibility', 'hidden');
                    $('section nav').css('visibility', 'hidden');
                    return false;
                });

                $('#pencil').click(function () {

                    var center = $(window).width() / 2;

                    $('section#overlay').css('left', center).animate({
                        width: '100%',
                        left: '0'
                    });

                    $('section img').attr('src', 'images/pencil.png').css('visibility', 'visible').css('width', '800px');

                    $('section nav#close').css('visibility', 'visible');
                    return false;
                });

                $('nav#close').click(function () {
                    var center = $(window).width() / 2;
                    $('section#overlay').animate({
                        width: '0%',
                        left: center
                    });
                    $('section img').css('visibility', 'hidden');
                    $('section nav').css('visibility', 'hidden');
                    return false;
                });

                $('#scissors').click(function () {

                    var center = $(window).width() / 2;

                    $('section#overlay').css('left', center).animate({
                        width: '100%',
                        left: '0'
                    });

                    $('section img').attr('src', 'images/scissors.png').css('visibility', 'visible').css('width', '700px');

                    $('section nav#close').css('visibility', 'visible');
                    return false;
                });

                $('nav#close').click(function () {
                    var center = $(window).width() / 2;
                    $('section#overlay').animate({
                        width: '0%',
                        left: center
                    });
                    $('section img').css('visibility', 'hidden');
                    $('section nav').css('visibility', 'hidden');
                    return false;
                });

                $('#note').click(function () {

                    var center = $(window).width() / 2;

                    $('section#overlay').css('left', center).animate({
                        width: '100%',
                        left: '0'
                    });

                    $('section img').attr('src', 'images/note.png').css('visibility', 'visible').css('width', '500px');

                    $('section nav#close').css('visibility', 'visible');
                    return false;
                });

                $('nav#close').click(function () {
                    var center = $(window).width() / 2;
                    $('section#overlay').animate({
                        width: '0%',
                        left: center
                    });
                    $('section img').css('visibility', 'hidden');
                    $('section nav').css('visibility', 'hidden');
                    return false;
                });
            })