import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Favourite(){

    return(
        <>
      <span>Add to Favourite </span>
      <FontAwesomeIcon icon={faHeart} className="color"/>
        </>
    )
}