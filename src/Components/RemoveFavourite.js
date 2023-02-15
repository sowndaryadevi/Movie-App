import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'

export default function RemoveFavourite(){
    return(
        <>
        <span>Remove Favourite </span>
        <FontAwesomeIcon icon={faSquareXmark} />
          </>    
    )
}