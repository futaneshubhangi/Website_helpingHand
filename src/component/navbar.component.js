import { Link } from 'react-router-dom';
const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <b class="navbar-brand" href="#"><h1 class="animate_animated animate_heartBeate animate_infinite m-3 m-3">Helping Hand</h1></b>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to="/" class="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" class="nav-link">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/register" class="nav-link">Register</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" class="nav-link">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
        <Link to="/team" class="nav-link">Team</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;