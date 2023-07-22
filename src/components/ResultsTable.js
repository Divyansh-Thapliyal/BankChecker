

const ResultsTable=(props)=>
{
  
    return <div>
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>

            {props.data.map((item)=>{return(
                <tr>
             <td>{item.year}</td>
                <td>{item.savingsEndOfYear}</td>
                <td>{item.yearlyInterest}</td>
                <td>{1000}</td>
                <td>{2000}</td>
              </tr>
            )})}

        </tbody>
      </table>
    </div>

}

export default ResultsTable;