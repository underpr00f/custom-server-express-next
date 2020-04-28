import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { MaterialSlider } from '../../UI/Organisms/MaterialSlider'
import { ControlSliderButton } from '../../UI/Atoms/ControlSliderButton';

const SectionSlider= () => {
    // input quantity visible slides
    const slides = 3;
    const [ sliding, setSliding ] = useState(0);
    const [ images, setImages ] = useState([
        'http://media.dunkedcdn.com/assets/prod/40946/580x0-9_cropped_1371566801_p17tbs0rrjqdt1u4dnk94fe4b63.jpg',
        'http://media.dunkedcdn.com/assets/prod/40946/580x0-9_cropped_1371565525_p17tbqpu0d69c21hetd77dh483.jpeg',
        'http://media.dunkedcdn.com/assets/prod/40946/580x0-9_cropped_1371564896_p17tbq6n86jdo3ishhta3fv1i3.jpg',
        'https://via.placeholder.com/200x150?text=4',
        'https://via.placeholder.com/200x150?text=5',
        'https://via.placeholder.com/200x150?text=6',
        'https://via.placeholder.com/200x150?text=7',
        'https://via.placeholder.com/200x150?text=8',
        'https://via.placeholder.com/200x150?text=9',
        'https://via.placeholder.com/200x150?text=10',
        'https://via.placeholder.com/200x150?text=11',
        'https://via.placeholder.com/200x150?text=12',
        'https://via.placeholder.com/200x150?text=13',
        'https://via.placeholder.com/200x150?text=14',
        'https://via.placeholder.com/200x150?text=15',
        'https://via.placeholder.com/200x150?text=16',
        'https://via.placeholder.com/200x150?text=17',
        'https://via.placeholder.com/200x150?text=18',
      ]);
    
      const [ currentImageIdx, setCurrentImagIdx ] = useState(0);
    
      const prevSlide = () => {
        // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
        const resetToVeryBack = currentImageIdx === 0;

        const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
        setSliding(1)
        // assign the logical index to current image index that will be used in render method
        // setTimeout(() => {
        //     setCurrentImagIdx(index);
        // }, 1000);        
        setTimeout(() => {
            setCurrentImagIdx(index);
            // setSliding(0)
        }, 1500);

      };
    
      const nextSlide = () => {
        // check if we need to start over from the first index
        const resetIndex = currentImageIdx === images.length - 1;
    
        const index = resetIndex ? 0 : currentImageIdx + 1;
        setSliding(2)
        // assign the logical index to current image index that will be used in render method
        
        setTimeout(() => {
            setCurrentImagIdx(index);
            // setSliding(0)
        }, 1500);
      }
    
      // create a new array with 5 elements from the source images
      const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + slides);
    
      // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
      const imageSourcesToDisplay = activeImageSourcesFromState.length < slides
        // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        ? [...activeImageSourcesFromState, ...images.slice(0, slides - activeImageSourcesFromState.length) ]
        : activeImageSourcesFromState;
     
  return (
    <>
        <MaterialSlider>
            <div 
                className="slider-container">
                {/* render images */}
                {imageSourcesToDisplay.map((image, index) =>
                    <img 
                      className={
                          sliding===1
                            ? "sliding-l"
                          :
                          sliding===2
                            ? "sliding-r"
                          :  ""} 
                        key={index} 
                        src={image} 
                        alt="" 
                        style={{ 
                            maxWidth: '100%',// for 1 slide 100%
                        }} />
                )}
                <span className="arrow arrow-left" onClick={prevSlide}>
                    <ControlSliderButton isLeft={true}/>
                </span>
                <span className="arrow arrow-right" onClick={nextSlide}>
                    <ControlSliderButton isLeft={false}/>
                </span>
            </div>
        </MaterialSlider>
    </>
  )
}

// SectionTitle.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default SectionSlider
