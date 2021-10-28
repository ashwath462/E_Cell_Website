import React from 'react'
import CountUp from 'react-countup'
import './counter2.css'

export default function counter(){
    return (
        <>
        <div className = "container" >
            <a class="card1" href="#">
                <h3><CountUp end = {10000} duration = {3}/>+</h3>
                <p class="small">Community</p>
                <div class="go-corner" href="#">
                <div class="go-arrow">
                &#8902;
                </div>
                </div>
            </a>

            <a class="card1" href="#">
                <h3><CountUp end = {250} duration = {1.6}/>+</h3>
                <p class="small">E-Cell Members</p>
                <div class="go-corner" href="#">
                <div class="go-arrow">
                &#8902;
                </div>
                </div>
            </a>

            <a class="card1" href="#">
                <h3> <CountUp end = {55} duration = {1.3}/>+</h3>
                <p class="small">Start-ups</p>
                <div class="go-corner" href="#">
                <div class="go-arrow">
                &#8902;
                </div>
                </div>
            </a>
            
            <a class="card1" href="#">
                <h3><CountUp end = {50} duration = {1}/>+</h3>
                <p class="small">Events</p>
                <div class="go-corner" href="#">
                <div class="go-arrow">
                &#8902;
                </div>
                </div>
            </a>

            <a class="card1" href="#">
                <h3><CountUp end = {5000} duration = {2.4}/>+</h3>
                <p class="small">Footfall</p>
                <div class="go-corner" href="#">
                <div class="go-arrow">
                &#8902;
                </div>
                </div>
            </a>

        </div>
        </>
    );
}