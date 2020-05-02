
var React = require("react");
var Navbar = require('./navbar')


class home extends React.Component {
  render() {
    return (<html>
        <head>


            <title>MooTrek</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <title>MooTrek</title>
            <meta charSet="utf-8" />


        </head>

<body>
    <div className="card" >

    <h1>Hello there, welcome to MooTrek</h1>
            <div className="card-body" >



                    <div >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                            <a className="nav-link" href="/login"><button>Login</button></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/register"><button>Register</button></a>
                          </li>

                        </ul>

                    </div>

            </div>
    </div>

</body>


 </html>
            )

        }

    };


    module.exports = home;