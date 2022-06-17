import {ImgHTMLAttributes } from 'react'
 
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder? : boolean;
  src : string;
}

import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src, ...props} : AvatarProps) {
  return (
    <img className={ hasBorder ? styles.avatarWithBorder : styles.avatar } src={src} {...props}/>
  )
}