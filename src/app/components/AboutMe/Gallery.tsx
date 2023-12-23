import Slider from 'react-slick'
import styles from './Gallery.module.scss'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Gallery = () =>
{
    const images = [
        "/images/about/1x1/about-1.jpg",
        "/images/about/1x1/about-2.jpg",
        "/images/about/1x1/about-3.jpg",
        "/images/about/1x1/about-4.jpg",
        "/images/about/1x1/about-6.jpg",
    ]
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
      };
    return(
        <>
        <div  className={`${styles.slider}`}>

        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={image + index} className={`h-full w-full ${styles.sliderImageContainer}`}>
                    <Image
                        width={1000}
                        height={1000}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={`h-full w-full object-cover`}
                        />
                </div>
            ))}
        </Slider>
            </div>
        </>
    )
}
export default Gallery