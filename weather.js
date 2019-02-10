

// axios({
//     method: 'get',
//     url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=6a3d4129fdd8353bd4a6efffa4af75d6'
//   })
//     .then((response) => {
//         console.log(response)
//       const temp = response.data.main.temp;
      
//       $('h4').text(`<h4>${temp}</h4>`);
    
//     })
//     .catch((error) => {
//       console.log(error);
//     });

    function tempSuccess(response){
        console.log(response.data.main.temp);
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