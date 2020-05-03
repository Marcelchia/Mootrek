var React = require("react");

class Add extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>


            <link rel="stylesheet" type="text/css" href="/style.css"/>
        </head>
        <body>
          <div class="container">

            <div class="main">
                <div class="main-center">
                <h1>Add Moneyflow</h1>
                    <form class="" method="POST" action="/moneyflow/add">

                        <div class="form-group">
                            <label for="name">Amount</label>
                                <div class="input-group" >
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="amount" placeholder="Enter amount"/>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="username">Description</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="description" placeholder="Enter description"/>
                                </div>
                        </div>

                       <div class="form-group">
                            <label for="username">Date</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                    <input type="date" class="form-control" name="date" placeholder="Enter date yyyy/mm/dd format"/>
                                </div>
                        </div>



                <button class ="add-button"type="submit"value="confirm" onclick="confirmpopup()">Add Moneyflow</button>

            </form>

            </div>



            </div>

             <div class = "below-add-buttons">
            <a href="/moneyflow/overview"><button>Overview</button></a>
             <a href="/moneyflow"><button>Back</button></a>
            <a href="/"><button value="confirm" onclick="confirmpopup()">Log Out</button></a>
            </div>
        </div>

        <script src="/script.js"></script>

        </body>
      </html>
    );
  }
}

    module.exports = Add;