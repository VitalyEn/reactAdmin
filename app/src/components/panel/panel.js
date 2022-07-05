import React from "react";

const Panel = () => {
    return(
        <div className="panel">
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-open">Открыть</button>
            <button className="uk-button uk-button-primary" data-uk-toggle="target: #modal-save">Опубликовать</button>
        </div>
    )
};

export default Panel;