;(function($){
    var FALLBACK_COLOR = "#fc6500";

    $(document).on('ready.sinebanner', function(){
        $('.banner-widget').sinewave({
            circleDiameter: 210,
            amount: 50,
            angleOffset: 0.1,
            moveAmount: 0.004,
            blur: 40,
            updateInterval: 40,
            stageSize: Math.max($(window).width(), $('.banner-widget').height()),
            alpha: 1,
            circleColor: FALLBACK_COLOR,

            updateMethod: function(a, angleInterval){
                return Math.sin(Math.log(a * a) / Math.cos(a) * Math.E);
            },
            // trailsUpdateMethod: function(point, a){
            //     point.alpha = point.x / 400;
            //
            //     return point;
            // }
        });

        function updateBannerItems(){
            $('.banner-widget--under-header .banner-widget__item').css('paddingTop', $('.main-header').height() + 20);
        }
        
        $('.banner-widget--under-header .banner-widget__items').bxSlider({
            auto: true,
            pause: 10000,
            onSliderLoad: function(){
                updateBannerItems();
            },
            onSlideBefore: function($item){
                var color = $item.data('sine-color') ? $item.data('sine-color') : FALLBACK_COLOR;
                $(".banner-widget").data('llapgochSinewave').option("circleColor", color);
            }
        });
    });
}(jQuery));