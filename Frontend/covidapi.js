$.getJSON('http://127.0.0.1:5000/api/v1', function(data) {

  console.log(data);
  
  var text = `<tr><td>${data.total_cases.Country}</td>
              <td>${data.Active}</td>
              <td>${data.Recovered}</td>
              <td>${data.Deaths}</td>
              <td>${data.Comfirmed}</td></tr>`

  $(".mypanel").html(text);
  
});