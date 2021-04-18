
import "./TableMenu.css"
import searchIcon from '../Assets/search.svg';
function TableMenu() {
  return (
    <div className="TableMenu">
        <div className="wrap">
   <div class="search">
   <button type="submit" class="searchButton">
   <img src={searchIcon} />
     </button>
      <input type="text" class="searchTerm" placeholder="Search" />
      
   </div>
    </div>
    <div>
    <label class="From">From</label>
    <input type="date" class="Fromdate"/>
    </div>
    <div>
    <label class="To">To</label>
    <input type="date" class="Todate"/>
    </div>
    </div>

  );
}
export default TableMenu;

