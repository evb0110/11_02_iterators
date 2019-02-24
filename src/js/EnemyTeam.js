export default class EnemyTeam {
  constructor(...characters) {
    if (characters.length === 0) {
      throw new Error('The team cannot be empty!');
    }
    this.characters = characters.sort((char1, char2) => (
      char1.attack + char1.harm - char2.attack - char2.harm
    ));
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.characters.length;

    return {
      next: () => {
        if (current < last) {
          return {
            done: false,
            value: this.characters[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
