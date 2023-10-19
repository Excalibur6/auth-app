"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home"));
const About_1 = __importDefault(require("./pages/About"));
const Signin_1 = __importDefault(require("./pages/Signin"));
const Signup_1 = __importDefault(require("./pages/Signup"));
const Profile_1 = __importDefault(require("./pages/Profile"));
const Header_1 = __importDefault(require("./components/Header"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
    <Header_1.default />
    <react_router_dom_1.Routes>
        <react_router_dom_1.Route path='/' element={<Home_1.default />}/>
        <react_router_dom_1.Route path='/About' element={<About_1.default />}/>
        <react_router_dom_1.Route path='/Signin' element={<Signin_1.default />}/>
        <react_router_dom_1.Route path='/Signup' element={<Signup_1.default />}/>
        <react_router_dom_1.Route path='/Profile' element={<Profile_1.default />}/>
    </react_router_dom_1.Routes>
  
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
