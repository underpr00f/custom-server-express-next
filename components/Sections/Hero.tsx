import React from "react";
import SectionIdSlider from "./SectionIdSlider";

const Hero = (
    { 
        imgUrl,
        withSlider,
        title,
        description
    }
    :{
        withSlider: boolean | undefined,
        imgUrl: string | undefined,
        title: string,
        description: string
    }) => {
        
    return (
        <>
            {withSlider ?
                    <SectionIdSlider />               
            :
                <div className="banner-hero">
                    <img className="banner-img" src={imgUrl} />
                    <div className="banner-content">
                        <h1>{title}</h1>
                        <h4>{description}</h4>
                    </div>
                </div>            
            }

        </>
    )        
};

export default Hero;

// Hero.defaultProps = {
//     imgUrl: "defaultHero"
// };
