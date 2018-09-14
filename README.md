# Overlay
Javascript Library to control text over background image

In some instances you may recieve a design file with some crazy background images that need to have text placed over them in specific places. In order to do this the container that overlays the background image needs to size exactly like the background image. When the background image is set to cover and center, this library will help you achieve that. 

First, create the main div that will hold the background image and text container. Add a background image to the main div and set it to cover and center. Then inside that div create another div for containing your text. This should be set to position relative, width 100%, height 100%. Add the overlay.js library and set the options for the original width and height of the background image along with the class name of the text overlay div like this -

```

<div class="main-wrapper" style="background-image:url('my-background-image'); background-size:cover;background-position:center">
  <div class="text-overlay">
    <div class="my-text">Here is some text.</div>
  </div>
</div>

```

Then create an instance of Overlay on the text div like this -

```

<script src="overlay.js"></script>
<script type="text/javascript">
var textContainer = new overlay({
	width: 2364,
	height: 1314,
	element: 'text-overlay'
});
</script>

```

Set the position for the text container to relative. Also, try to set widths on your text divs to make sure they align properly from the edge. Then you can use percentages on the text divs within the container to position the text. When you resize the browser, your text will stay in place over the image where you originally set it. 
