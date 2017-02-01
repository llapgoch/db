;(function($){
    var FALLBACK_COLOR = "#d3d3d3"; //"#e85d00";
    var diameter;

    $(document).on('ready.sinebanner', function(){
        var $bannerWidgets = $('.banner-widget');
        var stageSize = Math.max($(window).width(), $bannerWidgets.height());
        var widgetItemSelector = '.banner-widget--under-header .banner-widget__item';
        // The CSS blur on the canvas element is far too slow on Firefox / other browsers
        var optimisedMode = isOptimisedMode();

        diameter = (stageSize / 5) * (optimisedMode ? 2 : 1);

        stageSize += (diameter * 2);


        $bannerWidgets.sinewave({
            circleDiameter: diameter,
            amount: Math.ceil(stageSize / 20) * (optimisedMode ? 0.25 : 1),
            angleOffset: 0.1,
            moveAmount: 0.004,
            blur: optimisedMode ? 0 : 40,
            updateInterval: 60,
            stageSize: stageSize,
            alpha: optimisedMode ? 0.05 : 0.11,
            circleColor: FALLBACK_COLOR,
            gradient: true,

            updateMethod: function(a, angleInterval){
                return Math.sin(Math.log(a * a) / Math.cos(a) * Math.E);
            },
            // trailsUpdateMethod: function(point, a){
            //     point.alpha = point.x / 400;
            //
            //     return point;
            // }
        });

        $bannerWidgets.each(function(){
            $($(this).data('llapgochSinewave').getCanvas()).css({
                'marginLeft': -diameter,
                'marginTop': -diameter
            });
        });

        function updateBannerItems(){
            $(widgetItemSelector).css('paddingTop', $('.main-header').height() + 20);
        }

        function isOptimisedMode(){
            return window.navigator.userAgent.indexOf('Firefox') != -1;
        }
        
        $('.banner-widget__items').bxSlider({
            auto: true,
            pause: 10000,
            onSliderLoad: function(){
                updateBannerItems();
            },
            onSlideBefore: function($item){
                var color = $item.data('sine-color') ? $item.data('sine-color') : FALLBACK_COLOR;
             //   $(".banner-widget").data('llapgochSinewave').option("circleColor", color);
            }
        });
    });
}(jQuery));