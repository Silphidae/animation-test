'use strict';

require.config({
    baseUrl: 'node_modules',
    paths: {
        'jquery': 'jquery/dist/jquery.min',
        'velocity': 'velocity-animate/velocity.min'
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
        pageWidth = $window.width(),
        pageHeight = $window.height(),

        pieceWidth = 200,
        pieceHeight = 100,

        moveWidth = (pageWidth-pieceWidth)/2,
        moveHeight = (pageHeight-pieceHeight)/2;

    movePiece($('.one'), moveWidth, moveHeight, 2500, 3000);
    movePiece($('.two'), -moveWidth, moveHeight, 3000, 2500);
    movePiece($('.three'), moveWidth, -moveHeight, 4500, 1000);
    movePiece($('.four'), -moveWidth, -moveHeight, 1500, 4000);
}

function movePiece(piece, transX, transY, transDur, revDelay) {
    piece
        .velocity('fadeIn', { duration: 500 })
        .velocity({
                translateX: transX,
                translateY: transY
            }, { duration: transDur }
        )
        .velocity('reverse', {
            duration: 1500,
            delay: revDelay
        })
        .velocity('fadeOut', { duration: 500 });
}

});