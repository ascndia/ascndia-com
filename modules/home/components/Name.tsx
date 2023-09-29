"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
export default function Name() {
    const words = ['Ascndia','Abdurrahman'];
    return (
        <Typewriter typeSpeed={200} deleteSpeed={150} loop={false} words={words}/>
    )
}
