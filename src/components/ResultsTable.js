

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
                <tr key={item.year}>
             <td>{item.year}</td>
                <td>{item.savingsEndOfYear}</td>
                <td>{item.yearlyInterest}</td>
                <td>{item.savingsEndOfYear-props.initialInvestment-item.yearlyContribution*item.year}</td>
                <td>{props.initialInvestment+item.yearlyContribution*item.year}</td>
              </tr>
            )})}

        </tbody>
      </table>
    </div>

}

export default ResultsTable;