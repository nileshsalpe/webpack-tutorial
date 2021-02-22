import { PersonGenerator, PersonSorter } from "../core/person"
import banana_1 from "../../assets/images/banana_1.jpg"
import banana_2 from "../../assets/images/banana_2.jpg"
import banana_3 from "../../assets/images/banana_3.jpg"
import _ from "lodash";


export function buildTable(size, sortProps) {
    const images = [banana_1, banana_2, banana_3];

    const data = PersonGenerator.generate(size);
    const persons = PersonSorter.sort(data, sortProps);

    const table = document.createElement("table");
    table.setAttribute("id", "person-table");
    const tableBody = document.createElement('tbody');
    const tableHead = document.createElement('thead');

    const headerRow = document.createElement('tr');

    const hCell1 = document.createElement('th');
    hCell1.appendChild(document.createTextNode(("Name")));
    headerRow.appendChild(hCell1);

    const hCell2 = document.createElement('th');
    hCell2.appendChild(document.createTextNode(("Age")));
    headerRow.appendChild(hCell2)

    const hCell3 = document.createElement('th');
    hCell3.appendChild(document.createTextNode(("Photo")));
    headerRow.appendChild(hCell3)

    tableHead.appendChild(headerRow);



    for (var index in persons) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.appendChild(document.createTextNode(persons[index].name));
        row.appendChild(cell1);
        const cell2 = document.createElement('td');
        cell2.appendChild(document.createTextNode(persons[index].age));
        row.appendChild(cell2);

        const cell3 = document.createElement('td');
        const image = document.createElement('img');
        image.src = _.sample(images);
        image.style = "width:100px;height:100px;"
        cell3.appendChild(image);
        row.appendChild(cell3);

        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    table.appendChild(tableHead);
    return table;
}