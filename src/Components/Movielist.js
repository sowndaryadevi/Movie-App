import React from "react"

export default function Movielist(props) {
    const Favourites = props.favourite
    return (
        <>
            {props.movie && props.movie.map((pre, index) => {
                
                return (
                   
                    <div className="img-container">
                        <img src={pre.Poster} alt="pic" className="img"></img>
                        <div className="overlay" onClick={() => props.onclick(pre)}><Favourites /></div>
                    </div>)
            })}
        </>
    )

}