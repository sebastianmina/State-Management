import React from 'react';
import ReactDOM from 'react-dom'; 

export const ThemeContext = React.createContext(null);

class App extends React.Component {
    render() {
      // Use a Provider to pass the current theme to the tree below.
      // Any component can read it, no matter how deep it is.
      // In this example, we're passing "dark" as the current value.
      return (
        <ThemeContext.Provider  value={{ state, dispatch }}>
            <Button>Change Theme</Button>
        </ThemeContext.Provider>
    );
    }
  }
  function Button() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  

  class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
      return <Button theme={this.context} />;
    }
  }