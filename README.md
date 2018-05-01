# PhantomClosetBackend

<h1>Background:</h1>
    <p>The server is divided into a public and private route path.  All requests that are prepended with "/public" do not need a token to compete a request.  All requests prepended with "/private" require a header with "authorization: token"</p>
    <p>Ultimately, there will be two routes under the "/private" route for customer and administer role.  This is not currently the case, however.</p>

<h1>RESTful API request</h1>
    <h2>Public</h2>
        <h3>POST Requests</h3>
            <h4>Sign In</h4>
            <h4>Create User</h4>
    <h2>Private</h2>
