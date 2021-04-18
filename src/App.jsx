import "./styles.css";
import SideNav from "./Components/SideNav";
// import Main from "./Components/Main";
import Table2 from "./Components/Table2";
import TableHeader from "./Components/TableHeader";
import TableMenu from "./Components/TableMenu";
function App() {
  return (
    <div>
      <div className="Side">
      <SideNav />
      </div>
      {/* <Main /> */}
      <div className="Main">
      <div className="TableHeader">
      <TableHeader/>
      </div>
      <div className="Menu">
      <TableMenu/>
      </div>
      <div className="Table">
      <Table2 />
      </div>
      
      </div>
      
    </div>
  );
}
export default App;
