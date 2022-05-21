import React from "react";

class App extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            count: 0
        }
    }
    render ()
    {
        const incraement = () =>
        {
          this.setState({count: this.state.count+1})
        }
        const decraement = () =>
        {
          this.setState({count: this.state.count-1})
      }
      return <div className="wrapper">
          <button onClick={incraement}>+</button>
          <h1>{ this.state.count}</h1>
       <button onClick={decraement}>-</button>
    </div>;
  }
}

export default App;
