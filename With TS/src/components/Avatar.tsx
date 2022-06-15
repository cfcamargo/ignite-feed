interface AvatarProps {
  src : string;
  hasBorder? : boolean;
  alt? : string;
}

import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src, alt} : AvatarProps) {
  return (
    <img className={ hasBorder ? styles.avatarWithBorder : styles.avatar } src={src} alt={alt}/>
  )
}