$.ajax({
    url: "https://data.austintexas.gov/resource/r3af-2r8x.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "EoIlIKmVmkrwWkHNv5TsgP1CM"
    }
}).done(function(data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
