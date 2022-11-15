import {Route, Routes} from "react-router";
import 조종사 from "./components/조종사";
import Home from "./components/Home";
import 농업인 from "./components/농업인";
import 대리점 from "./components/대리점";
import Task_Group from "./components/Task_Group";
import Task from "./components/Task";
import Task_Detail from "./components/Task_Detail";
import Team from "./components/Team";
import ResponsiveAppBar from './components/Nav';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="조종사" element={<조종사 />} />
        <Route path="농업인" element={<농업인 />} />
        <Route path="대리점" element={<대리점 />} />
        <Route path="Task_Group" element={<Task_Group />} />
        <Route path="Task" element={<Task />} />
        <Route path="Task_Detail" element={<Task_Detail />} />
        <Route path="Team" element={<Team />} />
      </Routes>
    </div>
  );
  
}

export default App;
