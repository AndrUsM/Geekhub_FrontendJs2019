import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function(){
    return (
        <div className="loader loader_centered">
            <FontAwesomeIcon
                icon={faSpinner}
                className="loader_icon loader_animated"
            />
        </div>
    )
}

