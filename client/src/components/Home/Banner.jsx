import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constant/Data';
import styled from '@emotion/styled';

const Image=styled('img')({
    width:'100%',
    height:"180px",
})
const Banner = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    
        <Carousel
        swipeable={false}
        draggable={false} responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        containerClass="carousel-container">
  {bannerData.map(data=>{
    return(<div>
        <Image src={data.url} alt="banner" style={{}}></Image>
    </div>)
  })}
</Carousel>
    
  )
}

export default Banner