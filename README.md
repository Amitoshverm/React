# Hello React


# Parcel
- Dev build
- local server
- HMR = hot module replacement
- file watching algorithm - written in c++
- image optimization 
- minification
- bundling 
- compress
- consistent hashing 
- HTTPs
- Tree shaking - remove unused code
- different dev build and prod build 
- error handling 


## Food app

/*
 *  Header - >
 *             Logo, nav Items(home, about, cart)
 *  Body ->
 *            search input,
 *            Restaurant container->
 *                                  restaurant card->
 *                                              image
 *                                              Name of restaruant, stars, cousines, eta
 *  Footer ->
 *            copyright
 *            links
 *            Address
 *            Contact
 */

# Export and Imports
- There are two types of Exports -> Named exports and Default exports

# default exports
- There can only be one default export in a file
- export default Component/variable;
- import Component from "/path";

# Named exports
- When there are more components or things to export from a file then we use named exports
- export const Component/variable;
- improt { Component/variable } from "/path";

# React Hooks
(Normal javascript utility functions)  
- useState() 
- useEffect()

# useState()- its a special function in javascript that allows us to create a state variable in a functional component.
  - const [stateVariable, setStateVariable] = useState(initialValue);
  - setStateVariable - is a # function that allows us to update the state variable.

# useEffect() - its a function in javascript, it is called when the whole component is rendered.
    - useEffect(() => {
        // code to run when component is rendered
        return () => {
            // code to run when component is unmounted
        }
        }, [dependencies]); // dependencies are the variables that the effect depends on, if they change then the effect will run again.


# Conditional Rendering
- We can use conditional rendering to render different components based on a condition.
- example : 
-     if (listOfRestaurants.length === 0) {
        return <h1>No Restaurants Found</h1>;
            } else {
            return (
            <div>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} {...restaurant} />
                ))}
            </div>
        );
}

# REMEMBER THIS ALWAYS - Whenever we change the local state variable react re-reanders the component again.


# How searching happens in the food app or any app where we use searching as a filter
- We have a search input field where we type the search query. But when we type each letter the component re-renders and the search query is updated in the state variable. 
- Conclusion - Whenever we type in the search input field, the component re-renders and the search query is updated in the state variable.

# More on useEffect()

- if dependency array is not passed then, the callback function inside useEffect will run after every render.
- if dependency array is passed but it is empty([]) then, the callback function inside the useEffect will be called on intial render only.
- if dependency array is passed with some variables then, the callback function inside the useEffect will be called on initial render and whenever any of the variables in the dependency array changes.

# There are 2 types of routing 
- Client side routing - the routing is done on the client side, the server does not know about the routing.
- Server side routing - the routing is done on the server side, the server knows about the routing.

# Class Components
- Class components are the old way of writing components in React.
- They are not used anymore, but you should know about them.
- The class component is created using `class` keyword and it extends `React.Component`.
- Class components have a constructor() method which is called when the component is created.
- Inside the constructor() we can initialize the state variable using `this.state = {}` and prop types using `this.props`.
- Super() is called to initialize the parent class (React.Component) we put props inside super() to access them in the constructor.
- Class component has a `render()` method which returns the jsx to be rendered.
- lifecycle of these method calling 
  - constructor() - called when the component is created
  - render() - called when the component is rendered
  - componentDidMount() - called when the component is mounted

- componentDidMount() - is not equivalent to useEffect() its just shows relevence thats it, its completely different.
  - useEffect() is called after the component is rendered, it can be used to make API calls, update the state, etc.
  - componentDidMount() is called only once when the component is mounted, it is used to make API calls and update the state.
- in componentDidMount() we can make API calls and update the state variable. 
- it is used for lazy loading the data. 
- remember : loads-> render-> api-> render

# order of life cycle method calls in Class Based Components
- Mounting ->
-   constructor()
-   render(some dummy data)
-   componentDidMount() 
-   API call
-   setState() (this will re-render the component)
- Update ->
-   render() (with the API data)
- Unmounting ->
- componentWillUnmount() when we go do different page or component

![alt text](<Screenshot 2025-07-17 at 12.55.18 AM.png>)



# Never compare react class component life cycle methods with normal functional components.

# configured tailwind css