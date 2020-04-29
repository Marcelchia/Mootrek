var React = require("react");

class home extends React.Component {
  render() {
    return (
        <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
           <link rel="stylesheet" type="text/css" href="/style.css"/>

<title>MooTrek</title>
          <meta charSet="utf-8" />
</head>

<body>


<div className="collapse navbar-collapse" id="navbarSupportedContent">

    <h1>Hello {name} you are logged, welcome to MooTrek</h1>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/home/add">Add income Stream</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/home/AllIncomeStream">View all books</a>
      </li>
            <li className="nav-item">
        <a className="nav-link" href="/logout">Logout</a>
      </li>
    </ul>
  </div>

</body>
 </html>
        )

        }

    };
    );
  }
}

module.exports = home;