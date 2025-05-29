
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';

const Navigation = () => {
    return(
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 navPart1">
                                <button className="allCartTab">
                                    <span><IoMenu /></span>
                                    <span className="text">All CATEGORIES</span>
                                    <span><FaAngleDown /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
    )
}

export default Navigation;