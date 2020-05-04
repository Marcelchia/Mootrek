var React = require("react");


class overview extends React.Component {
  render() {
    console.log("this is this.props")
    console.log(this.props)
    const allIncome = this.props.allIncomeList;
    console.log(allIncome)


    const allIncomeList = allIncome.map( income => {

        const event = new Date (income.date);

        ////NEW OBJECT

        const dateString = event.toDateString();


    console.log (event);

        //////change object to string////


        return (
                    <tr>
                        <td>{income.description}</td>
                        <td id="amountList"class="alert black">${income.amount}</td>
                        <td>{dateString}</td>


                        <td>
                        <a href ={`/moneyflow/edit/${income.id}`}><button type="button" >Edit</button></a>
                        &nbsp;
                        <form method="POST" action="/?_method=delete">
                        <input type = "hidden" name = "incomeId" value = {income.id}/>
                        <button type="submit" >Delete</button>
                        </form>
                        </td>
                    </tr>
                    )
                }

)

        return(

        <html>
        <head>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <title>MooTrek</title>
            <meta charSet="utf-8" />


        </head>

<body>










            <div className="card-body" >


                <div >


                 <h1> Income List Overview</h1>


                 <h3 id="total"class="alert black">Total:&nbsp;${this.props.total}</h3>



                        <table class="table table-bordered table-hover table-light">
                        <thead class="thead-light">
                            <tr>

                                <th>Description</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {allIncomeList};
                        </tbody>
                    </table>
                    </div>

            <a href="/moneyflow/add"><button>Add Income Stream</button></a>

            <a href="/moneyflow"><button>Back</button></a>
            <a href="/"><button>LogOut</button></a>






            </div>

  <script src="/script.js"></script>


</body>


 </html>
            )

        }

    };


    module.exports = overview;