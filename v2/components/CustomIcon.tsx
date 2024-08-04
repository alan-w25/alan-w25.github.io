import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

interface CustomIconProps {
    name: FontAwesomeIconProps['icon']; // Correct typing for FontAwesomeIcon icon prop
    color: string; // ClassName for color styling
    scale?: FontAwesomeIconProps['size']; // Correct typing for size
  }
  

export default function CustomIcon({name, color, scale}: CustomIconProps) {
  return (
    <FontAwesomeIcon 
        icon={name}
        className={`rounded-lg transition-colors duration-300 ${color} border-2 border-black p-2 hover:bg-black hover:text-white ` }
        size={scale}
    />
  )
}
