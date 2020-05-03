var React = require("react");

class Edit extends React.Component {
  render() {

    var editURL = '/moneyflow/edit/'+this.props.singleIncomeList.id + '?_method=put'

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
                <h1>Edit your Moneyflow</h1>

                    <form method="POST" action={editURL}>

                         <div class="form-group">
                            <label for="username">Description</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="description" placeholder="Enter description"maxLength="25" defaultValue={`${this.props.singleIncomeList.description}`}/>
                                </div>
                        </div>

                        <div class="form-group">
                            <label for="name">Amount</label>
                                <div class="input-group" >
                                    <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" name="amount" placeholder="Enter amount"maxLength="25" defaultValue={`${this.props.singleIncomeList.amount}`}/>


                            </div>
                        </div>



                       <div class="form-group">
                            <label for="username">Date</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                    <input type="date" class="form-control" name="date" placeholder="Enter date yyyy/mm/dd format"maxLength="25" defaultValue={`${this.props.singleIncomeList.date}`}/>
                                </div>
                        </div>

                                <button className="edit-form__submit-btn" type="submit">Edit</button>

                            </form>




            </div>


        <a href="/moneyflow/overview"><button>Back</button></a>
         <a href="/moneyflow"><button>Home</button></a>
        <a href="/"><button>Log Out</button></a>

            </div>
        </div>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

    module.exports = Edit;


//     const React = require('react');
// const Layout = require('../layout');
// const Nav = require('../nav');

// class New extends React.Component {
//   render(){
//     return(
//       <Layout>
//         <Nav>
//         </Nav>
//         <body>
//             <h1>What are you spending on today?</h1>
//           <div className = "card text-white bg-dark mb-3">
//             <form action={`/expense`} method="POST">

//               <p>Date</p>
//               <input type="date" name="date" required/><br/><br/>
//               <p>Amount</p>
//               <input type="text" name="amount" required/><br/><br/>
//               <p>Message</p>
//               <input type="text" name="message" required/><br/><br/>
//               <input class="btn btn-secondary" type="submit" value="Submit"/><br/>
//             </form>
//           </div>
//         </body>
//       </Layout>
//     )
//   }
// }

// module.exports = New;