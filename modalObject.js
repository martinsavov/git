class ObjectDataPreviewModal {
    //set to null because there is no instance open set to the modal
    //and a function will be made, in order to create it
    _modal = null;
    _contentContainer = null;
    _bodyContainer = null;
    constructor(props){
        const {containerId, options = {} } = props;

        const modalNode = document.querySelector(`#${containerId}`);

        this._contentContainer = modalNode.querySelector('.modal-content');
        this._bodyContainer = modalNode.querySelector('.modal-body');

        this._modal = new Modal(modalNode, options);
    }
    //check if there is an existing modal already 
    getInstance = () => this._modal;
    getContent = () => this._contentContainer;
    setContent = () => {
        const modal = this._modal;
        modal.setContent(content);
        //Method available from new Modal()
        modal.update()
    };
    getBody = () => this._bodyContainer;
    setBody = content => {
        const container = this._bodyContainer;
        container.innerHHTML = "";
        container.appendChild(content);
    } 
    show = () => {
        this._modal.show();
    }
    hide = () => {
        this._modal.hide();
    }

}

export default ObjectDataPreviewModal;