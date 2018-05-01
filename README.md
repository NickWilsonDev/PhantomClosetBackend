# PhantomClosetBackend

<h1>Background:</h1>
    <p>The server is divided into a public and private route path.  All requests that are prepended with "/public" do not need a token to compete a request.  All requests prepended with "/private" require a header with "authorization: token"</p>
    <p>Ultimately, there will be two routes under the "/private" route for customer and administer role.  This is not currently the case, however.</p>

<h1>RESTful API request</h1>
    <p></p>
