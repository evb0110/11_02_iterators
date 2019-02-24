import EnemyTeam from '../src/js/EnemyTeam';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  harm: 15,
  defence: 10,
};

const magician = {
  name: 'Маг',
  type: 'Magician',
  health: 100,
  level: 2,
  attack: 50,
  harm: 2,
  defence: 100,
};

const human = {
  name: 'Чел',
  type: 'Human',
  health: 8,
  level: 1,
  attack: 14,
  harm: 40,
  defence: 30,
};

test('testing a team with three characters', () => {
  const team = new EnemyTeam(bowman, magician, human);
  const arrResult = [];
  for (const character of team) {
    arrResult.push(character);
  }

  expect(arrResult).toEqual([magician, human, bowman]);
});

test('testing an empty team, should fail', () => {
  const makeResult = () => new EnemyTeam();

  expect(makeResult).toThrow('The team cannot be empty!');
});
