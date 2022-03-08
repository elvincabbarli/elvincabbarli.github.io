import './featuredInfo.css'
import {PersonOutline , AttachMoney , Laptop , ShoppingBasket
, PersonPin} from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
        <span className="featuredTitle">Şöbələr</span> 
            <div className="branches">
                    <div className="branchListItem">
                        <PersonOutline className='brancIcon' />
                        Ümumu Üzv: 61
                    </div>
                    <div className="branchListItem">
                        <AttachMoney className='brancIcon' />
                        Mühasibatlıq: 15
                    </div>
                    <div className="branchListItem">
                        <Laptop  className='brancIcon' />
                        IT(Web): 20
                    </div>
                    <div className="branchListItem">
                        <Laptop  className='brancIcon' />
                        IT(RM): 6   
                    </div>
                    <div className="branchListItem">
                        <ShoppingBasket className='brancIcon' />
                        Logistika: 9
                    </div>
                    <div className="branchListItem">
                        <PersonPin className='brancIcon' />
                        HR: 11
                    </div>
            </div>
        </div>
    </div>
  )
}
