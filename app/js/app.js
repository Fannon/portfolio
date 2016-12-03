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
            $('.skill-rating-1').html('<span class="tooltip" title="Basic knowledge without project experience"><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i></span>');
            $('.skill-rating-2').html('<span class="tooltip" title="Basic knowledge with some project experience"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i></span>');
            $('.skill-rating-3').html('<span class="tooltip" title="Good knowlede with some project experience"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i><i class="fa fa-circle-o"></i></span>');
            $('.skill-rating-4').html('<span class="tooltip" title="Good knowledge with years of project experience"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle-o"></i></span>');
            $('.skill-rating-5').html('<span class="tooltip" title="Excellent knowledge with years of project experience"><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i><i class="fa fa-circle"></i></span>');
        }
    };

})();

(function() {

    'use strict';

    $(document).ready(function() {

        app.displayRating();

        $('.tooltip').tooltipster({
            animation: 'fade',
            animationDuration: 0,
            delay: 0,
            theme: 'tooltipster-borderless'
        });

        $(document).foundation();

        // Start animating the logo
        app.animateLogo();
    });
})();
