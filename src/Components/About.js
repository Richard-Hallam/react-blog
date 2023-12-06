import React from "react";
import '../styles/About.css'

function About(){
    return(
        <div class="place-self-center">
          <div>
            <p class= "text-base text-center">I am a junior developer specialising in javascript, SQL, react, python and more. </p>
            <p class=" text-base text-center">Here are my github contributions</p>
            <p class="flex justify-center">
                <img class="items-center" src="http://ghchart.rshah.org/Richard-Hallam" alt="Richard-Hallam's Github chart" />
            </p>
            <p class="text-xs font-light text-center">The above image was generated using the following api https://github.com/2016rshah/githubchart-api</p>
          </div>
          <div>
            <p class="text-lg font bold">Contact</p>
            <p class="text-base font-semibold">Email: richard.hallam@live.co.uk</p>
          </div>
        </div>
    )
}


export default About;