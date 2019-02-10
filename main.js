
function imageSuccess(response){
    console.log(response.data.urls.regular);
    $('body').css('background-image', 'url("' +response.data.urls.regular + '")');
}

function imageFail(error){
    console.log(error);
}
axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=30c28bd5f883661a91f5877e2e3251202af9cfb0cb993b976e320947d3f6167e'
})
.then(imageSuccess)
.catch(imageFail);


