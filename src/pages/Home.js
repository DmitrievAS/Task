import {Link} from "react-router-dom";
import {Title} from "@mui/icons-material";


const Home = () => {
    return (
        <div className="userProfile">
            <div>
                <div>
                    <Link to="/login">Sign in</Link>
                </div>
                <div>
                    <Link to="/signup">Sign up</Link>
                </div>
                <div>
                    <Link to="/gists">Gists</Link>
                </div>
            </div>
        </div>
    );
};

export default Home