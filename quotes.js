// axios({
//    method: 'get',
//    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
// })
// .then((response) => {
// console.log(response);

// })
// .catch((error) => {
// console.log(error);
// });

function textSuccess (response){
    $("p").text(response.data.quoteText)
    $("footer").text(response.data.quoteAuthor)
}

function textFail(error){
    console.log(error);
}

axios({
    method: 'get',
    url:"https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
  })
  .then(textSuccess)
  .catch(textFail);


//   .then((response) => $("footer").text(response.data.quoteText))

// $("footer").text(response.data.quoteAuthor)
//   .catch((error) => console.log(error));

