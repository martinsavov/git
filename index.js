import ObjectDataPreviewModal from "./modalObject.js";
import ObjectDataPreviewTable from "./tableObject.js";

const initTable = props => {
    new ObjectDataPreviewTable(props);
}

const app = async () => {
    fetch('https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json')
        .then(response => response.json())
        .then(data => {
            initTable({
                data,
                containerId: 'tableContainer',
                onRowClick: function (e) {
                    e.target.style.backgroundColor = 'green';
                }
            })
        })
}

app();