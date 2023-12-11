import React from "react";
import '../styles/About.css'

function About(){
    return(
        <div class="place-self-center">
          <div>
            <p class= "text-base text-center">I'm Richard Hallam</p> 
            <p>I am a programmer on a continuous journey of learning and creating. During 2023
              I successfully completed a 28 week bootcamp where I honed my skills in cutting-edge technologies, including React,
              Node.js, MySQL, JavaScript, and Test-Driven Development. This experience has greatly improved my web development and
              programming
              skills.
            </p>
              <p>Richard Hallam</p>
              <p>Software Developer | Tech Enthusiast | Constant Learner</p>
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