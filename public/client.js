// client-side js
// run by the browser each time your view template is loaded


(function() {
  console.log('Fetch Example:');
  
  fetch('https://timestamp-js.glitch.me/July 31, 2017')
    .then( response => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.')
    })
    .then( response => {
      console.log('Sample url query: ', 'https://timestamp-js.glitch.me/July 31, 2017');
      console.log('Sample response: ', JSON.stringify(response))
    })
    .catch( err => console.error(err) );

}());
