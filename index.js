import ObjectDataPreviewModal from "./modalObject.js";
import ObjectDataPreviewTable from "./tableObject.js";

const initTable = props =>{
    new ObjectDataPreviewTable(props);
}

const app = async () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            initTable({
                data,
                containerId:'tableContainer',
                onRowClick: function (){
                    console.log('clicked')
                }
            })
        })
}

app();