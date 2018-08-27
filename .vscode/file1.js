//create an object
class Review {
  constructor(id, title, content, rating, user_id, book_id) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.rating = rating;
    this.user_id = user_id;
    this.book_id = book_id;
  }
}

//prototypes act like instance methods for a new object
//this prototype will take the json object and return html
//to be appended to DOM
Review.prototype.reviewHtml = function() {
  let newHtml = " ";
  newHtml += `<li>`;
  newHtml += `<b>Review Title:</b> ${this.title} <br>`;
  newHtml += `<b>Content:</b>${this.content}<br>`;
  newHtml += `<b>Rating:</b>${this.rating}<br>`;
  newHtml += `</li>`;
  return newHtml;
};

//loads reviews via jquery without a refresh
function loadReviews() {
  $("a.reviews_link").on("click", function(e) {
    $("a.reviews_link").hide(); //hides load reviews link
    $.get(this.href).success(function(reviews) {
      $.each(reviews, function(index, review) {
        $("ol.reviews").append(
          "<li>" +
            "<b>" +
            " " +
            "Review Title:" +
            "</b>" +
            " " +
            review.title +
            " " +
            "<br>" +
            "<b>" +
            "Content:" +
            "</b>" +
            " " +
            review.content +
            " " +
            "<br>" +
            "<b>" +
            "Rating:" +
            "</b>" +
            " " +
            review.rating +
            " " +
            // how do i capture username for review???
            "</li>"
        );
      });
    });
    e.preventDefault();
  });
}
