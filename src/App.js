import { useDispatch,useSelector } from "react-redux";
import SideBarNavigation from "./components/BarNavigation/BarNavigation";
import MainScreen from "./components/MainScreen/MainScreen";

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.tasks.activesidebar)
  return (
    <div>
      <MainScreen/>
    </div>
  );
}

export default App;
