import { IoSearchOutline } from "react-icons/io5";
import Button from '@mui/material/Button';


const SearchBox =()=>{
    return(
        <div className="headerSreach">
        <input type="text" placeholder="Search for Product" />
         <Button variant="primary">
        <IoSearchOutline />
        </Button>
        </div>
    )
}

export default SearchBox;