# PhantomClosetBackend

<h1>Background:</h1>
    <p>The server is divided into a public and private route path.  All requests that are prepended with "/public" do not need a token to compete a request.  All requests prepended with "/private" require a header with "authorization: token"</p>
    <p>Ultimately, there will be two routes under the "/private" route for customer and administer role.  This is not currently the case, however.</p>

<h1>RESTful API request</h1>
    <h2>Public</h2>
        <h3>POST Requests</h3>
            <h4>Sign In</h4>
                <p>When there is a post request to <em>localhost:3000/public/signin</em>, the server expects a username and password to be in the body.  Here is an example:</p>
                <h6>{
                	"password": "password",
                	"username": "testusername"
                    }
                </h6>
                <p>If the sign-in is in the database (passwords are stored as hashes with salt) i.e. valid, the server with response with a token.  For example</p>
                <h6>'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjUxOTU3MDAsImV4cCI6MTUyNTgwMDUwMH0.i53Bi9c6jWLeQtbAv-gCfSgdWlYiGb-iS8AmopbNEt0'</h6>
                <p>Else, the server will respond with the string:</p>
                <h6>'Invalid username and/or password.'</h6>
            <h4>Create User</h4>
                <p>When there is a post request to <em>localhost:3000/public/createaccount</em>, the server expects and object with a username and password.  Here is an example:</p>
                <h6>{
                	"password": "password",
                	"username": "testusername"
                    }
                </h6>
                <p>All passwords are entered hashed and salted into the database.  If the username is already in the database, it will reject the account because usernames must be unique.  When a user is successfuly added, the server will respond with the string:</p>
                <h6>'User added.'</h6>
    <h2>Private</h2>
