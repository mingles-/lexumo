# mingles' Lexumo Test

## The Task

Write a utility in any language you like to get a list of all Github projects which use either C or C++. 
Presenting results in a web-compatible output is preferred, and use of Python on the backend is also preferred. 

What we are looking for:
* Readable code is preferred over less code.
* Use your preferred language/tools. While Python is a plus, we'll recognize good code in any language.
* Intent is to get something that works in a couple hours.
* You are not restricted to the search API. If you can find a better way, then use it.
* While we want to see you write most of your code yourself, feel free to import libraries 
and access helpful resources as you usually do during dailycoding (eg searching Google and StackExchange). 
* Limited copying and pasting is acceptable.

Questions we'd love for you to answer:
* How you would improve what you did over time? What does the roadmap for this tool look like?
* What would a rudimentary web UI/data visualization might look like to allow someone to sort through the data, without doing additional analysis other than what Github gives you?
* What limitations of the API did you have to work around? Are the other parts of the API you could try, or other sources of data besides the API?

Resources:  
The Github search API can be found at https://developer.github.com/v3/search/.

## Redux with React
I've used a Redux architecture, this gives a unidirectional data flow and a centralized datastore so that the application in more maintainable and extendable.

## Code Structure

````
src/
    static/             -- static files such as images
    js/                 -- project code
        actions/        -- actions for retrieving from API
        containers/     -- components for displaying the data
        reducers/       -- reducer  
```

## installation

Install the dependencies in the local node_modules folder.
```
npm install
```

Run the application in the browser.
```
npm run dev
```
