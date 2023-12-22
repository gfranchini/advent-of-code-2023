import trebuchet from './day1.js';

test('calculate the sum of digits on each line', () => {
  expect(trebuchet('test.txt')).toBe(142);
});