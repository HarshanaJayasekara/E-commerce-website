import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png';
import CountryDropdown from "../CountryDropdown";
import { Button } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";

const Header =() => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <a href="#">Covid 19</a> epidemic,may be processed with a slight delay</p>
                    </div>
                </div>
                <header className="header">
                    <div className="containers">
                        <div className="row">
                            
                            <div className="col-sm-10 d-flex align-items-center part2 ml-4">
                                <div className="logoWrapper d-flex align-items col-sm-2">
                                <Link to="/">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                                <CountryDropdown />

                                <SearchBox />

                               
                                    

                                    <div className="part3 d-flex align-items-center mi-auto">
                                        <button className="circle mr-3"><CiUser /></button>
                                        <div className="ml-auto cartTab d-flex align-items-center">
                                            <span className="price">$8.29</span>
                                            <div className="position-relative ml-2">
                                                <button className="circle"><AiOutlineShoppingCart /></button>
                                                <span className="count d-flex align-items-center justify-content-center">4</span>
                                            </div>
                                        </div>
                                        
                                    </div>

                            </div>
                        </div>
                    </div>
                </header>

                <Navigation />

                
            </div>
        </>
    )
}

export default Header;