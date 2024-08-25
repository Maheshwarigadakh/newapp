import ReactDOM from 'react-dom/client';
import "./index.css"
 import Home from "./view/home/home";
 import About from "./view/about/about";
 import Contact from "./view/contact/contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
const currPath = window.location.pathname;
if(currPath == "/")
{
  root.render(<Home/>)
}
else if(currPath == "/about"){
  root.render(<About/>)
}
else if(currPath == "/contact"){
  root.render(<Contact/>)
}
else{
  root.render(<h1>401 Not Found</h1>)
}