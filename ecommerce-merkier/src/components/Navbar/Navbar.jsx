import CartWidget from "./CartWidget/CartWidget"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand " href="#">
        <img src="https://i.ibb.co/Ttf43Sv/logo.png" alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#" >Disabled</a>
        </div>
        3 <CartWidget saludo={'Bienvenido'} />
      </div>
    </div>
  </nav>
  )
}

export default Navbar