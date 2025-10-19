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

             









































