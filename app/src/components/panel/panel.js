import React from "react";

const Panel = () => {
    return(
        <div className="panel">
            <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-open">Открыть</button>
            <button className="uk-button uk-button-primary uk-margin-small-right" data-uk-toggle="target: #modal-save">Опубликовать</button>
            <button className="uk-button uk-button-primary uk-margin-small-right" data-uk-toggle="target: #modal-meta">Редактировать Meta</button>
            <button className="uk-button uk-button-default" data-uk-toggle="target: #modal-backup">Восстановить</button>
            <button className="uk-button uk-button-danger" data-uk-toggle="target: #modal-logout">Выход</button>
        </div>
    )
};

export default Panel;