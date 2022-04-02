import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section>
                        <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3)), url(${coverImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "calc(100vh - 3rem - 6rem)",
                    backgroundPosition: "center",
                    backgroundBlendMode: "darken", 

                
                }}>
<div className="text-white text-center pt-[7%] text-xl">
                    <h1 className="text-5xl">Who Am I?</h1>
                    <br />
                   

            <p>
I've been described as a Renaissance man. And I think my versatility and experiences is one of my strengths. Before I got into coding, I spent over a decade as a teacher. I lived overseas. I earned my master's degree in Classics. I taught Latin. I read Greek. I speak Japanese. I motorcyle, snowboard, drum, read philosophy, and juggle. I'm also a giant nerd.</p>
<br />

<p>I'm always looking to expand my skills. I thrive on new challenges. Coding for me is the ultimate logic puzzle and presents an amazing opportunity for me to express myself creatively. My background gives me the ability to work on projects in any field confidently and approach problems all developers face with a new angle.</p>
<br />
<p>You can frequently find me hiking, riding my mountain bike, on the country roads on my motorcyle, at the ju jitsu gym, at the local coffee shop reading some heavy non-fiction, or just hanging with the family.</p>
          </div>
            </div>
        </section>
    );
}

export default About;