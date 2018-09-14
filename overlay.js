//JS Library to control text overlay div to fit the size of a background image. It allows text to be set over a background image and stay in place
//of intended image.
//
//Written by Tyler Nichol - 9/18
//LIBRARY CLASS

var overlay = (function(){


    function resizeOverlay(params){

    //get the overlay container
    var layContainer = document.getElementsByClassName(params.element)[0];
    console.log(layContainer);
    
    //user sets height and width of bg image used so we can calculate ratio
    var bgHeight = params.height;
    var bgWidth = params.width;

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;


    var newSize = getFinalMeasurements(x, y, bgWidth, bgHeight);

    var newPos = getNewPosition(x, y, newSize);
    

    function getFinalMeasurements(x, y, natWidth, natHeight){

        
        var finalSize = {};


        var originalRatios = {
            width: x / natWidth,
            height: y / natHeight
          };

          var coverRatio = Math.max(originalRatios.width, originalRatios.height); 
         
        finalSize = {
            height: natHeight * coverRatio,
            width: natWidth * coverRatio
        }

        return finalSize;
    }

    function getNewPosition(x, y, finalSize){
        var left = finalSize.width - x;
        var top = finalSize.height - y;
        var leftPos;
        var topPos;
        var finalPos = {};

        if(left > 0){
            leftPos = left/2;
        }else{
            leftPos = left;
        }

        if(top > 0){
            topPos = top/2;
        }else{
            topPos = top;
        }

        finalPos = {
            left: leftPos,
            top: topPos
        }

        return finalPos;
            
        

        
    }

    layContainer.setAttribute('style', 'height:' + newSize.height + 'px; width:' + newSize.width + 'px; left: -' + newPos.left + 'px; top:-' + newPos.top + 'px');

   }

   

   return function(params) {
    resizeOverlay(params);
    window.addEventListener("resize", function() {
      resizeOverlay(params);
    });
  }

})();