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
        let title = virtualDom.head.querySelector('title') || virtualDom.head.appendChild(virtualDom.createElement('title'));
    
        let keywords = virtualDom.head.querySelector('meta[name="keywords"]');
        if(!keywords) {
            keywords = virtualDom.head.appendChild(virtualDom.createElement('meta'));
            keywords.setAttribute("name","keywords");
        }

        let description = virtualDom.head.querySelector('meta[name="description"]');
        if(!description) {
            description = virtualDom.head.appendChild(virtualDom.createElement('meta'));
            description.setAttribute("name","description");
        }

        this.setState({
            meta:{
                title: title.innerHTML,
                keywords: keywords.getAttribute("content"),
                description: description.getAttribute("content"),
            }
        })
    }

    render() {
        const {modal, target} = this.props;
        const {title, keywords, description} = this.state.meta;
        
        return(
            <div id={target} data-uk-modal={modal.toString()} container='false'>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">Редактирование Meta-тэгов</h2>
                    <form>
                        <div class="uk-margin">
                            <input className="uk-input" type="text" placeholder="Title" value={title}/>
                        </div>
                        <div class="uk-margin">
                            <textarea className="uk-textarea" rows="5" placeholder="Keywords" value={keywords}></textarea>
                        </div>
                        <div class="uk-margin">
                            <textarea className="uk-textarea" rows="5" placeholder="Description" value={description}></textarea>
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