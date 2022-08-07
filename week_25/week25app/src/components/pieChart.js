import {Pie} from 'react-chartjs-2'

function PieChartGraph() {

const data = {
    labels: ['Mon','Tue','Wed','Thurs','Fri'],
    datasets: [
        {
            label: 'Attendance for Week 1',
            data: [25,24,25,25,23],
            borderColor: ['rgba(175,71,156,0.2)'],
            borderWidth:5,
            backgroundColor: ['rgba(232,99,132,1)',
            'rgba(232,211,6,1)',
            'rgba(54,162,235,1)',
            'rgba(255,159,64,1)',
            'rgba(153,102,255,1)' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
            backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center'
        }
        
    ]
}

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Pie Chart',
            color:'blue',
            font: {
                size:34
            },
            padding:{
                top:30,
                bottom:30
            },
            animation:{
                animateScale: true
            }
        }
    }
    
}
    return (
        <div>
            <Pie data={data} options={options} />
        </div>
    )
}

export default PieChartGraph