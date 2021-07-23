import './signin.css';

const Login = () => {
    return (
      <div className="container w-25 mx-auto pt-5">
  <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    " }} />
  {/* Custom styles for this template */}
  <link href="signin.css" rel="stylesheet" />
  <main className="form-signin">
    <form>
      <div className="text-center">
      <img className="img-circle elevation-1 center" src="dist/img/Logosj.png" width="150" />
      <h1 className="h3 mb-3 mt-5 fw-normal">Por favor inicie sesion</h1>
      </div>
      <div className="form-floating mb-4">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="checkbox mt-3">
        <label>
          <input type="checkbox" defaultValue="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">PQRSDS San Juan de Arama ©2021</p>
    </form>
  </main>
</div>

)}
export default Login;
