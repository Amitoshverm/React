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