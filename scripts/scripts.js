'use strict';

require.config({
    baseUrl: 'lib',
    paths: {
        'jquery': 'jquery-3.2.1.min',
        'velocity': 'velocity.min'
    },
    shim: {
        'velocity': {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'velocity'], function ($, Velocity) {

    $('button')
        .click(function() {
            $(this).velocity("fadeOut", { duration: 500 });
            movePictures();
            $(this).velocity("fadeIn", { duration: 500, delay: 7000 });
        });

    function movePictures() {
        var $window = $(window),
            pageHeight = $window.height(),
            pageWidth = $window.width(),

            moveWidth = (pageWidth-200)/2,
            moveHeight = (pageHeight-100)/2;

        $('.one')
            .velocity('fadeIn', { duration: 500 })
            .velocity({
                    translateX: moveWidth,
                    translateY: moveHeight
                }, { duration: 2500 }
            )
            .velocity('reverse', {
                duration: 1500,
                delay: 3000
            })
            .velocity('fadeOut', { duration: 500 });

        $('.two')
            .velocity('fadeIn', { duration: 500 })
            .velocity({
                    translateX: -moveWidth,
                    translateY: moveHeight
                }, { duration: 3000 }
            )
            .velocity('reverse', {
                duration: 1500,
                delay: 2500
            })
            .velocity('fadeOut', { duration: 500 });

        $('.three')
            .velocity('fadeIn', { duration: 500 })
            .velocity({
                    translateX: moveWidth,
                    translateY: -moveHeight
                }, { duration: 4500 }
            )
            .velocity('reverse', {
                duration: 1500,
                delay: 1000
            })
            .velocity('fadeOut', { duration: 500 });

        $('.four')
            .velocity('fadeIn', { duration: 500 })
            .velocity({
                    translateX: -moveWidth,
                    translateY: -moveHeight
                }, { duration: 1500 }
            )
            .velocity('reverse', {
                duration: 1500,
                delay: 4000
            })
            .velocity('fadeOut', { duration: 500 });
    }

});

