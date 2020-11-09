;(function($){
    var FALLBACK_COLOR = "#f31215";
    var diameter;

    $(document).on('ready.sinebanner', function(){
        var $bannerWidgets = $('.banner-widget');
        var stageSize = Math.max($(window).width(), $bannerWidgets.height()/1.75);
        var widgetItemSelector = '.banner-widget--under-header .banner-widget__item';
        // The CSS blur on the canvas element is far too slow on Firefox / other browsers
        var optimisedMode = false;

        diameter = (stageSize / 5) * (optimisedMode ? 2 : 1);

        stageSize += (diameter * 2);


        $bannerWidgets.sinewave({
            circleDiameter: 22,
            amount: Math.ceil(stageSize / 20) * (optimisedMode ? 0.25 : 1) * 2,
            angleOffset: 0.04,
            moveAmount: 0.001,
            blur:8,
            updateInterval: 900,
            stageSize: stageSize/2,
            alpha: 0.2,
            circleColor: FALLBACK_COLOR,
            gradient: false,
            startCount:Math.floor(Math.random() * 360),
            numberOfTrails: 0,

            updateMethod: function(a, angleInterval){
                return Math.sin(Math.log(a * a) / Math.cos(a) * Math.E);
            },
            // trailsUpdateMethod: function(point, a){
            //     point.alpha = point.x / 400;
            
            //     return point;
            // }
        });

        // $('.main-header .header-canvas').sinewave({
        //     circleDiameter: 20,
        //     amount: Math.ceil(stageSize / 20) * (optimisedMode ? 0.25 : 1),
        //     angleOffset: 0.01,
        //     moveAmount: 0.008,
        //     blur: optimisedMode ? 0 : 40,
        //     updateInterval: 60,
        //     stageSize: stageSize,
        //     alpha: optimisedMode ? 0.05 : 0.11,
        //     circleColor: FALLBACK_COLOR,
        //     gradient: true,
        //     startCount: Math.floor(Math.random() * 360)
        // })

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
        
        // $('.banner-widget__items').bxSlider({
        //     auto: true,
        //     pause: 10000,
        //     mode: "fade",
        //     onSliderLoad: function(){
        //         updateBannerItems();
        //     },
        //     onSlideBefore: function($item){
        //         var color = $item.data('sine-color') ? $item.data('sine-color') : FALLBACK_COLOR;
        //         $(".banner-widget").data('llapgochSinewave').option("circleColor", color);
        //     }
        // });
    });
}(jQuery));