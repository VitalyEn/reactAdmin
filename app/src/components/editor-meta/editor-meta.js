import React, {Component} from "react";

export default class EditorMeta extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {modal, target} = this.props;
        return(
            <div id={target} data-uk-modal={modal.toString()} container='false'>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">Редактирование Meta-тэгов</h2>
           
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-margin-small-right uk-modal-close"
                        type="button">Отменить</button>
                        <button
                            className="uk-button uk-button-primary uk-modal-close"
                            type="button">Применить</button>
                    </p>
                </div>
            </div>
        )
    }
}