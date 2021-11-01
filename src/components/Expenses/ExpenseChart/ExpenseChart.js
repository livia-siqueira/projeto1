import Chart from '../../Chart/Chart/Chart';
import './ExpenseChart.css';

const ExpenseChart = (props ) => {

    const dataChartPoints = [
        {label: 'Jan', value: 0},
        {label: 'Fev', value: 0},
        {label: 'Marc', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        dataChartPoints[expenseMonth].value += expense.amount; 
    }
    
    return (
        <Chart dataPoints={dataChartPoints}/>
    );

}

export default ExpenseChart;