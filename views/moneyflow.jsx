var React = require("react");

class Moneyflow extends React.Component {
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

    <div className="card" >

  <h1>Welcome to MooTrek</h1>


    <ul className="navbar-nav mr-auto">
      <li className="income-item">
               <a href="/moneyflow/add"><button>Add Income Stream</button></a>

      </li>
      <li className="income-item">

         <a href="/moneyflow/overview"><button>Overview</button></a>

      </li>
            <li className="income-item">

         <a href="/"><button>Log Out</button></a>
      </li>
    </ul>

    </div>


</body>
 </html>
        )

        }

    };




module.exports = Moneyflow;