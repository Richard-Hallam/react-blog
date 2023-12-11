import Reac from "react";


function Projects(){
    return(
        <div>
            <h4>React blog</h4>
            <p>
                This project was a simple react blog. You are looking at it right now. I just wanted to reinforce some of the things 
                I learned during my programming bootcamp as well as experiment with different styling. I used tailwind css which was
                not covered in the bootcamp. I found it helped me work a little faster rather than hopping to a different file to 
                tweak the css. Now I hop to the cheatsheet instead. This blog will be an ongoing project. Aside from adding more 
                content I have plans to showcase some projects in an interactive way when practical. 
            </p>
            <p>For now planned features are</p>
                <ol>
                    <li>Better styling</li>
                    <li>improved viewing on mobile devices</li>
                    <li>interactive projects</li>
                </ol>
                <a href="https://github.com/Richard-Hallam/react-blog"><button class="bg-green-700 py-2 px-4 rounded-2xl">The blog on Github</button></a>
            <h4>Discord Bot Fitness Contests:</h4>
              <p>
                In colaboration with a friend who had previously written a bot for discord I wrote some code that requested workout
                data from the map my Fitness api. It then used time spent in heart rate zones to try and make a relatively fair
                fitness competition for people with very different levels of fitness. The bot however is not public as it was a private
                project.
              </p>
            <h4>Hydroponics Management System (Python):</h4> 
              <p>
                Currently, I'm experimenting with hydroponics by developing a Hydroponics Management System using Python. This
                project is based around automatic balancing of ph and total dissolved solids. It's a testament to my commitment to
                merging technology with sustainable practices.
              </p>
            <h4>Team Communication App for Action Sports (React Native):</h4>
              <p>
              This app will be a way of enabling better and clearer Communication for action sports such as airsoft and paintball. It will
              work like a colaborative map where ponts or areas can be marked, photos shared and objectives tracked. The interface
              needs to be simple enough for use with gloves. This project may be a little ambitous for a first react native project
              but I hope to edit this page soon with some updates.
              </p>
        </div>
)}

export default Projects;