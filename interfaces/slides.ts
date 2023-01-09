import { StaticImageData } from 'next/image'

export interface ILaptopSlide {
    id: number
    image1: StaticImageData
    image2: StaticImageData
    image3: StaticImageData
}

export interface IMobileSlide {
    id: number
    image: StaticImageData
}