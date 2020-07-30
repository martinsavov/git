/**
 * EXPORT FUNCTION THAT CRAETES TABLE 
 * FROM INPUT DATA
 */

export function generateTable(data) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let keys = Object.keys(data[0]);

    keys.forEach(element => {
        let th = document.createElement('th');
        th.innerText = element;
        tr.append(th);
    });
    thead.append(tr);

    let tbody = document.createElement('tbody');
    data.forEach(element => {
        let tr = document.createElement('tr');
        keys.forEach(elKey => {
            let td = document.createElement('td');
            td.innerText = element[elKey];
            tr.append(td);
        })
        tbody.append(tr);        
    })
    table.append(thead);
    table.append(tbody);
    document.body.append(table);
}