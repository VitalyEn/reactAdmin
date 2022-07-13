import React, {Component} from "react";

export default class EditorMeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meta:{
                title: '',
                keywords: '',
                description: ''
            }
        }
    }

    componentDidMount() {
        this.getMeta(this.props.virtualDom);
    }
    
    getMeta(virtualDom) {
        this.title = virtualDom.head.querySelector('title') || virtualDom.head.appendChild(virtualDom.createElement('title'));
    }

    render() {
        const {modal, target} = this.props;

        return(
            <div id={target} data-uk-modal={modal.toString()} container='false'>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">Редактирование Meta-тэгов</h2>
                    <form>
                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Title"/>
                        </div>
                        <div class="uk-margin">
                            <textarea class="uk-textarea" rows="5" placeholder="Keywords"></textarea>
                        </div>
                        <div class="uk-margin">
                            <textarea class="uk-textarea" rows="5" placeholder="Description"></textarea>
                        </div>
                    </form>
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