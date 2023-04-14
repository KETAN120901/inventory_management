import React from "react";
import { Outlet, Link } from "react-router-dom";

function Nav(){
    return <><div className="noncollapse-navbar"><nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/top">Top</Link>
      </li>
      <li>
        <Link to="/catalog">Catalog</Link>
      </li>
      <li>
        <Link to="/transactions">Transactions</Link>
      </li>
      <li>
        <Link to="/import">Import</Link>
      </li>
      <li>
        <Link to="/export">Export</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
      
    </ul>
    <input type="text" placeholder="search"/>
    
  </nav>
 
  </div>
   
   </>
}
export default Nav;