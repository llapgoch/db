jQuery.widget('llapgoch.sinewave', {
    options: {
        circleDiameter: 4,
        stageSize: 400,
        containerCircleClass: 'containerCircle',
        circleClass: 'circle',
        amount: 50,
        updateInterval: 5,
        colorUpdateInterval: 500,
        colorUpdateSteps: 100,
        moveAmount: 0.004,
        angleOffset: 0,
        circleDivisor: 1,
        // Colours have to be in HEX format
        circleColor: '#FF0000',
        numberOfTrails: 0,
        blur: 0,
        alpha: 1,
        clearOnUpdate: true,
        autoStart: true,
        gradient: false,

        updateMethod: function (a, angleInterval) {
            return Math.sin((angleInterval * (Math.PI / 180))) * a;
        },

        // override this to adapt the points on an individual basis
        trailsUpdateMethod: function (point, pointNumber, trailNumber) {
            // var dist = ((this.options.numberOfTrails - trailNumber) / this.options.numberOfTrails);
            // var perc = pointNumber / this.options.amount;
            //
            // point.alpha = dist;
            // point.diameter = this.options.circleDiameter * dist;

            return point;
        }
    },

    containerCircles: null,
    hexLookups: {},
    updateId: null,
    sineCount: 0,
    points: null,
    mainOffset: 0,
    startAngle: 0,
    initComplete: false,
    canvas: null,
    ctx: null,

    colorTargetComponents: {},
    colorUpdateId: null,


    compositeModes:[
        'source',
        'destination',
        'lighter',
        'copy',
        'xor',
        'multiply',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light'
    ],
    compositeSubModes: {
        'source': ['over', 'in', 'out', 'atop'],
        'destination': ['over', 'in', 'out', 'atop']
    },

    _create: function(){
        // Create the canvas
        var canvas =  $('<canvas />', {
            width: this.options.stageSize,
            height: this.options.stageSize
        });

        if(this.options.blur) {
            var blur = 'blur(' + this.options.blur + 'px)';

            canvas.css({
                'filter': blur,
                '-webkit-filter': blur,
                '-moz-filter': blur,
                '-o-filter': blur,
                '-ms-filter': blur
            });
        }

        this.points = [];
        this.colours = [];
        this.canvas = canvas.get(0);

        this.canvas.width = this.options.stageSize;
        this.canvas.height = this.options.stageSize;

        this.element.append(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this._addEvents();
        this.enable();
    },

    _addEvents: function(){
        this._on(this.element, {
            "click .stop": function(ev){
                ev.preventDefault();
                this.disable();
            },
            "click .start": function(ev){
                ev.preventDefault();
                this.enable();
            }
        });
    },

    stopFadingCircleColor: function(){
        if(this.colorUpdateId){
            window.clearTimeout(this.colorUpdateId);
        }
    },

    fadeCircleColor: function(color){
        var colorParts = this._hexToRGB(color);
        var currentParts = this._hexToRGB(this.options.circleColor);
        var self = this;

        console.log(this.options.circleColor);
        console.log(currentParts);

        console.log(self._numberToHex(currentParts.r));

        if(!colorParts || !currentParts){
            throw 'Color fader not passed HEX color';
        }

        this.stopFadingCircleColor();

        var stepData = {
            'r': (colorParts.r - currentParts.r) / this.options.colorUpdateSteps,
            'g': (colorParts.g - currentParts.g) / this.options.colorUpdateSteps,
            'b': (colorParts.b - currentParts.b) / this.options.colorUpdateSteps
        }



        this.colorUpdateId = window.setInterval(function(){
            currentParts.r += stepData.r;
            currentParts.g += stepData.g;
            currentParts.b += stepData.b;

            var col = "#" + self._numberToHex(currentParts.r) +
                + self._numberToHex(currentParts.g) + self._numberToHex(currentParts.b);

            // console.log(col);

            self.options.circleColor = col;

        }, this.options.colorUpdateInterval);

    },

    _numberToHex: function(num){
        num = Math.max(Math.min(255, parseInt(num, 10)), 0);
        return ("0" + ((parseInt(num, 10)).toString(16))).slice(-2)
    },

    getRandomCompositeMode: function(){
        var main = Math.round(Math.random() * this.compositeModes.length);
        var mode = this.compositeModes[main];

        if(this.compositeSubModes[main]){
            var sub = Math.round(Math.random() * this.compositeSubModes[main]);
            return main + "-" + this.compositeSubModes[main][sub];
        }

        return mode;
    },

    enable: function(){
        this._start();
    },

    disable: function(){
        this._stop();
    },

    getCanvas: function(){
        return this.canvas;
    },

    _start: function(){
        if(this.updateId){
            return;
        }

        var self = this;

        this.updateId = window.setInterval(function(){
            self._update();
        }, this.options.updateInterval);

    },

    _stop: function(){
        if(this.updateId){
            window.clearInterval(this.updateId);
            this.updateId = null;
        }
    },

    _distanceBetweenPoints: function(point1, point2){
        var xOffset = point1.x - point2.x;
        var yOffset = point1.y - point2.y;

        return Math.sqrt((xOffset * yOffset) + (yOffset * yOffset));
    },

    _update: function(){
        var self = this;
        var cRadius = this.options.circleDiameter / 2;
        var midPoint = (this.options.stageSize / 2) - cRadius
        var xPos = (self.options.stageSize / 2) - cRadius;

        var angleInterval = 360 / this.options.amount / this.options.circleDivisor;
        var angle = this.startAngle;

        var mid = {
            x: midPoint,
            y: midPoint
        };

        var zero = {
            x: 0,
            y: 0
        };

        if(this.options.clearOnUpdate){
            this.ctx.clearRect(0, 0, this.options.stageSize, this.options.stageSize);
        }

        for(var i = 0; i <= this.options.amount; i++){

            var offset = self.options.updateMethod(i + 1, angleInterval);

            offset = isNaN(offset) ? 0 : offset;

            var sinPos = midPoint + (Math.sin(self.sineCount + offset) * midPoint),
                yPos = sinPos;

            var rotated = self._rotatePoint({
                'x': xPos ,
                'y': yPos
            }, mid, angle);

            rotated.x += cRadius;
            rotated.y += cRadius;

            rotated.diameter = this.options.circleDiameter;
            rotated.color = this.options.circleColor;
            rotated.alpha = this.options.alpha;

            if(!this.points[i]) {
                this.points[i] = [];
            }

            // Add the point to the trails array
            this._updatePoints(this.points[i], rotated, i);

            angle += angleInterval;
            //break;
        }

        self.sineCount += self.options.moveAmount;
        self.startAngle += self.options.angleOffset;

        if(!this.initComplete && !this.options.autoStart){
            this._stop();
            this.initComplete = true;
        }
    },

    _hexToRGB: function hexToRgb(hex) {
        if(this.hexLookups[hex]){
            return this.hexLookups[hex];
        }

        console.log(hex);

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        if(result){
            var rgb = {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            };

            // Cache the result
            this.hexLookups[hex] = rgb;
            return rgb;
        }
    },

    _RGBToHex: function(){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

        return (rgb && rgb.length === 4) ? "#" +
            ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';

    },

    _drawPoint: function(options) {
        if (this.options.gradient){
            var color = this._hexToRGB(options.color);

            if (!color || !color.r) {
                throw "No valid HEX color provided";
                return;
            }

            var gradient = this.ctx.createRadialGradient(options.x, options.y, options.diameter/2, options.x, options.y, 0);
            gradient.addColorStop(0, "rgba(" + color.r + "," + color.g + "," + color.b + ",0)");
            gradient.addColorStop(1, "rgba(" + color.r + "," + color.g + "," + color.b + "," + this.options.alpha + ")");
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(options.x - (options.diameter / 2), options.y - (options.diameter / 2), options.diameter, options.diameter);
        }else{
            this.ctx.fillStyle = options.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = options.alpha;
            this.ctx.arc(options.x, options.y, options.diameter / 2, 0, 2 * Math.PI, false);
            this.ctx.fill();
        }

    },

    _updatePoints: function(points, newPoint, pointNumber){
        if(points.length >= this.options.numberOfTrails){
            points.splice(this.options.numberOfTrails - 1, points.length - (this.options.numberOfTrails) + 1);
        }

        if(newPoint) {
            points.splice(0, 0, newPoint);
        }

        for(var i = 0; i < points.length; i++){
            var values = this.options.trailsUpdateMethod.apply(this, [points[i], pointNumber, i]);
            this._drawPoint(values);
        }
    },

    _rotatePoint: function($pPoint, $pOrigin, rot){
        var $rp = [];
        var radians = (rot / 180) * Math.PI;

        $rp['x'] = $pOrigin['x'] + (Math.cos(radians) * ($pPoint['x'] - $pOrigin['x']) - Math.sin(radians) * ($pPoint['y'] - $pOrigin['y']));
        $rp['y'] = $pOrigin['y'] + (Math.sin(radians) * ($pPoint['x'] - $pOrigin['x']) + Math.cos(radians) * ($pPoint['y'] - $pOrigin['y']));

        return $rp;
    }

});