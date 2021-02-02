export const logItem = (value: any, isCustomClass: boolean = false) => {
    const
        node = document.createElement("li"),
        textnode = document.createTextNode(value);
    if(isCustomClass){
        node.classList.add('custom');
    }
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}