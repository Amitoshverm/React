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