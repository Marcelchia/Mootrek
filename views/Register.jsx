
var React = require('react');
class Register extends React.Component {
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


<div className="card mb-3" >
  <div className="card-body" >
    <h1 className="card-title">Register Here</h1>
    <p className="card-text">
        <div >
            <form action="/register" method="POST">
                <p>Name <input name="name" required/>
                </p>
                <p>Password <input type="password" name="password"/>
                </p>
                <p>
                    <input type="submit" value="submit" className="btn btn-info"/>
                </p>
            </form>
        </div>

          <div>
              <p>Registered? Click<a href="/login"> here</a> to login.</p>
        </div>



    </p>
    <p className="card-text"></p>
  </div>
</div>

        </body>
      </html>
    );
  }
}

module.exports = Register;