/* jshint jquery:true */

var app = (function() {

    'use strict';

    var minTime = 6000;
    var maxTime = 12000;

    var animateElement = function(el, minLeft, maxLeft, minRight, maxRight, minTime, maxTime) {

        var left = minLeft + (maxLeft - minLeft) * Math.random();
        var width = ((minRight + (maxRight - minRight) * Math.random()) - left);
        var time = minTime + maxTime * Math.random();

        el.animate({
            left: left + '%',
            width: width + '%'
        }, time * Math.random(), function() {
            animateElement(el, minLeft, maxLeft, minRight, maxRight, minTime, maxTime);
        });


    };

    return {

        firstTime: true,

        /**
         * Animate Logo
         */
        animateLogo: function() {

            // Reduce jQuery default Animation Interval
            jQuery.fx.interval = 50;

            animateElement($('.logo-1'), 5, 10, 20, 40, minTime, maxTime);
            animateElement($('.logo-2'), 10, 20, 50, 70, minTime, maxTime);
            animateElement($('.logo-3'), 30, 50, 80, 90, minTime, maxTime);
            animateElement($('.logo-4'), 70, 80, 100, 100, minTime, maxTime);

        },

        displayRating: function() {
            $('.skill-rating-1').html('<i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i>');
            $('.skill-rating-2').html('<i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i>');
            $('.skill-rating-3').html('<i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i>');
            $('.skill-rating-4').html('<i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i>');
            $('.skill-rating-5').html('<i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i>');
        }
    };

})();

(function() {

    'use strict';

    //foundation init
    $(document).foundation();

    app.displayRating();

    // Start animating the logo
    app.animateLogo();

})();
