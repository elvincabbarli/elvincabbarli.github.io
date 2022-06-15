import './chart.css'
import Chart1 from './chart1/Chart1'
import Chart3 from './chart3/Chart3'
import Chart4 from './chart4/Chart4'

export default function Chart() {
  return (
    <div className='chart'>
        <Chart1 /> 
        <Chart4 /> 
        <Chart3 />  
    </div>
  )
}
