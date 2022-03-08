import Chart from '../../components/charts/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart />
    </div>
  )
}
