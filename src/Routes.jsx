import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Todolist from './pages/TodoList';
import Home from './pages/Home';

function Routes() {


  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home/>} />
      <Route path="/todoList/:id/:name" element={<Todolist />} />
    </Switch>
  </BrowserRouter>
  )
}

export default Routes
