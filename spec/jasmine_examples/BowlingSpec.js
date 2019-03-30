describe("Bowling", function() {
  var BowlingApp = require('../../index');

  beforeEach(function() {
    game = new BowlingApp();
  });

  it("Knock down 1 pin", function() {
    game.bowl(1);
    expect(game.state.totalScore).toEqual(1);
  });

  it("Knock down 2 pins", function() {
    game.bowl(1);
    game.bowl(1);
    expect(game.state.totalScore).toEqual(2);
  });

  it("Get a spare", function() {
    game.bowl(5);
    game.bowl(5);
    game.bowl(3);
    game.bowl(3);
    expect(game.state.totalScore).toEqual(19);
  });

  it("Strike!", function() {
    game.bowl(10);
    expect(game.state.totalScore).toEqual(20);
  });
});
