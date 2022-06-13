import React from 'react';
import './categories.css'
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

import { Link } from 'react-router-dom';

function Categories() {
 
  return (
    <div className='categories'>
      <div className="catWrap"> 
        <Link to = '/tags'>
          <button 
            className="catItems">
            < BallotOutlinedIcon className='icon'/>  
              All post
          </button>
        </Link>  
        <Link to = '/tags/?cat=Jobseeker'>
          <button 
            className="catItems">
            < WorkOutlineOutlinedIcon className='icon'/>  
              Jobseeker
          </button>
        </Link> 
        <Link to = '/tags/?cat=Accommodation'>
          <button 
            className="catItems">
            < HomeOutlinedIcon className='icon'/>    
              Accommodation
           </button>
        </Link>
        <Link to = '/tags/?cat=Buy-Sell'>   
          <button 
            className="catItems" >
            < StorefrontOutlinedIcon className='icon'/>   
              Buy-Sell
          </button>
        </Link>
        <Link to = '/tags/?cat=Service'>
          <button 
            className="catItems" >
            < CleaningServicesOutlinedIcon className='icon'/>  
              Service
          </button>
        </Link>
        <Link to = '/tags/?cat=News'>
          <button 
            className="catItems" >
            < NewspaperOutlinedIcon className='icon'/>  
              News
          </button>
        </Link>  
        <Link to = '/tags/?cat=Review'>
          <button 
            className="catItems" >
            < RateReviewOutlinedIcon className='icon'/>  
              Review
          </button>
        </Link>  
      </div>
    </div>
  )
}

export default Categories;
