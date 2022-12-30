
import DevIcon from '../assets/devIcon.svg'
import UiuxIcon from '../assets/uiuxIcon.svg'
import GraphikIcon from '../assets/graphikIcon.svg'
import MotionIcon from '../assets/motionIcon.svg'
import PhotoIcon from '../assets/photoIcon.svg'
import videoIcon from '../assets/videoIcon.svg'
import { IService } from '../interfaces/IService'

export const services: IService[] = [
    {
        id: 0,
        title: 'Development',
        descr: 'Create a platform with the best and coolest quality from us.',
        icon: DevIcon,
    },
    {
        id: 1,
        title: 'UI/UX Designer',
        descr:
            'We provide UI/UX Design services, and of course with the best quality',
        icon: UiuxIcon,
    },
    {
        id: 2,
        title: 'Graphik Designer',
        descr: 'We provide Graphic Design services, with the best designers',
        icon: GraphikIcon,
    },
    {
        id: 3,
        title: 'Motion Graphik',
        descr: 'Create a platform with the best and coolest quality from us.',
        icon: MotionIcon,
    },
    {
        id: 4,
        title: 'Photography',
        descr:
            'We provide Photography services, and of course with the best quality',
        icon: PhotoIcon,
    },
    {
        id: 5,
        title: 'Videography',
        descr: 'Create a platform with the best and coolest quality from us.',
        icon: videoIcon,
    },
]