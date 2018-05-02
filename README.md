# PhantomClosetBackend

<h1>Background:</h1>
    <p>The server is divided into a public and private route path.  All requests that are prepended with "/public" do not need a token to compete a request.  All requests prepended with "/private" require a header with "authorization: token"</p>
    <p>Ultimately, there will be two routes under the "/private" route for customer and administer role.  This is not currently the case, however.</p>
<h1>How to Set Up Your .env File</h1>
    <p>DB_PATH=postgres://<strong>{insert_username}</strong>@localhost:5432/pc</p>
    <p>SIGNATURE=<strong>{insert_any_password}</strong></p>
<h1>RESTful API request</h1>
    <h2>Public</h2>
        <h3>GET Requests</h3>
            <h4>Sets</h4>
                <p>When there is a GET request to <em>localhost:3000/public/sets</em>, the server will respond with an array of all the unique sets.  Here is an example response</p>
                <h6>[
                        "Happy Holidays",
                        "Portal Demo Game",
                        "Wizards of the Coast Online Store",
                        "Magic Player Rewards",
                        "Pro Tour",
                        "Release Events",
                        "Summer of Magic",
                        "Media Inserts",
                        "Prerelease Events",
                        "Judge Gift Program",
                        "Unhinged",
                        "Magic Game Day",
                        "Legend Membership",
                        "Worlds",
                        "Launch Parties",
                        "Unglued",
                        "Super Series",
                        "Unstable",
                        "Wizards Play Network",
                        "World Magic Cup Qualifiers",
                        "setName"
                    ]
                </h6>
            <h4>Cards By Name</h4>
                <p>You can search for cards by name by sending a GET request to <em>localhost:3000/public/cards/</em><strong>{insert_name}</strong>.  You can represent spaces with <em>%20</em>.  It will ignore capitalization.  It will return an array of card objects.  This may include the same card from multiple sets.  This query has wildcards on either side of the query.  Therefore, a query "cat" can return the card object for "a <strong>cat</strong>egory of things" and "<strong>Cat</strong> Warrior".</p>
            <h4>Cards By Name Autocomplete</h4>
                <p>You can also do a query for card titles where the wildcard is only at the end at <em>localhost:3000/public/autocomplete</em>.  It will return and array of card titles, <strong>not an array of full card objects</strong>.
        <h3>POST Requests</h3>
            <h4>Sign In</h4>
                <p>When there is a post request to <em>localhost:3000/public/signin</em>, the server expects a username and password to be in the body.  Here is an example:</p>
                <h6>{
                	"password": "password",
                	"username": "testusername"
                    }
                </h6>
                <p>If the sign-in is in the database (passwords are stored as hashes with salt) i.e. valid, the server will respond with a token.  For example</p>
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
