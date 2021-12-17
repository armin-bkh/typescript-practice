//rendering and html element in to the DOM
class ListTemplate {
    constructor(containter) {
        this.containter = containter;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4, p);
        if (pos === "start") {
            this.containter.prepend(li);
            return;
        }
        this.containter.append(li);
    }
}
export default ListTemplate;
//rendering and html element in to the DOM
