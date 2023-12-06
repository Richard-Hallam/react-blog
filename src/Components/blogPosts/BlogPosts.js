import React from "react";
import '../../styles/BlogPosts.css';


function BlogPosts(){

        return <div>
            <ul class="p-10">
              <li class="flex gap-4 flex-col items-center">
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 max-w-screen-lg">
                    <h3 class="text-2xl font-bold font-mono text-center">Title</h3>
                    <img src={require('../../Images/cameraPicture.jpg')} alt='me with a camera'></img>
                    <p class="text-base font-bold">subheading</p>
                    <p class="text-base font-mono">body text</p>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 max-w-screen-lg">
                    <h3 class="text-2xl font-bold font-mono text-center">Title</h3>
                    <img src={require('../../Images/cameraPicture.jpg')} alt='me with a camera'></img>
                    <p class="text-base font-bold">subheading</p>
                    <p class="text-base font-mono">body text</p>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 max-w-screen-lg">
                    <h3 class="text-2xl font-bold font-mono text-center">Title</h3>
                    <img src={require('../../Images/cameraPicture.jpg')} alt='me with a camera'></img>
                    <p class="text-base font-bold">subheading</p>
                    <p class="text-base font-mono">body text</p>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 max-w-screen-lg">
                    <h3 class="text-2xl font-bold font-mono text-center">Title</h3>
                    <img src={require('../../Images/cameraPicture.jpg')} alt='me with a camera'></img>
                    <p class="text-base font-bold">subheading</p>
                    <p class="text-base font-mono">body text</p>
                </div>
              </li>
            </ul>
        </div>
    }


export default BlogPosts;

//Blog post template

//     <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-400 max-w-screen-lg">
//         <h3 class="text-2xl font-bold font-mono text-center">Title</h3>
//         <img src={require('../../Images/cameraPicture.jpg')} alt='me with a camera'></img>
//         <p class="text-base font-bold">subheading</p>
//         <p class="text-base font-mono">body text</p>
//     </div>
