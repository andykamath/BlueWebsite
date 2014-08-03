Image Slider Maker README
=========================
ImageSliderMaker.com

Using in your website
---------------------

Look at example/example.html for a working example.

You must include the following in the head of your HTML document:

  <link type='text/css' rel='Stylesheet' href='imageslidermaker.css' />
  <link type='text/css' rel='Stylesheet' href='http://fonts.googleapis.com/css?family=Titillium+Web:300,400'>
  <script src='http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>
  <script src='bjqs-1.3-imageslidermaker.js'></script>

(Note: the extracts in this README are specific to the ZIP you downloaded, which reflect your configuration)

You also need to include the following, which initializes Basic jQuery Slider:

  <script>
  $(function() {
    $('#imageslider').bjqs({
      width: 680,
      height: 340,
      animtype: 'fade',
      responsive: false,
      automatic: true,
      keyboardnav: false,
      markertype: '1',
      prevtext: 'Prev',
      nexttext: 'Next'
    });
  });
  </script>


Place this where you want the slider to appear, in the body of your page:

  <!-- Generated using ImageSliderMaker.com -->
  <div id="imageslider">
    <ul class="bjqs">
      <li class="slide-1">
        <div class="caption">Slide 1 Caption</div>
      </li>
      <li class="slide-2">
        <div class="caption">Slide 2 Caption</div>
      </li>
      <li class="slide-3">
        <div class="caption">Slide 3 Caption</div>
      </li>
    </ul>
  </div>


Finally, make sure the required CSS, JavaScript and image files are in your website directory structure.


Notes on Basic jQuery Slider
----------------------------

bjqs-1.3-imageslidermaker.js extends the original to allow for different marker symbol types, for example i, ii, iii and A, B, C. You may use the original if you are using the default marker type.

The original Basic jQuery Slider's CSS is not needed, as imageslidermaker.css contains all the necessary style rules.

Not all Basic jQuery Slider options are specified by the Image Slider Maker.

Please see http://www.basic-slider.com/ for full usage.


Notes on Images
----------------------------
We crop the slide images when the ZIP is created. On the website you can use the Image Credits links to download the original images.

Customization
-------------

Image Slider Maker is designed to enable rapid image slider creation. The output is a simple slider. Although your configured image slider will work as is, you may like to consider adding HTML content to your slides and adjusting the stylesheet to your specific needs.


Please report bugs, suggest improvements or make general comments using our feedback form at ImageSliderMaker.com/feedback

Tweets, +1s, Likes always appreciated!

Thank you

