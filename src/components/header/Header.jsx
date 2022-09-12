import './Header.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed, faCar, faPlane, faTaxi, faPerson, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Header() {

    const [startDate, setStartDate] = useState(new Date());

    // search bar 3rd area state
    const [OpenOption, setOpenOption] = useState(false);
    const [options, setOption] = useState({
        adult:1,
        children:0,
        room:1
    });

    const handelOption = (name,operation)=>{
        setOption((prev)=>{
            return {...prev, [name] : operation === 'i' ? options[name] + 1 : options[name] - 1}
        });

        
    };

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='icons'>
                <div className='icon active'>
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className='icon'>
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className='icon'>
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car rentals</span>
                </div>
                <div className='icon'>
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airpot Taxi</span>
                </div>
            </div>
            <div className='header-content'>
                <h2>A lifetime of discounts? It's Genius.</h2>
                <p>
                    Get rewards for your travels - Unlock instant savings of 10% or more with  a free <span>Fast Booking</span> account
                </p>
                <button className='header-btn'>Explore More</button>
            </div>

            <div className='search'>
                <div className='options'>
                    <div className='text-field border'>
                        <FontAwesomeIcon icon={faBed}/>
                        <span><input type='text' placeholder='Where are you going?' /></span>
                    </div>
                    <div className='date-field border'>
                        <FontAwesomeIcon icon={faCalendarDays}/>
                        <span><DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)} /></span>
                        
                    </div>
                    <div className='person-field border'>
                        <FontAwesomeIcon icon={faPerson}/>
                        <span onClick={()=>setOpenOption(!OpenOption)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}
                        </span>
                        {OpenOption && <div className='person-option'>
                            <div className='optionItem'>
                                <span>Adult</span>
                                <div className='opt-sec'>
                                    <button disabled={options.adult <=1} className='optionCounterbtn' onClick={()=>handelOption('adult', 'd')}>-</button>
                                    <span className='opt-val'>{options.adult}</span>
                                    <button className='optionCounterbtn' onClick={()=>handelOption('adult', 'i')}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span>Children</span>
                                <div className='opt-sec'>
                                    <button disabled={options.children <=0} className='optionCounterbtn' onClick={()=>handelOption('children', 'd')}>-</button>
                                    <span className='opt-val'>{options.children}</span>
                                    <button className='optionCounterbtn' onClick={()=>handelOption('children', 'i')}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span>Room</span>
                                <div className='opt-sec'>
                                    <button disabled={options.room <=1} className='optionCounterbtn' onClick={()=>handelOption('room', 'd')}>-</button>
                                    <span className='opt-val'>{options.room}</span>
                                    <button className='optionCounterbtn' onClick={()=>handelOption('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>}
                        
                    </div>
                    <div className='searchBtn border'>
                        <span><button className='search-btn'>Search</button></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header;