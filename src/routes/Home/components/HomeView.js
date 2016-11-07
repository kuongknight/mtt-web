import React from 'react'
import './HomeView.scss'

export const HomeView = () => (
  <div className='block-container home-banner banner-1'>
    <div className='banner-text'>
    	<h1 className='caption'>
    		<div className='font-weight-lighter'>
    			We don't <br /> trust words,
    		</div>
    		<div className='font-weight-regular'>
    			WE TRUST
    		</div>
    		<div className='font-weight-bold'>
    			ACTIONS
    		</div>
    	</h1>
    </div>
    <div className='ceo-detail'>
    	<div className='detail-content'>
    		<span>Tran Trung Thanh</span>
    		<span>CEO MTT Technology </span>
    		<span>Ha Noi, Viet Nam </span>
    		<span>Over ten years Experience</span>
    		<span>English, VietNammese </span>
    	</div>
    </div>
  </div>
)

export default HomeView
