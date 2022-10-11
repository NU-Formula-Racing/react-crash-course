
# Get Started
use `git clone -b bp https://github.com/NU-Formula-Racing/react-crash-course.git` to download the repo.

# Running the App
make sure to run `npm i` to install dependencies before running the app the first time.

use `npm start` to run the application.

# Making the Todo List
Open `App.jsx` just to get an idea of the high-level structure of the app: there is a Title and there is a List.\
The other two tags can be uncommented now since they won't affect the structure of the website (GlboalStyle is basically just a <style/> tag and Modal has absolute positioning).\

Let's consider what our goal is. We want to display a list of todos and we want to be able to add and remove items from this list.

## useState
Every JSX element is basically just a chunk of HTML with some javascript associated with it.\
Every JSX element can store data in state using:
```
const [state, setState] = useState(initialValue);
```
To break down what's happening, there are 3 main parts: the variable name, the setter function, and the initial value. In this case, we're declaring a state variable `state` whose value is set via `setState` where the initial value is `initialValue`.\
The state must only be set through the setter function, otherwise rerendering calls will not behave properly.\
We can see how this works with three examples:
```
const [value, setValue] = useState(0);
const [myArr, setMyArr] = useState([]);
const [myObj, setMyObj] = useState({
  field1: true,
  field2: 5,
});
```
If we want to add 1 to `value` we call `setValue(value + 1)`\
If we want to push 'hello' into `myArr` we need to call `setMyArr(prevState => [...prevState, 'hello'])`\
If we want to flip the state of myObj.field1 we would call `setMyObj(prevState => {...prevState, field1: !myObj.field1})`

## Props
Lets say you want a child element to have access to some data that is stored in a parent element. This is all well and good if everything is part of the same JSX Element, but if you've broken things into components (as you should) there needs to be a way to pass data back and forth between different components. The way we do that is with props. Props are just properties that are defined for a given tag. For example, if you've used vanilla CSS, if you've written `<div className='example' />`then `className` is a prop of that div tag. If you define a functional component as accepting props, then you can access whatever props you're passed from within the component e.g.:
```
const ComponentWithProps = (props) => {
	return (<div>{props.children}</div>);
}
const Parent = () => {
	return (
		<ComponentWithProps>
			Hi
		</ComponentWithProps>
	);
}
```
In this case, this will just render a div that says "Hi" inside. Obviously props are very useful for passing state variables as well as state setters. If you're passing a function, make sure you're passing the function and not a call to the function!!!

## Synthetic Events
React has (a bunch of synthetic events)[https://reactjs.org/docs/events.html] that you can define for a given html element. All synthetic event handlers can be set by defining their corresponding prop. You simply have to give a function that you want to run when the event is triggered. Event props get passed a synthetic event as a parameter and you can access relevant event data through that. For example, if you have an input element and you want to log the value of the input after the user is done interacting with the element, you could do something like:
```
<input onBlur={(e) => console.log(e.target.value)} />
```
where `e` is the variable for the event.

## useEffect
Sometimes we want to listen to state changes and execute code. In order to do that, we use `useEffect`. `useEffect` is passed a function and a dependency array and when anything in that array changes, the function is called. For example, let's say we want to console log state every time state changes, this might look something like:
```
const [state, setState] = useState(0);
useEffect(() => {
	console.log(`new state: ${state}`);
}, [state]);
```
If we also want to write a function that only runs once when the component first loads, we can pass an empty dependency array:
```
useEffect(() => {
	console.log("this will only print once");
}, []);
```

## Good Luck
Check out the comments in the code for more guidance to actually fix the code or look at the `main` branch to see the completed code. The `highlighted` branch has the different html elements highlighted in different colors so it's easier to visually see item hierarchy. 

