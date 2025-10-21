//Full Stack Dev Inerview Questions 


// Q1. What do you mean by Hoisting in JavaScript ?
// 	Hoisting in Javascript refers to the behavior where a declared variable or a function is moved or hoisted to the scope in which they exist, during the compile phase.
// -	3 types of hoisting  ->
// -	1.  Variable Hoisting – Only the declaration are hoisted, not the initializations
// -	2. Function Hoisting – Function declarations are fully hoisted, meaning you can call a function even before you define it it the code
          greet();
          function greet() {
            console.log("Hello");
          } 

//      3.Let and const - variable declared with let and const are also hoisted but are not initialized 
//                          they exist in a temporal dead zone          
               





// Q.2 What is the differance between localStorage and sessionStorage ?

  // - 1. LocalStorage - Data stored in localstorage has no expiration time. it remains available even after the browser or tab is closed and will persist untill
                         // it is explicitly deleted by the user or through code.
                         //ex - amazon add to cart 
                         // Data Persists untill explicitly deleted
                         // Scope Shared across tabs of the same origin
                         // Use cases Long term storage

  // - 2. sessionStorage - Data stored in sessionStorage is tied to the specific session or the browser session of the browser. it gets cleared when the browser tab is closed, meaning the data is only available as long as the 
                          // the tab or window is open. 
                          // Data Cleared when the tab is closed
                          // Scope Unique to each tab or window
                          // Use Cases Temporary storage



// Q.3 How can page laoding time be reduced?

         // -> 1.Optimize images - Use formats like webp, which offers smaller file sizes with good quality.
        // 2. Minimize HTTP Requests - Combine CSS and JavaScript files where possible
        // 3.Enable Browser Caching - Allow browsers to store some elements of the page 
          // (Caching means when we visit a new website at first time the data like images or videos are fetches from the main server 
          // and at second time when we visited this website afer some time we dont fetch data from main server we stored data in localstorage when we fetches at first time and this localstorage data we use for second time it is called caching  )
    // 3.Content Delivery Network(CDN) - Reduces latency by serving it from a server closest to the user.
    //4. Use Lazy Loading - Delay the loading of images and videos until they are needed



// Q.4 What is the difference between SOAP and REST ?


    //-> SOAP -> A Strict set of rules for sending messages
    // -> REST -> A way to use existing web rules to get data 
    
    // Data Format -
           // SOAP only uses XML(more complicated)
           // RESt can use JSON, XML, or even plain text (easier)

    // Connection Type - 
            //SOAP Can remember past request(stateful) or not 
            // REST Doesnt remember past requests(statless)  
            
    // How it works - 
             // SOAP - Uses its own rules for sending and receiving
             // REST - USes standard web methods like POST, PUT, GET etc..     
             
             
        //  In Summary, the major differance between SOAP and REST is that is a protocol with strict standards and advanced features,
        // making it suitable for complex, secure applications, while REST is an architectural style that is simpler and more flexible, making 
        // it ideal for web services that require speed and scalability.   


     

                
        
// Q.5 How is GraphQL different from REST ?
        
        // Data Fetching 
          // GraphQL single endpoint for all queries 
          // REST Multiple endpoints for different resources


        // Responses Structure 
           // GraphQL Client defines structure of the response 
           // REST Server defines structure of the response


        // Over/Under-fetching 
             // GraphQL Reduces over-fetching and under fetching 
             // RESt Often leads to over-fetching or under-fetching


        // GraphQL is single Endpoints 
        // REST is Multiple Endpoints

        // fixed structure in rest
        // flexible Queries in GraphQL


    // While both GraphQl and a typical REST API can achieve similar end results, their approaches differ significantly. 
    // In REST APIS like JSONPlaceholder, you fetch data from a specific endpoint and perform filteing on the client-side, while in 
    // GraphQl, you can tailor You queries to retrieve only the necessary data directly from the server.



    

 // Q.6 What are the components of a CSS box model ?

       // 1. Content -> This is the actual content of the box, such as text, images, or other media. The size of the content area can be controlled using properties like width and height.
       // 2. Padding - This is the space between the content and the border. The padding adds space inside the element, effecting increasing its size without affecting the actual content. You can control the padding using the padding property.
       // 3.Border - The border surrounds th padding (if any) and the content. it can be styled with various width. colors, and styles (solid, dashed, etc.). The borders dimensions can be controlled using properties like border-width, border-style, and border-Color
       // 4.Margin - This is the space outside the boder, creating space between the element and its neighboring elements. margins do not affect the size of the element itself but create space around it. You can set margin using the margin property.

  
 
       
// Q.7 What is the differance between a class slector and an id selector in CSS ?

     // -> Class Selector - Can be applied to multiple elements. You can use the same class on different HTML elements 
                          // Has lower specificity that id selectors 

     // -> ID Selector - each should be assigned to only one element Has higher specificity than class slectors                     




 // Q.8 What are the various data types present in JavaScript ?    

        // 1.Primitive (immutable)
        // 2.Non-primitve (Mutable)


        // 1.Primitive (immutable) - > 
                  // Number - Represents both integer and floating points numbers  ex - 5,3.14, -10
                  //BIGINT - Used to represent numbers larger than the number data type can handle.created by adding an n to the of an integer. example - 1234567854635234234234n
                  // String - represents a sequence of characters(text) ex - 'hello', "Hello", `hello`
                  // Boolean - represents logical values: true or false , ex - true, false
                  // Undefined - represents a variable that has been declared but has not been assigned a value. ex - let x;
                  // NULL - Represents an intentional absense of any object value. often used to indicate that variable has no value. ex - let y = null;
                  // Symbol - represents a unique and immutable value, often used as object keys, Symbol are useful for adding properties to objects that you want to keep hidden or private.ex - let sym = Symbol(description)
        

        // Non-Primitive - 
                  // Represents a collection of key-value pairs.
                  // Can be used to store various data types and complex structures.   
                  // ex - 
                     let person = {
                        name: 'Anil', 
                        gender: 'Male', 
                        Roll_No : '07'
                     }       



// Q.9 What is DOM ? 
        // -  The Document Object Model (DOM) is a programming interface for web documents. it represents the structure of a webpage as a tree of objects, where each element in the HTML or XML document is a node in the tree. Through the DOM, Programming languages like 
        // JavaScript can interact with and modify the content, structure, and style of a webpage dynamically                  

       // - The Document is the root of the DOM tree, represening the entire web page
       // - The Html element is the parent node, containing two main children : head and body 
       //  - The head element contains a title node with the text "DOM Example"

             // The body element contains multiple child nodes:
               // - An h1 node with the text "hello, world"
               // - A P node with the text "this is the paragraph"

        // Document - The entire webpage is represented as a document
        // Nodes -  Each element (like <div>, <p>, <img>) is a node in the tree.
        // Tree structure - These nodes form a hierachical structure, with parent and child relationships, similar to a family tree





// Q.10 What is the this keyword in javaScript ? 

        // In javascript, the this keyword refers to the current execution context or the object that is currently executing the code.its values can vary depending on how a function is called.
        //ex - 
        // const button = document.getElementById('myButton');
        // button.addEventListener('click', function() {
        //     console.log(button);
        //     button.textContent = 'You Clicked Me !';
        // });

        // This above code we can write as 
         const button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            console.log(this);
            this.textContent = 'You Clicked Me !';
        });




// Q.11 What are the advantages of using CDN ?
       // -> 1.Reduces the distance data has to travel, resulting in faster loading times for users
       // 2. if one server fails, requests can be routed to the next nearest server, ensuring availability
       // 3.  Optimizes content delivery and reduces the amount of data transferred from you origin server   
       // 4. Can handle large amounts of traffic by distributing the load across multiple servers
       // 5. Provides DDoS protection and web firewalls to secure the website
       // 6. Faster load times and improved performance enhanced user experience
       // 7. Content caching (avoid go and forth second time same as caching concept above )
       // 8. Provides localized content delivery, improving access for users around the world




// Q.12 What is the difference between event bubbling and capturing in javaScript ?  
      // - Event Capturing - The event starts from the top of the DOM tree and travels down to the target element,
                           // - Allows the parent to respond to the click before the child. in the capturing phase, the parent's event hanlder is triggered before the child's
      // - Event Bubbling - The event starts from the target element and travels up to the top of the DOM tree     
                          // Allows the child to respond first and then parent, demonstrating the natural flow of events.






// Q.13 What is 'use strict' in javaScript ?
             // -> 'use strict' enforces stricter parsing and error handling in the javaScript code, Helping to catch common mistakes, prevent certain actions that could lead to bugs, 
               // and make the code more predictable and easier to maintain 
               
               
               

// Q.14 What is the differance between cookies and local storage ?
               // -> Cookies - primarily used for session management, personalization, and tracking user behavior
                               // When you log into a website(like Gmail), a cookie is created to remember you login session
                               // A Website like Amazon uses cookies to remember your preferences 
                               // Website often use cookies to track user behavior for analytics
               // -> Local Storage - Used to store larger amounts of data on the client side for web applications
                                // Online games can use local storage to save your progress, scores, and settings so that when you return to the game later, you can pick up right where you left off





// Q.15 How can you prevent a bot from scrapping your publicly accessible API ?        
           // ->1. Limiting the number of requests a user can make to an API within a certain period of time.
           // 2.CAPTCHA stands for "Completely Automated Public Turing test to tell Computers and Humans Apart." it Verifies whether you're a real person or a bot.
           //3. A Honeypot is like a trap for bots. It's hidden element that real users never see or interact with, but bots will.
           //4. Obfuscation means making your API endpoints(the web address your API uses) less obvious or harder to find.
           // 5. Spotting anything that looks unusual or suspicious, like a sudden spike in request.

             









 // ####################  REACT  #######################



 // Q.1 Explain Virtual DOM, and how it works ?
        // -> The Virtual (Virtual Document Object Model) is a concept used to improve the efficiency of updating the user interface(ui)in web applications, 
        //especially in javaScript frameworks like React. it acts as lightweight copy of the real DOM, allowing changes to be made quickly without directly modifying the actual DOM each time.




// Q.2 What is state Management in Rect ?
       // State Management involves controlling the flow and handling of data within your app to ensure the ui responds correctly to user inputs and data changes        
    // Types of state Management ->
              // 1.Component state - use state and use effect
              // 2. Props Drilling - passing the message from parent to child
              
                            function App(){
                              const message = "Hello from the parent component";

                              return (
                                <div>
                                    <h1>Parent element</h1>
                                    <MiddleComponent message = {message} />
                                </div>
                              )
                            }
                            export default App;




                            // Middle Component
                            const MiddleComponent = ({message}) => {
                              return (
                                <div>
                                  <h2>Middle Component</h2>
                                  <childrenComponent message = {message} />
                                </div>
                              )
                            }
                          //  export default MiddleComponent;



                          // Child class 
                          const childrenComponent = ({message}) => {
                            return (
                              <div>
                                <h3>Child Component</h3>
                                <p>Message: {message}</p>
                              </div>
                            )
                          }

              // 3. Context API  - for global state management 
              // 4. State Management Libraries - redux and all







// Q.3 What are some commalny used hooks in React ?

      //1.Use State - Used for creating variables that can change over time.
      //2.UseEffect - Lets you perform side effects in your component, such as data fetching, subscriptions, or manually updating the DOM
      //3.useContext - Used to access data from a context in your component





// Q.4 Explain the component lifecycle in React 
       // -> The Component lifecycle in React refers to the sequence of events that happen to a component from its creation(mounting) to its removal(unmounting)   
       // Constructor(), render(), componentDid(), shouldComponentUpdate()
       // Mounting - When the component is created and inserted into the DOM
       // Updating - When the component's state or props change
       // Unmounting - Shutting down the process



// Q.5 What is Context API, and how is it different from props ?  

      //-> The Context API is a feature in React that allows you to share state and data accross components without having to pass props down manually at every level. it helps manage global 
      // state and avoids "prop drilling" where you have to pass data through any layers of components


      // props - Pass data from parent to child components.
      // Context API - Share global state across multiple components.


      // Props - Explicitly passed down through component hierarchy. 
      // Context Api - Accessed directly from any component that consumes the context.

      // Props - Components are tightly coupled to their parents.
      // Context Api - Components can be more reusable and independent.

      // props - can lead to prop drilling in deeply nested structures.
      // Context API - Avoids prop drilling any child can access the context directly.

      // Props - Simple and straightforward
      // Context Api - Requires setup of provider and consumer components.






// Q.6 How can you optimize performance within a React application ?   

   // -> Built-in Performance optimization - PureComponent and React.memo
   // -> Code Spliting - Load Parts when needed 
   // -> Optimize Context Usage - Be Smart with Shared Data
   // -> Memoiztion  - Remember Calculations and Functions
   // -> Reduce Components Re-renders - Control when components update




// Q.7 What do you mean by a higher-order component in React ?

     // -> A higher-Order Component(HOC) is a function that takes a component as an argument and returns a new Component. 
     // HOCs are a pattern for resuing component logic.




// Q.8 How do you handle forms in React ?
  // -> 1.Managing the form inputs 
  // 2.Capturing user input 
  // 3.Responding to form submission


 // Q.9 Waht is server-side rendering,and how is it beneficial ?
       // -> Server-side rendering (ssr) is a technique where a web page is rendered on the server before it is sent to the user's browser.
       //Instead of sending a blank HTML file with JavaScript code that builds the page on the client side. the server generates the HTML with content already included and sends it to the browser.

      // beneficial -> 
         // 1. Faster initial Load - since the HTML is pre-renderd on the server, the browser can display the content quickly, improving the preceivert load time for users.
         // 2.Better Search engine optimization - Search engines can easily index the content of server-rendered pages because they dont need to execute javaScript to see the content.
         // 3.Improved performance - since most of the rendering is done on the server client devices dont need to do as much work to render the page which helpful for users on slower or less powerful devices.
         // 4.Reduced interaction time - With SSR, users can interact with the content more quickly because they dont have to wait for the javaScript to fully load before seeing anything.


// Q.10 What do you understand by Redux in React ?
     // -> In React, components manage their own internal state, but as application grows, managing shared state between multiple componets can become complex.
     // this is where Redux helps by providing a single global state that any component can access.        
     
     // basically redux collects all the resources in common perticullar storage and this storage being guarded by manager 







// ######################### NODE JS ######################################





  // create server on Node js --> 


  // const http = require('http');
  // const port = 3000; 

  // const server = http.createServer((req, res) => {
  //     res.writeHead(200, {'Content-Type':'text/plain'});
  //     res.end();
  // })

  // server.listen(port, () => {
  //   console.log(`Server listening on port ${port}`);
  // })



  // create server on Express Js

  const express = require('express');
  const app = express();
  const port = 3000;


  app.get('/', (req, res) => {
    res.send("Hello World")
  })


  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  })





 // Q.1 Explain Asynchronous and Non-Blocking programming
      // ->  Asynchronous programming allows your code to start a task and move on to the next one without waiting for the previous task to finish.
      // -> Non-blocking programming refers to the way Node.js handles tasks without stopping(or blocking) the execution of other tasks.

      // Asynchronous refers to the timing of tasks-tasks run independently and notify when they're done.
      // Non-blocking refers to the behavior of the code- ensuring that no task waits or holds up the system.



//Q.2 What is the Event Loop in Node.js ?
   // -> The Event Loop in Node.js is a mechanism that handles asynchronuous operations. it allows Node.js to perform non-blocking
   // input output operations, even though javascript is single-threaded. 
   
   


//Q.3 What is Middleware in Express.js ?
    // -> Middleware in Express.js is a function that has access to the request object(req), te response object(res), and the next middleware function in the application's request-response cycle.
    // Middleware - 1.Logging, 2.Data Parsing, 3.Authentication
    // they can be - Checks if the request is valid 
    //             - logs the request details
    //             - Parses incoming data   


//Q.4 How does Node.js handle child threads ?
    // -> Node.js handles child threads by using worker threads for parallel processing and child processes for creating independent process.
    // The event loop and non-blocking i/o handle most asynchronous tasks, ensuring that Node.js remains efficient and fast.



// Q.5 What are Streams in Node.js ?
    // -> In Node.js streams are a way to handle reading or writing data continuously, piece by piece, rather than all at once.
    // they are particularly useful for dealing with large amounts of data or data that is being received over time, like files, network request, or any process that requires data to be proccessed gradually.
    
      // types of streams ->

             // 1.Readable Streams - used to read data. example include reading files from the file system or receiving data from an HTTP request.
             // 2.Writable streams - Used to write data, ex- includes writing data to a file or sending a response to an HTTP request
             //3.Duplex Streams - Both readable and writable streams. they can read and write data independently
             //4/Transform Streams - A Special type of duplex stream that can modify or transform the data it is being read or written.



// Q.6 What is Callback hell, and how can we fix it ?
     //-> Callback hell refers to a situation in programming, especially in javascript, where multiple nested challbacks (functions executed after a task is completed) make the code difficult to read, understand, and maintain.    

        // ex -> 
                doSomething(function(result){
                  doSomethingElse(result, function(result2) {
                    doAnotherThing(result2, function(result3){
                      dofinalThing(result3, function(result4) {
                          console.log('All done ! and result :', result4);
                      })
                    })
                   
                  });
                });


        // this type of calling function is very wiered thing it doesent look great or efficeient its looking messed up all  
        // for this problem we have a solution like using 
         
           // 1. Promises ->
                doSomething()
                      .then(result1 => doSomethingElse(result1))
                      .then(result2 => doAnotherThing(result2))
                      .then(result3 => dofinalThing(result3))
                      .then(result4 => console.log('All done !'))
                      .catch(error => console.error('Error;', error));

        // Promises help to flatten the nested callbacks and make the code more readable.    
        
            // 2. Async / Await 
                      async function processTasks() {
                        try {
                          const result1 = await doSomething();
                          const result2 = await doSomethingElse(result1);
                          const result3 = await doAnotherThing(result2);
                          const result4 = await foFinalThing(result3);
                          console.log('All done !');


                        } catch(error) {
                          console.log('Error:', error);
                        }
                      }

                      processTasks();


                // Async/await is a more modern approach that makes asynchronous code look like synchronous code.      
                

            // 3. Modularize the code - 
                       function handleResult1(result1) {
                        doSomethingElse(result1, handleResult2);
                       }

                       function handleResult2(result2){
                        doAnotherThing(result2, handleResult2);
                       }
                       function handleResult4(result4) {
                        console.log('All done!');
                       }

                       doSomething(handleResult1);

               // Breaking the code into smaller, modular functions can make it more organized and reduce the nesting.        




    
// Q.7 How do Promises improve callback handling ?
      // -> Promises allow you to chain asynchronous operations using .then(), making the code more linear and readable               
                doSomething()
                      .then(result1 => doSomethingElse(result1))
                      .then(result2 => doAnotherThing(result2))
                      .then(result3 => dofinalThing(result3))
                      .then(result4 => console.log('All done !'))
                      .catch(error => console.error('Error;', error));
   
         // We can achieve 1.Readability, 2.Error Handling, 3.Flexibility                 



// Q.8 What is the purpose of package.json()
      // -> The package.json file servers as the central configuration file that defines important information about the project.
      // imp info like - 1.project Metadata , 2. Version Control
      //                 3. Dependencies      4. PD Management
      //                 5. Scripts           6.Project Configuration       
      
      


// Q.9 What is the difference between process.nextTick() and setImmediate() ?
      // -> process.nextTick()
      // - Use process.nextTick() when you need to run code immediatly after the current operation. with a higher priority that i/o tasks.   
      // 1.Runs after the current code finishes but before the next event loop cycle start.
      // 2.Always runs before setImmediate() if called at the same time.
      // 3.For tasks that need to run immediately after the current operation finishes.
      //4. Higher priority, runs sooner than setlmmediate().
      console.log("Start");
       
      process.nextTick(() => {
        console.log("NextTick has been called !");
      })

      setImmediate(() => {
        console.log("Set Immediate has been called")
      });

      console.log("End")

      // -> setImmediate()
      // - Use setImmediate() when you want to defer the execution of code untill the current I/O operations are complete and u can wait for the next event loop cycle.
      //1. Runs in the next cycle of the event loop, after I/O operations are completed.
      //2. Runs after process nextTick() even if called at the same time.
      //3. For Tasks that can wait until the event loop cycle is free to execute
      //4. Lower priority, runs later than process.nextTick().





// Q.10 How can you handle erros in Node.js ?
     // -> Error handling in Node.js is important to ensure that your application runs smoothly and can recover from unexpected issues.
     // Multiple ways to handle errors ->
         // 1.Try-Catch Block
         //2. Asynchronous Callbacks
         //3. Promises 
         //4. Global Error Handling 

         // Use try-catch with async/await
         // Always handle promise rejections
         // Avoid using process.exit() in error handlers
         // Use Error Objects.













         // #################################### Express.Js ########################################


// Q.1 How do you handle routing in Express.js ?
      // -> In Express.js, routing is handled using the Router class, which allows you to define routes for your application.    

      //ex- 
      const express = require('express')
      const aboutRouter = express.Router();
    
      const port2 = 3000

      aboutRouter.get('/achivement', (req, res) => res.send('Hello World !'))
            aboutRouter.get('/header', (req, res) => res.send('Hello World !'))
                  aboutRouter.get('/footer', (req, res) => res.send('Hello World !'))
      aboutRouter.listen(port2, () => console.log(`Example app listening on port ${port}!`))
     module.exports = aboutRouter;





// Q.2 What are the differences between req.params, req.query, and req.body ?
     //-> In Express.js, req.params, req.query, and req.body are used to access data sent in an HTTP request

      // ex - req.params

      app.get('/users/:userId', (req, res) => {
        const userId = req.params.userId;  // access userId from the url
        res.send(`User ID is ${userId}`);
      });


      // req.query

      app.get('/users', (req, res) => {
        const sort = req.query.sort; // access sort parameter from the query string

        const age = req.query.age;
        res.send(`Sort order : ${sort}, Age: ${age}`);
      });


      // req.query 
  
         app.get('/users', (req,res) => {
          const newUser = req.body;  // Access data sent in the request body

          res.send(`New user created: ${JSON.stringgify(newUser)}`)
         });  




// Q.3 What are middleware functions in Express, and how do they work ?

      // -> Midddleware functions in Express are functions that have access to the request object (req), the response object (res),
           // and the next middleware function in the application's request-response cycle.

           // Types of middleware ->
                 // 1.Application-Level Middleware - the middlware that can access everything inside the code 
                          // ex - 
                                const express = require('express')
                                const app3 = express()
                                const port3 = 3001
                                
                                app3.get('/', (req, res) => res.send('hello wordl !'))

                                app3.use((req, res, next) => {
                                  console.log("Received")
                                  next();
                                })

                                app3.listen(port3, () => console.log(`Example app listing on port ${port}`));


                 // 2.Router-Level Middleware -  which is only specify to the specific router level.

                           //ex - 
                           const express = require('express')
                           const aboutRouter1 = express.Router();
    
                           const port4 = 3003

                              aboutRouter1.get('/achivement', (req, res) => res.send('Hello World !'))

                               aboutRouter1.use((req, res, next ) => {
                                    console.log("received");
                                    next();
                               })

                              aboutRouter1.get('/header', (req, res) => res.send('Hello World !'))

                              aboutRouter1.get('/footer', (req, res) => res.send('Hello World !'))

                              aboutRouter1.listen(port2, () => console.log(`Example app listening on port ${port4}!`))
                             module.exports = aboutRouter1;

                 // 3. Error-Handling -  which is for handling the errors.


                               const express = require('express')
                           const aboutRouter2 = express.Router();
    
                           const port5 = 3003

                              aboutRouter2.get('/achivement', (req, res) => res.send('Hello World !'))

                               aboutRouter2.use((err, req, res, next ) => {
                                    console.log("received");
                                    console.error(err);
                                    next();
                               })

                              aboutRouter2.listen(port2, () => console.log(`Example app listening on port ${port5}!`))
                             module.exports = aboutRouter2;



            
                             
 // Q.4  How can you hanlde errors in an Express application ?
     // -> 1.Error-handling middleware
        // 2. 404 handling
        // 3. Custom error types                          



// Q.5 What is the role of body parsers in Express, and how do you use them ?
     // ->  Body parsers make it easier to work with data sent from a client to a server. for example, if a client sends JSON data in a post request, 
           // The body parser will convert that JSON string into a javaScript object, so you can access the values directly. 


                           const express = require('express')
                           const app5 = express.Router();
                           const bodyParse = require('body-parser');
                           app5.use(bodyParser.urlencoded({extended:true}));

                              app5.get('/achivement', (req, res) => res.send('Hello World !'))

                              app5.post('/form', (req, res) => {
                                console.log(req.body);
                                res.send("Message received");
                              })

                     
                              app5.listen(port2, () => console.log(`Example app listening on port ${port5}!`))
                             module.exports = app5;



// Q.6 How do you implement authenitcation and authorization in Express ?
       // ->  Authentication -  is the process of verifying the identity of a user
       //     Authorization - determines what actions the authenticated user is allowed to perform    
       
       
       // ex - 
          const express = require('express')
          const app6 = express()
          const port6 = 3006
          const jwt = require('jsonwebtoken');
          const bodyparser1 = require('body-parser');

          app6.use(express.json());
          app6.use(bodyParser.urlencoded({extended : true}));

          const SECRET_KEY = 'secret_keyafad';

          const user= {
            id : 1, 
            username : 'anil',
            password : 'pass123'
          };

          app6.post('/login', (req, res) => {
            const {username, password} = req.body;
            if(username === user.username && password === user.password) {
                const token = jwt.sign({userId:user.id}, SECRET_KEY, {expiresIn :'1h'});
                return res.json(token);
            } else{
              return res.status(401).send("Wrong credentials");
            }
          })

          const authorizationToken = (req,res, next) => {
                const token = req.headers['authorization'];
                if(!token) return res.status(403).send("token is required");

                jwt.verify(token, SECRET_KEY, (err, decoded) => {
                      if(err) return res.status(403).send("Invalid Token");
                      req.user = decoded;
                      next();
                })
          }

          app.get('/',authorizationToken,  (req, res) => res.send('Hello world'))
          app.listen(port, () => console.log(`Example app listening on port ${port6}`))




 
// Q.6 What is CORS, and how do you handle it in an Express application ?
      // -> CORS (Cross - Origin Resources Sharing) is like a special permission slip
      // Cross-Origin Resources Sharing(CORS) is a security mechanism implemented by web browser that allows serves to specify who can access their resources over the web. 
         // CORS works by using HTTP headers to define which origin(domains) are permitted to make requests to the server.        



// Q.7 How do you manage sessions in Express ?
   // -> In Express, session management is commonly handled using middleware like express-session.
   // This middleware helps store session data on the server, ensuring that each user has their own session with a unique identifier. 
   
      // ex - 

                const express = require('express')
                const app7= express()
                const port7 = 3006
                const session = require('express-session');

                app7.use(session({
                  secret : 'Your_secrete_key',
                  resave: false,
                  saveUnitialized : true,
                  cookie : {maxAge: 60000}
                }))

                 app.get('/',authorizationToken,  (req, res) => {
                       if(req.session.views){
                        req.session.views++;
                        res.send(`Number of views: ${req.session.views}`);
                       }else{
                        req.session.views = 1;
                        res.send('Welcome to the website');
                       }
                 })
                 app.listen(port, () => console.log(`Example app listening on port ${port6}`))




// Q.8 how do you create a RESTful API using Express ?

     // A RESTful API (Representational state transfer API) is a way for different software applications to communicate with each other over the internet using a set of rules.
                const express = require('express')
                const app8= express()
                const port8 = 3006
                const bodyParser = require('body-parser');

                app8.use(express.json());

                const todos = []; 

                app8.post('/addTodo', (req,res) => {
                      const todo = req.body;
                      todos.push(todo);
                      res.status(201).json(todo);

                })

                app8.get('/', (req,res) => {
                  res.json(todos);
                })


                app8.get('/:id', (req, res) => {
                  const todo = todos.find(t => t.id === parseInt(req.params.id));
                  if(!todo) return res.status(404).json({message: 'To-do not found'});
                  res.json(todo);
                })

                 app.listen(port8, () => console.log(`Example app listening on port ${port8}`))



// Q.9 How do you connect an Express application to database (e.g. MongoDB) ? 

        const express = require('express')
        const app10 = express()
        const port10 = 3010
        const mongoose = require('mongoose');

        mongoose.connect('mongodburl here ')
        .then(() => console.log('Atlas conncted').catch((err) => {
           console.log("Something went wrong")
        }));


        
                 app.listen(port10, () => console.log(`Example app listening on port ${port10}`))


