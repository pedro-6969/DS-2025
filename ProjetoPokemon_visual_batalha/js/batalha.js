function getTrainers() {
  return TreinadorStorage.getAll();
}

function carregarTreinadores() {
  const arr = getTrainers();
  const sel1 = document.getElementById("treinador1");
  const sel2 = document.getElementById("treinador2");
  [sel1, sel2].forEach(sel => {
    sel.innerHTML = "<option value=''>-- Selecione --</option>";
    arr.forEach((t, i) => {
      sel.innerHTML += `<option value="${i}">${t.nome}</option>`;
    });
  });
}

function carregarPokemons(selTreinador, selPokemon) {
  const arr = getTrainers();
  const t = arr[selTreinador.value];
  selPokemon.innerHTML = "";
  if (t) {
    t.pokemons.forEach((p, i) => {
      selPokemon.innerHTML += `<option value="${i}">${p.nome}</option>`;
    });
  }
}

document.getElementById("treinador1").addEventListener("change", () => {
  carregarPokemons(document.getElementById("treinador1"), document.getElementById("pkm1"));
});
document.getElementById("treinador2").addEventListener("change", () => {
  carregarPokemons(document.getElementById("treinador2"), document.getElementById("pkm2"));
});

document.getElementById("btnIniciar").addEventListener("click", () => {
  const arr = getTrainers();
  const t1 = arr[document.getElementById("treinador1").value];
  const t2 = arr[document.getElementById("treinador2").value];
  if (!t1 || !t2 || t1 === t2) return alert("Escolha dois treinadores diferentes!");

  const p1 = Pokemon.fromJSON(t1.pokemons[document.getElementById("pkm1").value]);
  const p2 = Pokemon.fromJSON(t2.pokemons[document.getElementById("pkm2").value]);

  let hp1 = p1.hp, hp2 = p2.hp;
  const hp1Max = p1.hp, hp2Max = p2.hp;

  // Mostra sprites e barras de HP
  document.getElementById("resultadoBatalha").innerHTML = `
    <div style="display:flex;justify-content:space-around;align-items:center;gap:20px;">
      <div style="text-align:center">
        <img src="${p1.sprite}" style="width:120px;image-rendering:pixelated"><br>
        <progress id="hpBar1" value="${hp1}" max="${hp1Max}" style="width:120px"></progress><br>
        ${p1.nome} (HP: <span id="hpText1">${hp1}</span>)
      </div>
      <b style="font-size:24px">VS</b>
      <div style="text-align:center">
        <img src="${p2.sprite}" style="width:120px;image-rendering:pixelated"><br>
        <progress id="hpBar2" value="${hp2}" max="${hp2Max}" style="width:120px"></progress><br>
        ${p2.nome} (HP: <span id="hpText2">${hp2}</span>)
      </div>
    </div>
  `;

  let log = [];
  let round = 1;

  function atualizarHP() {
    document.getElementById("hpBar1").value = hp1;
    document.getElementById("hpBar2").value = hp2;
    document.getElementById("hpText1").innerText = Math.max(0,hp1);
    document.getElementById("hpText2").innerText = Math.max(0,hp2);
  }

  function turno() {
    if (hp1 <= 0 || hp2 <= 0) {
      const vencedor = hp1 > 0 ? p1.nome : p2.nome;
      log.push(`<b>Vencedor: ${vencedor}</b>`);
      document.getElementById("log").innerHTML = log.join("<br>");
      salvarHistorico(t1.nome, p1.nome, t2.nome, p2.nome, vencedor);
      mostrarHistorico();
      return;
    }
    // p1 ataca
    let dmg1 = Math.max(1, p1.ataque - Math.floor(p2.defesa / 2));
    if (Math.random() < 0.15) { dmg1 *= 2; log.push(`${p1.nome} acertou um crítico!`); }
    hp2 -= dmg1;
    log.push(`${p1.nome} causou ${dmg1} de dano em ${p2.nome}`);
    atualizarHP();
    if (hp2 <= 0) return turno();

    // p2 ataca
    let dmg2 = Math.max(1, p2.ataque - Math.floor(p1.defesa / 2));
    if (Math.random() < 0.15) { dmg2 *= 2; log.push(`${p2.nome} acertou um crítico!`); }
    hp1 -= dmg2;
    log.push(`${p2.nome} causou ${dmg2} de dano em ${p1.nome}`);
    atualizarHP();

    document.getElementById("log").innerHTML = log.join("<br>");
    round++;
    if (round < 50) setTimeout(turno, 1000); // anima rodada a cada 1s
  }

  atualizarHP();
  document.getElementById("log").innerHTML = "";
  setTimeout(turno, 1000);
});

function salvarHistorico(t1, p1, t2, p2, vencedor) {
  const hist = JSON.parse(localStorage.getItem("historico") || "[]");
  hist.push({t1, p1, t2, p2, vencedor, data: new Date().toLocaleString()});
  localStorage.setItem("historico", JSON.stringify(hist));
}

function mostrarHistorico() {
  const hist = JSON.parse(localStorage.getItem("historico") || "[]");
  const box = document.getElementById("historico");
  box.innerHTML = hist.map(h => `
    <div class="small">
      ${h.data}: ${h.t1} (${h.p1}) vs ${h.t2} (${h.p2}) → <b>${h.vencedor}</b>
    </div>
  `).join("");
}

document.getElementById("btnLimparLog").addEventListener("click", () => {
  document.getElementById("log").innerHTML = "";
  document.getElementById("resultadoBatalha").innerHTML = "";
});

carregarTreinadores();
mostrarHistorico();
