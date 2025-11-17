const form = document.querySelector("form");
const info = document.getElementById("info"); 
const send = document.getElementById("send");
const del = document.querySelectorAll('.delete');
const itens = document.getElementById("itens");
const blind = document.getElementById("blind");

send.addEventListener("click", (e) => {
    e.preventDefault();

    if( info.value==""){
        alert("Caixa de texto vazia não foi possível adicionar a lista, escreva algo")
    }else{
        const newItem = document.createElement("div");
        newItem.id = "item";
        const newDiv = document.createElement("div");
        const newCheck = document.createElement("input");
        newCheck.type = "checkbox"
        const newP = document.createElement("p");
        const newDel = document.createElement("button")
        newDel.classList.add("delete")
        newDel.innerHTML = '<img src="/assets/Trash.svg" alt="">'

        newDiv.append(newCheck);
        newDiv.append(newP);
        newItem.append(newDiv);
        newItem.append(newDel);
        itens.append(newItem);

        newP.textContent = info.value;

        info.value = "";
    }
    
});

document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        button.parentElement.remove();
        blind.removeAttribute("id");
    });
});

newDel.addEventListener("click", (d) =>{
    d.preventDefault();
    del.parentElement.remove();
    blind.removeAttribute("id")
})


