class Review {
  constructor(showData) {
    //debugger
    this.id = showData.id;
    this.review = showData.review;
    this.showId = showData.showId;
    this.userId = showData.userId;
  }

  //show data is the object
  // Define prototype function to get all the reviews
  getAllReviews() {
    //debugger
    return `<p>${this.review}</p>`;
  }
    
  
}
function loadReviewList(showId) {
  //debugger
  // show has many reviews through the user for 3rd req
  $.getJSON(`/shows/${showId}/reviews`, json => {
    if (json.length !== 0) {
      $("#show-list").empty(); //hides the shows
      $("#reviews").empty();
      let reviewString = ""; //empty looking for the array
      json.forEach(item => {
        let myReview = new Review(item);
        reviewString += myReview.getAllReviews();
      });
      $("#reviews").append(reviewString); //inserting into another element
    } else {
      const message = "No reviews by you, please make one";
      $("#show-list").empty(); //hides the shows
      $("#reviews").empty();
      $("#reviews").append(message);
    }
  });
}

    $(() => {
        $('#new-review').click((e) => {
            $.get('<%= @user.id %>/reviews/new', (data) => {
                //debugger
                $('#review-form-container').prepend(data) //The .prepend() method inserts the specified content as the first child of each element in the jQuery collection
            })
        })
 $('#review-form-container').submit((e) => {
        e.preventDefault()

     //console.log($('form#new_review').serialize())//selecting the form 
     $.post('<%= @user.id %>/reviews', $('form#new_review').serialize(), (data) => {
         
         var template = Handlebars.compile($('#review-template').html())
    var add_review = template(data)
    $('#new_review_json').append(add_review)
   } , 'json')
$('#review_review').val('')
})
})


    <script id="review-template" type="text/x-handlebars-template">
        <p>Your new review: {{ review }}</p>
    