

// axios({
//     method: 'get',
//     url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=6a3d4129fdd8353bd4a6efffa4af75d6'


    function tempSuccess(response){
       const icon = response.data.weather[0].icon;
        $('#icon').prepend('<img src= "http://openweathermap.org/img/w/' + icon + '.png"/>')
        
        $('h4').text(response.data.main.temp, response.data.main.icon);

        $('h5').text(response.data.name)
    }
    
    function tempFail(error){
        console.log(error);
    }
    axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=6a3d4129fdd8353bd4a6efffa4af75d6'
      })

    .then(tempSuccess)
    .catch(tempFail);