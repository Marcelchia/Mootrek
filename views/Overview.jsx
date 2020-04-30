var React = require("react");

class timeperiod extends React.Component {
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


<div >
    <ul>
      <li>
        <a href="/login">date: request.body</a>
      </li>
      <li>
        <a href="/register">specific month</a>
      </li>
       <li>
        <a href="/login">range: </a>
      </li>

    </ul>
  </div>

</body>
 </html>
        )

        }

    };



    module.exports = timeperiod;