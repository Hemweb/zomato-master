import React,{useState} from 'react'
import Slider from 'react-slick'

import PictureCarouselCard from '../PictureCarouselCard'
import {NextArrow, PrevArrow} from '../CarouselArrow'

function DiningCarousel() {const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [diningOut] = useState([
    {
      image: 'https://b.zmtcdn.com/data/collections/2e5c5dc79d4b465797c8e425d814f42c_1582256432.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    },
    {
      image: 'https://b.zmtcdn.com/data/collections/4092d4c0262a7526e1459844a7916211_1619016017.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    },
    {
      image: 'https://b.zmtcdn.com/data/collections/4092d4c0262a7526e1459844a7916211_1619016017.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    },
    {
      image: 'https://b.zmtcdn.com/data/collections/bc0c37f8fc87da896641714b9ef7f0b7_1575621158.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    },
    {
      image: 'https://b.zmtcdn.com/data/collections/4092d4c0262a7526e1459844a7916211_1619016017.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    },
    {
      image: 'https://b.zmtcdn.com/data/collections/bc0c37f8fc87da896641714b9ef7f0b7_1575621158.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    },
    {
      image: 'https://b.zmtcdn.com/data/collections/2e5c5dc79d4b465797c8e425d814f42c_1582256432.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    },
    {
      image: 'https://b.zmtcdn.com/data/collections/4092d4c0262a7526e1459844a7916211_1619016017.jpg?output-format=webp',
      title: 'Best Of CHENNAI',
      places: '150 places'
    }
  ])
    return (
        <div className='w-full'>
        <Slider {...settings}>
          {diningOut.map((diningOut, index) => (
            <PictureCarouselCard {...diningOut} key={index}/>

          ))}
        </Slider>
        </div>
    )
}

export default DiningCarousel
