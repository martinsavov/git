/**
 * EXPORT FETCH FUNCTION WITH 
 * PARAMETHER ENDPOINT URL
 */

export function getData(url, showTable){
   return fetch(url)
        .then(response => response.json())
        .then(data => {
            showTable(data);
        });
}