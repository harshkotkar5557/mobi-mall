import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCateogry } from '../../context/cateogryContext'
import Card from '../../components/Card'
import  {products}  from '../../data/product'
import { useAuth } from '../../context/authContext'


const ACTION = {
  ADD_ONE_CATEOGRY: 'add-one-cateogry',
  ADD_CATEOGRY: 'add-cateogry',
  REMOVE_CATEOGRY: 'remove-cateogry',
  CLEAR_ALL: 'clear-all'
}

function Home() {
  
  const navigator = useNavigate()

  const { dispatch } = useCateogry()
  const { isAuth } = useAuth()

  function handleClick(cateogry) {
    navigator('/products')
    dispatch({ type: ACTION.ADD_ONE_CATEOGRY, payload:{ cateogry: cateogry}})
  }

  function clearAllFilter() {
     navigator('/products')
    dispatch({ type: ACTION.CLEAR_ALL})
  }

  return (
  <div>
      <section className="middle-section">
          <h1 className="text-center">Cateogry</h1>
        <div className="d-flex flex-wrap gap-1rem align-center justify-center">
          <div  className="round_img">
            <img onClick={()=>handleClick('Samsung')} src="./images/samung-logo.jpg" alt="samung-logo"/>
          </div>    
          <div  className="round_img">
            <img onClick={()=> handleClick('Iphone')} src="./images/iphone-logo.png" alt="phone-logo"/>
          </div>    
          <div  className="round_img">
            <img onClick={()=> handleClick('OnePlus')} src="./images/oneplus-logo.jpg" alt="oneplus-logo"/>
          </div>    
          <div  className="round_img">
            <img onClick={()=>handleClick('Oppo')} src="./images/oppo-logo.webp" alt="oppo-logo"/>
          </div>    
        </div>
        <div className="fluid_img home-page-img">
            <img src="images/buyback_offer_banner.png" alt=""/>
            <span><button className="link-btn outlined get-star-btn" onClick={()=>clearAllFilter() }>Shop now</button></span>        
        </div>
        <h1 className="text-center">New arrivals</h1>
        <div className='d-flex flex-wrap gap-1rem align-center justify-center'>
           <Card product={products[0]} />
           <Card product={products[5]} />
        </div>    
      </section>
</div>
  )
}

export default Home