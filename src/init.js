$(document).ready(function() {
  window.poros = [];

  $('.addPoroButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
// Remember you've got a global array of all created poros (it's defined in src/init.js) 
// so you can loop through that array and tell each object to lineUp.
    var poroMakerFunctionName = $(this).data('poro-maker-function-name');

    // get the maker function for the kind of poro we're supposed to make
    var poroMakerFunction = window[poroMakerFunctionName];

    // make a poro with a random position

    var poro = new poroMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(poro.$node);
    window.poros.push(poro);
  });

  $(".lineUpPorosButton").on("click", function(event) {
    window.poros.forEach(function(poro){
      poro.lineUp();
    });
  })

  $(".breakUpPorosButton").on("click", function(event) {
    window.poros.forEach(function(poro){
      poro.breakLineUp();
    });
  })

  $(".surpriseButton").on("click", function(event) {
    window.poros.forEach(function(poro){
      poro.lineUp();
    });
  })
  // $('lineUpporosButton').on('click', function(event) {
  //   var yValue = 10;
  //   for (var i = 0; i < window.poros.length; i++) {
  //     window.poros[i].lineup();
  //     yValue += window.poros[i].$node.height();
  //   }
  // })

});

