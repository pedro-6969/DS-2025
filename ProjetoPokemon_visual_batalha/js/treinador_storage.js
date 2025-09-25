const TreinadorStorage = {
  key:'treinadores',
  getAll(){ return JSON.parse(localStorage.getItem(this.key)||'[]').map(Treinador.fromJSON); },
  save(t){ const arr=this.getAll(); arr.push(t); localStorage.setItem(this.key, JSON.stringify(arr)); },
  update(i,t){ const arr=this.getAll(); arr[i]=t; localStorage.setItem(this.key, JSON.stringify(arr)); },
  remove(i){ const arr=this.getAll(); arr.splice(i,1); localStorage.setItem(this.key, JSON.stringify(arr)); }
};
