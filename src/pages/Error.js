import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="section error-page">
            <div className="error-container">
                <h1>Oops! this is not a page you are looking for</h1>
                <Link to='/' className="btn btn-primary">Back to home</Link>
            </div>
        </section>
    );
}

export default Error;