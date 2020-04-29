var React = require("react");

class Home extends React.Component {
  render() {
    return (
      <html>
<head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
          <link rel="stylesheet" type="text/css" href="/style.css"/>
<title>My Library</title>
          <meta charSet="utf-8" />
</head>

<body>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><img src="/img/logo.svg" width="60" height="60" className="d-inline-block align-center" alt="" />   My Library</a>
      <span className="navbar-text">
     Keep track of your book collection
    </span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li>
    </ul>
  </div>
</nav>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div className="card">
  <div className="card-body">
        <blockquote className="blockquote text-center">
          <h3 className="mb-0">To build up a library is to create a life. It's never just a random collection of books.</h3>
          <footer className="blockquote-footer">Carlos María Domínguez, <cite title="Source Title">The House of Paper</cite></footer>
        </blockquote>




  </div>
</div>
        </body>
      </html>
    );
  }
}

module.exports = Home;