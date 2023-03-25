import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0)
  //  The below two lines tells about useEffect.On saving the coding of this useEffect itself will display "I'm mounted" in the console before even executing the code because useEffect belongs to the mounting phase in the lifecycle of a hook which will be done even before execution of program code itself!

  // useEffect(() => {
  //   console.log("I'm called")
  //  }, [])

  // example for fetch of rest countries data using fetch method inside the useEffect so that the data could be called only once at the beginning during the mounting phase of the coding itself is shown below

  useEffect(() => {
    // using fetch method inside useEffect
    const getRestCountries = async () => {
      const response = await fetch('https://restcountries.com/v2/all', {
        method: "GET"
      })
      const data = await response.json();
      console.log(data)
    }
    getRestCountries();
    console.log("Hey Im Renowed")
  }, [])
  // The above[] mentioned inside the useEffect is called dependancy Array.If we call the useEffect,
  // then it will call its content during mounting session for one time alone.But if we need
  // the function to call continuously during particular time, then we can use the[] to do so! suppose
  // if we need the useEfeect functioin to be called whenever the state is being changed then we must 
  // enter { state } inside[] i.e, [{state}]. Now, whenever the state is changed, the restcountries api inside useEffect
  // will be consoled.This is the use of this Dependancy array inside the useEffect.
  // Here in the above mentioned useEffect hook, we used function to call it.we can even normally write the useEffect hook 
  // instead of using a function too!It is shown below in commented form.

  // useEffect(() => {
  //   fetch('https://restcountries.com/v2/all', {
  //     method: "GET"
  //   })
  //     .then(res => res.json())
  //     .then((data) => console.log(data))
  //   console.log("Hey Im Renowed")
  // }, [])

  return (
    <div className="App">
      {/* Example for how to use an useState hook is given below */}
      {/* In the following code parent{" "} is written to explain the concept of prop drilling whose children grandchildren
      great grand children functions are given below the main app function */}
      {state} parent{" "}
      <button onClick={() => setState(state + 1)}>ADD</button>
      {/* Example for how to define a prop outside in a different function and how to use it inside the main function along with the useState so that the prop will be parallely manipulated along with the useState example mentioned above is given below  */}
      {/* <PropFunction
      //   state={state} /> */}
      <div className="Child-Components">
        <Child1 state={state} />
        <Child2 state={state} />
      </div>
    </div>
  );
}

export default App;

// Example for accessing a state using prop.
// function PropFunction({ state }) {
//   return (
//     <div>Hi Im reusing the state {state}</div>
//   )
// }


// The following child grandchild and great grand child funvtionjs are called in the above main app function
// to explain the concept prop drilling 


function Child1({ state }) {
  return (
    <div>
      <div className="comp">
        Child1

      </div>
      <GrandChild1 state={state} />
    </div>
  )
}


function Child2({ state }) {
  return (
    <div>
      <div className="comp">
        Child2
      </div>
      <GrandChild2 state={state} />
    </div>
  )
}

// The following part of code explains the prop drilling
function GrandChild1({ state }) {
  return (
    <div>
      <div className="comp" >
        GrandChild1
      </div>
      <GreatGrandChild1 />
      <GreatGrandChild2 state={state} />
    </div>
  )
}

function GrandChild2({ state }) {
  return (
    <div>
      <div className="comp">
        GrandChild2 {state}
      </div>
    </div>
  )
}

function GreatGrandChild1() {
  return (
    <div>
      <div className="comp">
        GreatGrandChild1
      </div>
    </div>
  )
}

function GreatGrandChild2({ state }) {
  return (
    <div>
      <div className="comp">
        GeatGrandChild2  {state}
      </div>
    </div>
  )
}

// In the above prop drilling code section, the {state} is about to pass from App down to Grandchild2; 
// through Child2(which is being passed in the main app function's return). 
// This is done by passing the state as prop from child 2 to grand child2 as you can see in the above code 
// and this process is called prop drilling. But the thing is that here the prop has to be passed to grand child2.
// so the child2 component have only one following component which is grandchild2 .Hence it is easy to pass the
// state prop to only two consequent components. suppose imagine like if you have to pass the prop
// to a component which is 50th in the line from prent to child. so in this situation, it is very difficult to pass
// the prop to all the 50 components to pass the prop to the final 50th component! The solution for this will be
//  discussed in further classes.

// following the same way as mentioned above, the state as been passed as a prop from child1 to greatgrandchild2 too! 