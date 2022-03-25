vikingAttack(){
    let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

    let attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
    this.saxonArmy[randomSaxon].filter(deads => deads.health <= 0) ;

    return attack

  }