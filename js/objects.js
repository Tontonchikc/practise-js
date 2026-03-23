const game = {
  name: "Metro 2033",

  year: Number(2010),

  description:
    "Metro 2033 is a post-apocalyptic first-person shooter video game with elements of survival horror and stealth, developed by the Ukrainian studio 4A Games and published by the American company THQ in March 2010. The game is an interpretation of the novel of the same name by Russian writer Dmitry Glukhovsky.",

  heroes: ["Artem", "Burbon", "Hunter"],
  showHeroes() {
    for (const val of this.heroes) Х
    console.log(hero)
  }


};

console.log(game.year);
console.log(game["name"]);
game.creator = "4AGames";
console.log(game.creator);
delete game.description;
console.log(game);


const createGame = (gameName, gameYear) => {
    return {}
}


game.showYeroes();