### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
-So you can change URL with single page app

- What is a single page application?
an app that never refreshes just the components

- What are some differences between client side and server side routing?
Client does not need to keep making request to server

- What are two ways of handling redirects with React Router? When would you use each?
-Import Redirect or calling .push method on the history object.

- What are two different ways to handle page-not-found user experiences using React Router 
-Should creare Routes that render componenets. Children of a switch must be Route or Redirect.

- How do you grab URL parameters from within a component using React Router?
-useParams

- What is context in React? When would you use it?
-When a nested component can access variables without having to declare through every single nested component.

- Describe some differences between class-based components and function
  components in React.

-class components have the ability to manage state and lifecycle methods,while functional components do not.



- What are some of the problems that hooks were designed to solve?
-Before hooks, React didn't have a basic way of extracting and sharing logic.