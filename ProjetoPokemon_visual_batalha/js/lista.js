function render(){
  const arr = TreinadorStorage.getAll();
  const tbody=document.querySelector("#tabelaTreinadores tbody");
  tbody.innerHTML="";
  arr.forEach((t,i)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${t.nome}</td><td>${t.idade}</td><td>${t.cidade}</td>
    <td>${t.pokemons.map(p=>p.nome).join(", ")}</td>
    <td><button onclick="del(${i})">Excluir</button></td>`;
    tbody.appendChild(tr);
  });
}
function del(i){ if(confirm("Excluir?")){ TreinadorStorage.remove(i); render(); } }
render();
