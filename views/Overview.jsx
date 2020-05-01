var React = require("react");


class overview extends React.Component {
  render() {
    return (


        const allIncome = this.props.allIncomeList;

    const allIncomeList = allIncome.map( income => {
        return (
                    <tr>
                        <td>{income.description}</td>
                        <td>${income.amount}</td>
                        <td>{income.date}</td>

                        <a href ={`/edit/${expense.id}`}><button type="button" class="btn btn-primary btn-sm d-block p-2">Edit</button></a>
                        &nbsp;
                        <form method="POST" action="/?_method=delete">
                        <input type = "hidden" name = "expenseId" value = {expense.id}/>
                        <button type="submit" class="btn btn-primary btn-sm d-block p-2">Delete</button>
                        </form>
                        </td>
                    </tr>




             <button type="button" class="btn btn-primary btn-sm d-block p-2" href="/timeperiod">View by Timeperiod</button>

)

        <html>
        <head>

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/style.css"/>
            <title>MooTrek</title>
            <meta charSet="utf-8" />


        </head>

<body>








    <div className="card mb-3" >

            <div className="card-body" >


                <div >

                        <table class="table table-bordered table-hover table-light">
                        <thead class="thead-light">
                            <tr>

                                <th>description</th>
                                <th>amount</th>
                                <th>date</th>

                            </tr>
                        </thead>
                        <tbody>
                            {allIncomeList};
                        </tbody>
                    </table>
                    </div>

            </div>
    </div>

</body>


 </html>
            )

        }

    };


    module.exports = overview;