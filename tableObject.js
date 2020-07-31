class ObjectDataPreviewTable{
    constructor(props){
        //we get data in ObjectDataPreviewTable, as props,
        /**
         * which will be an object. The data we destructure
         * in 3 constants 13:45
         * onRowClick - function to be executed on click
         */
        const { data, containerId, onRowClick } = props;
        
        //get table container/holder
        const tableContainer = document.getElementById(containerId);
        
        //generate new table
        const newTable = document.createElement('table');
        newTable.className = "table table-bordered table-striped table-hover";

        //we get the first key from the response
        const columnNames = Object.keys(data[0]);
        //generate table head
        const thead = this.generateHeader(columnNames);

        newTable.appendChild(thead);

        //generate table body
        const tbody = this.generateBody(data);

        //check for oncklick function and append if existing
        if(onRowClick){
            tbody.addEventListener('click', onRowClick);
        }
        //add tbody to table
        newTable.appendChild(tbody);
        // add table to tabla container
        tableContainer.appendChild(newTable);

    }

    

    //class method syntax. We create the head part of the table
    generateHeader = columnTitles => {
        //create thead,trow
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        columnTitles.forEach(title => {
            // create cell
            const th = document.createElement('th');

            // create text node for the cell
            const text = document.createTextNode(title);

            //add text to cell
            th.appendChild(text);

            // add cell to row
            headerRow.appendChild(th);
        })

        // add row to table head
        thead.appendChild(headerRow);

        return thead;
    }

    generateBody = data => {
        const tbody = document.createElement('tbody');
        
        //since the response we are getting is an object
        //we are calling the object itself and the desired index
        data.forEach(obj, index => {
            //obj -> data[i]
            //index -> i

            const tr = document.createElement('tr');
            //giving the tr attrubute data-index
            tr.setAttribute('data-index',index); 

            //looping through the object keys, to get and append them to the tbody
            Object.keys(obj).forEach(key => {
                const td = document.createElement('td');
                td.setAttribute('data-key',key);
                //generate text node for the key value
                const text = document.createTextNode(obj[key]);
                //add text to cell
                td.appendChild(text);
                //add cell to the row
                tr.appendChild(td);
            });
            //add row to the tbody
            tbody.appendChild(tr)
        });
        //return generated tbody
        return tbody;
    }
}
//export class
export default ObjectDataPreviewTable;