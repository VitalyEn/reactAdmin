import React from 'react';

const ChooseModal = ({modal, target}) => {
    return (
        <div id={target} uk-modal={modal.toString()}>
            <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">Открыть</h2>
                <p className="uk-text-right">
                    <button className="uk-button uk-button-default uk-modal-close"
                    type="button">Отменить</button>
                </p>
            </div>
        </div>
    )
};

export default ChooseModal;