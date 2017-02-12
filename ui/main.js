//Counter code
var button = document.getElementById("counter");
var counter = 0;
button.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onsteadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET', 'http://ansonfertal.imad.hasura-app.io/counter', true);
    request.send(null);

};