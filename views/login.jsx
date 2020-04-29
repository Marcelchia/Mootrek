var React = require("react");


class LogIn extends React.Component {
  render() {
    return (<html>
        <head>
           <link rel="stylesheet" type="text/css" href="/style.css"/>

            <title>MooTrek</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <title>MooTrek</title>
            <meta charSet="utf-8" />


        </head>

<body>
    <div className="card mb-3" >
            <div className="card-body" >
                    <h1 className="card-title">Login</h1>
                    <p className="card-text">
                                <div >
                                        <form action="/login" method="POST">
                                             <p style>
                                                    Name <input name="name" required/>
                                            </p>

                                            <p style>
                                                Password <input type="password" name="password"/>
                                            </p>

                                            <p>
                                                <input type="submit" value="submit" className="btn btn-info"/>
                                            </p>
                                        </form>
                                </div>

                            <div>
                                    <p style={{width: "30%", textAlign: "center", margin: "50px auto 5px auto"}}>Not registered yet? Click<a href="/register"> here</a> to register.</p>
                            </div>
                    </p>
                            <p className="card-text"></p>
            </div>
</div>

        </body>
 </html>
            )

        }

    };


    module.exports = LogIn;