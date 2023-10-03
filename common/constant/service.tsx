import { IServiceItem } from "../types/service"
import { 
    CgWebsite as WebServiceIcon
} from 'react-icons/cg'
import {
    AiOutlineMobile as MobileServiceIcon,
    AiOutlineLineChart as DataServiceIcon
} from 'react-icons/ai'
import {
    GoProjectRoadmap as WorkServiceIcon
} from 'react-icons/go'

const iconSize = 20

const SERVICES:IServiceItem[] = [
    {
        title:'Web Development',
        description:'Delivering high quality websites and web apps',
        icon: <WebServiceIcon size={iconSize} />,
        slug:'web-development',
        image:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        isShow:true
    },
    {
        title:'Mobile App Development',
        description:'Delivering production grade mobile application',
        icon: <MobileServiceIcon size={iconSize} />,
        slug:'mobile-development',
        image:'https://images.unsplash.com/photo-1644794472051-36d154dfe487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        isShow:true
    },
    {
        title:'Data Driven Solution',
        description:'Delivering high quality data driven solution',
        icon: <DataServiceIcon size={iconSize} />,
        slug:'data-driven-solution',
        image:'https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
        isShow:true
    },
    {
        title:'Schoolwork & Collegework',
        description:'Solve and deliver any schoolwork with confident',
        icon: <WorkServiceIcon size={iconSize} />,
        slug:'school-work',
        image:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        isShow:true
    },
    {
        title:'Consulting and Strategy',
        description:'Providing expert advice and strategic planning in the digital landscape effectively',
        icon: <WebServiceIcon size={iconSize} />,
        slug:'consult-and-strategy',
        image:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        isShow:false
    },
    {
        title:'Freelancer and Outsourcing',
        description:'Takes and complete given task confidently',
        icon: <WebServiceIcon size={iconSize} />,
        slug:'freelance-and-outsourcing',
        image:'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        isShow:false
    },
]

export default SERVICES