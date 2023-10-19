"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function Header() {
    return (<div className='bg-slate-400'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <react_router_dom_1.Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </react_router_dom_1.Link>
        <ul className='flex gap-4'>
          <react_router_dom_1.Link to='/'>
            <li>Home</li>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link to='/about'>
            <li>About</li>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link to='/profile'>
           
              <li>Sign In</li>
        
          </react_router_dom_1.Link>
        </ul>
      </div>
    </div>);
}
exports.default = Header;
