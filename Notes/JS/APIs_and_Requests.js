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

import fetch from "node-fetch"

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
// Same GET request (using a real API) but with an async function
const getSuggestions = async () => {
    const wordToQuery = 'dog' // we can get the word from an input field, here I just hard code it
    const url = 'https://api.datamuse.com/words?' // gets similar words based on a score
    const queryParams = 'rel_jja='
    const endpoint = url + queryParams + wordToQuery;
    try {
        const response = await fetch(endpoint, {
            cache: 'no-cache'
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            jsonResponse.forEach((result, i) => {
                if (i < 10) console.log('Word ' + (i + 1) + ': ' +
                    result.word) // we log the first 10 results
            })
        }
    } catch (error) {
        console.log(error);
    }
}
getSuggestions()

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

// Same POST request (using a real API) but with an async function

const apiKey = '1b240c2dc4734a4ba22eb03d8ba97217';
const url = 'https://api.rebrandly.com/v1/links'; // shortens urls

const shortenUrl = async () => {
    const urlToShorten = 'https://joacopaz.com'; // we input the url (we can use an input field)
    const data = JSON.stringify({
        destination: urlToShorten
    });
    try {
        const response = await fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json',
                    'apikey': apiKey
                }
            }

        );
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse.shortUrl); // we console log the new shortened url (urlToShorten)
        }
    } catch (error) {
        console.log(error);
    }
}
shortenUrl()