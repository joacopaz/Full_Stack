import React from 'react';
import ReactDOM from 'react-dom'
// React uses JSX (syntax extension for JS, it looks a lot like html). It has to be complied to be able to run (a browser won't be able to run it per se), a compiler translates JSX
const jsxElement = <h1> Hello World </h1>;

// Several JSXs can be save into an element
const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
};

// JSXs allow for several attributes to be added
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;

// JSxs can be nested, when using multi-line expressions it should be wrapped in ()
const theExample = (
    <a href="https://www.example.com">
        <h1>
            Click me!
        </h1>
    </a>
);

// JSXs must have only 1 outer most element
// This would work
const paragraphs = (
    <div id="i-am-the-outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);
// This would not 
/*
const paragraphs = (
    <p>I am a paragraph.</p> 
    <p>I, too, am a paragraph.</p>
); */

// JSXs must be>
// WARNING: JSXs don't use the class attribute, it's className
const warning = <p className="its not class, its className"></p> // class is a reserved word in JS, so className is used instead
// WARNING: Self closing tags HAVE to have the closing / like br, <br> would be unacceptable, although HTML would allow it
const goodBr = <br />;
const goodImg = <img src="" alt="" /> // notice the / at the end

// To add JS to your JSX you must use curly braces {}
const jsxWithJS = <h1>{1 + 2}</h1> // same as <h1>3</h1>
// Declare a variable:
const name = 'Gerdo';
// Access your variable from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
// Using variables to set attributes
// Use a variable to set the `height` and `width` attributes:
const sideLength = "200px";
const pandaTwo = (
    <img
        src="images/panda.jpg"
        alt="panda"
        height={sideLength} // using curly braces
        width={sideLength} />
);

// You can add event listeners to JSX, they are written in camel case
function alertFunc() {
    alert('Generating an alert.');
}
const alertImg = <img src="alert.jpg" alt="Alert Image" onClick={alertFunc} />

// You can't inject conditionals into JSX
const wrongConditional = (
    <h1>
        {
        if (purchase.complete) { // error
            'Thank you for placing an order!'
        }
      }
    </h1>
)
const user = { age: 15 };
// You can, instead, use ifs outside
let message;
if (user.age >= 18) {
    message = (
        <h1>
            Hey, check out this alcoholic beverage!
        </h1>
    );
} else {
    message = (
        <h1>
            Hey, check out these earrings I got at Claire's!
        </h1>
    );
}
// You can use ternary instead
const rightConditional = (
    <h1>
        {
            purchase.complete ? 'Thank you for placing an order!' : 'Please complete the purchase.'
        }
    </h1>
)
// Or you can use && to check for truthy values, if the left is true then the right renders, for example:
const tasty = (
    <ul>
        <li>Applesauce</li>
        {!baby && <li>Pizza</li> /* If not baby then pizza will render */}
        {age > 15 && <li>Brussels Sprouts</li> /* If older than 15 then brussels will render */}
        {age > 20 && <li>Oysters</li> /* if older than 20 then Oysters will render */}
        {age > 25 && <li>Grappa</li> /* if older than 25 then grappa will render */}
    </ul>
);

// You can use map to create new elements
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
const itemList = <ul>{listItems}</ul>

// If a rendered list will be rendered a lot of times and order matters then you may add keys so that react remembers the order:
const listWithKeys = (
    <ul>
        <li key="li-01">Example1</li>
        <li key="li-02">Example2</li>
        <li key="li-03">Example3</li>
    </ul>
)

// Injecting inline styles into jsx

const styles = {
    color: 'darkcyan',
    background: 'mintcream'
};

const injectedJsx = (
    <ul style={{ color: 'green', textAlign: 'center' }}>
        <li style={styles}></li>
    </ul>
)