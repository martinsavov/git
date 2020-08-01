import ObjectDataPreviewModal from "./modalObject.js";
import ObjectDataPreviewTable from "./tableObject.js";


const initModal = props => {
    const modal = new ObjectDataPreviewModal(props);
    return modal;
}

const renderFormFromObject = obj => {
    const form = document.createElement('form');

    Object.keys(obj).forEach(key => {
        const formGroup = document.createElement('div');
        formGroup.className = "form-group row";

        const uniqueId = `modal_${key}`;

        const label = document.createElement('label');
        label.className = 'col-sm-5 col-form-label';
        label.setAttribute('for', uniqueId);

        const labelText = document.createTextNode(key);
        label.appendChild(labelText);
        formGroup.appendChild(label);

        const inputContainer = document.createElement('div');
        inputContainer.className = 'col-sm-7';

        /**
         * THIS COULD CAUSE AN ERROR, IF BLANKS Replace:
         *  if(typeof data === 'string'){
         input.type = 'text';
        } else if (typeof data === 'number'){
            input.type === inputType;
        }
         *  const input = document.createElement('input');
         * WITH:
         * input.type = 'text';
         */
        const input = document.createElement('input');
        input.id = uniqueId
        input.className = 'form-control';

        //check for different input types
        if(typeof data === 'string'){
            input.type = 'text';
        } else if (typeof data === 'number'){
            input.type === inputType;
        }
        /**
         * we are starting to linking the tableObj.. elements with the
         * form 
         */
        input.value = obj[key];
        input.setAttribute('data-key', key);

        inputContainer.appendChild(input);
        formGroup.appendChild(inputContainer);

        form.appendChild(formGroup);
    });

    return form;
}

//we access the class and use the constructor below
const initTable = props => {
    new ObjectDataPreviewTable(props);
}

const updateOnSave = (modal, tr, dataObj) => {
    const modalBody = modal.getBody();
    const cells = Array.from(tr.querySelectorAll('td'));

    cells.forEach(cell => {
        const key = cell.getAttribute('data-key');
        const inputSelector = `input[data-key=${key}]`;
        const newValue = modalBody.querySelector(inputSelector).value;

        cell.textContet = newValue;
        dataObj[key] = newValue;
    });

    modal.hide();
}

const rowClick = (modal, data) => event => {
    const target = event.target;
    const tr = target.nodeName === "TR" ? target : target.closest('tr');
    //breaks if no tr
    if(!tr) return;

    const  rowIndex = tr.getAttribute('data-index');
    const dataObj = data[rowIndex];

    const form = renderFormFromObject(dataObj);

    modal.setBody(form);

    const saveButton = modal.getContent().querySelector('.btn-primary.btn');
    const onSave = () => {
        updateOnSave(modal, tr, dataObj);
        saveButton.removeEventListener('click', onSave);
    }

    saveButton.addEventListener('click', onSave);

    modal.show();
}

updateOnSave();

const app = async () => {
    const modal = initModal({containerId: 'myModal'});

    fetch('https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json')
        .then(response => response.json())
        .then(data => {
            initTable({
                data,
                containerId: 'tableContainer',
                onRowClick: rowClick(modal, data)
            })
        })
}

app();