/* 
Two main categories of APIs -> browser APIs and 3rd party APIs.

Browser APIs focus on giving developers access to information the browser can provide (like geolocation, audio, vr, cryptography)

Third party APIs are usually created by companies to provide a service, like OpenWeather API for the weather.
*/

/* 
REST stand for Representational State Transfer.
It's an architectural style for providing standards between computer systems on the web making it easy for systems to communicate with each other
Database -> web server -> restful api -> your web application 
A good REST paradigm is stateless, the server does not need to know anything about the client and vice versa. They interact via resources. REST requires that a client make a request to the server to retrieve or modify data. A request consists of:

> an HTTP verb, which defines what kind of operation to perform
    C POST — Create a new resource -> returns code 201 (CREATED)
    R GET — Retrieve a specific resource (by id) or a collection of resources -> returns code 200 (OK)
    U PUT — Update a specific resource (by id) -> returns code 200 (OK)
    D DELETE — Delete, remove a specific resource by id -> returns code 204 (NO CONTENT)
    Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most.

> a header, which allows the client to pass along information about the request

> a path to a resource

> an optional message body containing data

 --- Requests ---

 The fetch() function:
    Creates a request object that contains relevant information that an API needs.
    Sends that request object to the API endpoint provided.
    Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.
*/

// GET request
fetch('https://api-to-call.com/endpoint').then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => {
    // Code to execute with json response
    console.log(jsonResponse) // we get the info and read it
})

// POST request
fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({
        id: '200'
    })
}).then(response => {
    if (response.ok) {
        return response.json()
    };
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message)).then(jsonResponse => {
    // Code to execute with json response
})