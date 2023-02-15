import React from "react"

export default function MovieHead(props) {

    function handleChange(event) {
        props.setSearch(event.target.value)
    }
    return (
        <div className="head">
            <h2>Movie </h2>
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={props.Search}
            ></input>

        </div>
    )
}