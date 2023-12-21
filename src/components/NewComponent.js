import React from 'react'
import ReactDOM from "react-dom/client";
const NewComponent = () => {
      React.useEffect(() => {
        document.title = "Home";
        document.body.innerHTML = '<div id="myapps"></div>';

        // Render your React component instead
        const root = ReactDOM.createRoot(document.getElementById("myapps"));
        root.render(<h1>Hello, world</h1>);
      }, []);
  return (
    <div>NewComponent</div>
  )
}

export default NewComponent