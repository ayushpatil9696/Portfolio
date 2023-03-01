import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//img
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div>
          <div>
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br/>
                work
              </h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
              </p>
              {/* image */}
              <div>image</div>
            </div>
            <div>2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
