import { ILaptopSlide, IMobileSlide } from '../interfaces/slides';
import Image1 from '../assets/porfolioProj1.png'
import Image2 from '../assets/porfolioProj2.png'
import Image3 from '../assets/porfolioProj3.png'

export const laptopSlides: ILaptopSlide[] = [
    { id: 0, image1: Image1, image2: Image2, image3: Image3 },
    { id: 1, image1: Image1, image2: Image2, image3: Image3 },
    { id: 2, image1: Image1, image2: Image2, image3: Image3 },
]

export const mobileSlides: IMobileSlide[] = [
    { id: 0, image: Image1, },
    { id: 1, image: Image2, },
    { id: 2, image: Image3 },
    { id: 3, image: Image1, },
    { id: 4, image: Image2, },
    { id: 5, image: Image3 },
    { id: 6, image: Image1, },
    { id: 7, image: Image2, },
    { id: 8, image: Image3 },
]