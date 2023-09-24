import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h3>Oops!!! Page not found!</h3>
            <Link to="/"><button className="btn btn-primary">Go back</button></Link>
        </div>
    );
};

export default NotFound;