// import React, { useState, useEffect } from 'react';

function App() {

    const [clickCount, setClickCount] = useState(0);
    const increment = () => {
        setClickCount((count) => count + 1)
    }
    useEffect(() => {
        document.querySelector('h1').addEventListener('click', increment)
        return () => {
            document.querySelector('h1').removeEventListener('click', increment)
        };
    }, [clickCount]);



    return (
        <h1>Document Clicks: {clickCount}</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('App'))
root.render(<App />)