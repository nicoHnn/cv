$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function jsa(data) {
      console.log(data);
    }
  })
