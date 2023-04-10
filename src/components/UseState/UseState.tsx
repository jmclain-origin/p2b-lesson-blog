import React from "react";
import CounterClass from "./CounterClass";
import CounterFunc from "./CounterFunc";
import example1 from "assets/images/state_example1.png";
import example2 from "assets/images/init_class_state.png";
import example3 from "assets/images/init_hook_state.png";
import example4 from "assets/images/class_counter.png";
import example5 from "assets/images/func_counter.png";

const State = () => {
  return (
    <article className="mt-10 pb-10">
      <div>
        <h2 className="text-3xl font-semibold">useState</h2>
        <p>
          The <span className="inline-code">useState</span> is a React Hook that lets you add a state variable to your component.
        </p>
        <p>It initializes state and auto assigns the a function the can directly mutate the state</p>
        <div>
          <h3 className="text-2xl font-semibold">Syntax</h3>
          <img src={example1} alt="example1" />
        </div>
        <div className="space-y-3">
          <p>
            The important thing to notice in the example above, is the syntax to
            initialize state. Here we create two variables.{" "}
            <span className="inline-code">value</span> is what stores the value
            of <span className="inline-code">null</span>. Then there is
            <span className="inline-code">setValue</span> which is the function
            generated by the hook and it handles the mutation of its partner{" "}
            <span className="inline-code">value</span>. Last we assign it the
            the hook a initialize it with a value.
          </p>
          <p>
            With the the hook, functional components can now be stateful. Making
            the need to create any class components obsolete. In the next two
            examples we'll compare the exact same initialization side by side.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Class Component</h3>
          <img src={example2} alt="example2" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Functional Component Hook</h3>
          <img src={example3} alt="example3" />
        </div>
        <div className="space-y-3">
          <p>
            Both initialize <span className="inline-code">state</span> as an
            object, with key value pairs. In a class component we have to use
            the <span className="inline-code">constructor</span> function and
            declare <span className="inline-code">this.state</span> because we
            extend <span className="inline-code">React.Component</span> class we
            have access to <span className="inline-code">this.setState</span>{" "}
            for mutating the state if we follow the setup.
          </p>
          <p>
            With the we don't have to initialized state as an object, we could
            just pass a single value such and and get a function that only
            mutates that one variable.
          </p>
          <p>
            In the next example we have the exact same components, a simple
            counter. Both declare state and store a count. Also we create a two
            functions to increment and decrement the counter. You'll see why
            hooks are so awesome. So much less to write and much easier to read.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Class Component</h3>
          <img src={example4} alt="example4" />
          <h3 className="text-2xl font-semibold">Functional Component</h3>
          <img src={example5} alt="example5" />
        </div>
        <div className="space-y-3">
          <p>
            It's that simple. Here are both of those examples in use. They are exactly the same. you can learn more about the <span className="inline-code">useState</span> hook on the <a href="https://react.dev/reference/react/useState">official docs website.</a>
          </p>
          <div className="w-1/2 inline-block">
            <h4 className="text-xl font-semibold">Class Component</h4>
            <a href="https://github.com/jmclain-banyan/p2b-lesson-blog/blob/main/src/components/UseState/CounterClass.tsx">
              See on Github
            </a>
            <CounterClass />
          </div>
          <div className="w-1/2 inline-block">
            <h4 className="text-xl font-semibold">Functional Component</h4>
            <a href="https://github.com/jmclain-banyan/p2b-lesson-blog/blob/main/src/components/UseState/CounterFunc.tsx">
              See on Github
            </a>
            <CounterFunc />
          </div>
        </div>
      </div>
    </article>
  );
};

export default State;
