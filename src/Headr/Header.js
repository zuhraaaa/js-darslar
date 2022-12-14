import { Routes, Route, NavLink } from "react-router-dom";
import "../Headr/Header.css";
import logo from "../icons/Logo.svg";
import Overview from "../pages/Overview";
import Worker from "../pages/Worker ";
import Cards from "../pages/Cards";
import Invoices from "../pages/Invoices";
import Goals from "../pages/Goals ";
import Settings from "../pages/Settings";
import OverviewGray from "../icons/OverviewGray.svg";
import WorkerGray from "../icons/WorkerGray.svg";
import InvoicesGray from "../icons/InvoicesGray.svg";
import CardsGray from "../icons/CardsGray.svg";
import GoalsGray from "../icons/GoalsGray.svg";
import SettingsGray from "../icons/SettingsGray.svg";


export function Header(){
    return(
        <header className="header">
            <nav className="nav">
                    <div className="links">
                        <div className="logo">
                            <figure>
                                <img src={logo} alt="logo" />
                            </figure>
                        </div>
                        <ul className="ul">
                            <li>
                                <figure><img src={OverviewGray} alt="OverviewGray" /></figure>
                                <NavLink to="/Overview" className="navlink" >Overview</NavLink>
                            </li>
                            <li>
                                <figure><img src={WorkerGray} alt="WorkerGray" /></figure>
                                <NavLink to="/Worker" className="navlink" >Worker</NavLink>
                            </li>
                            <li>
                                <figure><img src={CardsGray} alt="CardsGray" /></figure>
                                <NavLink to="/Cards" className="navlink" >Cards</NavLink>
                            </li>
                            <li>
                                <figure><img src={InvoicesGray} alt="InvoicesGray" /></figure>
                                <NavLink to="/Invoices" className="navlink" >Invoices</NavLink>
                            </li>
                            <li>
                                <figure><img src={GoalsGray} alt="GoalsGray" /></figure>
                                <NavLink to="/Goals" className="navlink" >Goals</NavLink>
                            </li>
                            <li>
                                <figure><img src={SettingsGray} alt="SettingsGray" /></figure>
                                <NavLink to="/Settings" className="navlink" >Settings</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <div>
                    <Routes>
                        <Route path="/Overview" element={<Overview/>}/>
                        <Route path="/Worker" element={<Worker/>}/>
                        <Route path="/Cards" element={<Cards/>}/>
                        <Route path="/Invoices" element={<Invoices/>}/>
                        <Route path="/Goals" element={<Goals/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                    </div>
            </nav>
        </header>
    )
}

