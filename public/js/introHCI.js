'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(likeClicked);
};

function likeClicked(e){
	ga("send", "event", 'like', 'click');
}

var random_num = Math.random();
console.log(random_num);

if (random_num > 0.5) {
  projects['grid'] = false;
  res.render('index', projects);
} else {
  res.redirect('/grid');
}