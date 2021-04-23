
    const nameChecker = require('../src/js/nameChecker');

    test('Should return true', () => {
      const url = "https://www.food.com/";
      expect(nameChecker(url)).toBe(true);
    });

    test('Should return false', () => {
      const url2 = "Just not a url";
      expect(nameChecker(url2)).toBe(false);
    });
