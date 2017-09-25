
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

  $(".crystals").empty();

  var images = [
      'https://vignette1.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324',
      'https://vignette1.wikia.nocookie.net/marvel-contestofchampions/images/b/b4/Crystal_quest.png/revision/latest?cb=20151122000045',
      'https://vignette1.wikia.nocookie.net/marvel-contestofchampions/images/3/34/Crystal_epic.png/revision/latest?cb=20151121234218',
      'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642'
  ];

  random_result = Math.floor(Math.random() * 69 ) + 30;


  $("#result").html('Try To Reach: ' + random_result);

  for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
      "data-random": random
    });
    crystal.css({
      "background-image":"url('" + images[i] + "')",
      "background-size":"cover"
    });

    $(".crystals").append(crystal);

  }

  $("#previous").html("Total score: " + previous);
  $("#win").html("Wins: " + win);
  $("#lost").html("Losses: " + lost);

}


resetAndStart();


$(document).on('click', ".crystal", function () {

  var num = parseInt($(this).attr('data-random'));

  previous += num;


  $("#previous").html("Total score: " + previous);

  console.log(previous);

  if(previous > random_result){

    lost++;

    $("#lost").html("You lost: " + lost);

    previous = 0;

    resetAndStart();

  }

  else if(previous === random_result){

    win++;

    $("#win").html("You win: " + win);

    previous = 0;

    resetAndStart();
  }

});
