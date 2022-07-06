# Web Apps

Web Apps are much more complex than Web Pages. They are usually designed in 3 layers:

- Presentation Layer (Web Browser)
- Application Layer (Server)
- Storage Layer (Database)  
  This design focuses on enhancing protection by safeguarding each layer on a need-to-know basis.
  If the App is too complex further layers may be added (like an integration layer between the Application and the Storage layer)

> SPA stands for Single Page Applications

Since SPA's scale up in complexity quite fast, using plain JS is not recommended. That's why we can use:

- React: Focuses on creating components that can render themselves differently based on the application's state and user data.
- Vue.js: The most traditional/easier to learn, templates a single HTML file while the application logic controls what is rendered.
- Other libraries: AngularJS, Ember.js, ExtJS, Knockout.js, and Meteor.js. These share the similar goals, but each take a different approach at building SPAs.

# Starting with React

Run npx create-react-app appname, inside this folder it has been runned to create sampleapp.
