import React from "react";
import '../styles/About.css'

function About(){
    return(
        <div>
          <div>
            <p class= "text-base">I am a junior developer specialising in javascript, react, python and more. </p>
            <p >Here are my github contributions</p>
            <img class="items-center" src="http://ghchart.rshah.org/Richard-Hallam" alt="Richard-Hallam's Github chart" />
            <p class="text-xs font-light items-center">The above image was generated using the following api https://github.com/2016rshah/githubchart-api</p>
          </div>
          <div>
            <p class="text-lg font bold">Contact</p>
            <p class="text-base font-semibold">Email: richard.hallam@live.co.uk</p>
          </div>
        </div>
    )
}


export default About;