
const Table = ({netIncomes}) => {

    const initialValue = 0;
    const calculoSuma = netIncomes.reduce((acc, net) => acc + net.income, initialValue)
    const promedio = calculoSuma / netIncomes.length


    return (
       <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((net, index) => (
                        <tr key={index}>
                            <td>{net.brand}</td>
                            <td>{net.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p style={{ fontWeight: 600}}>El promedio de los ingresos netos es: ${promedio}</p>
        </div>
    )
    
}
export default Table