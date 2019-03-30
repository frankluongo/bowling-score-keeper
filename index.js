const FRAME_LIMIT = 10;
const STRIKE = 20;

class Bowling {
  constructor () {
    this.frameLimit = FRAME_LIMIT;
    this.currentFrame = [];
    this.state = {
      rolls: [],
      frames: [],
      totalScore: 0
    };
  }

  bowl (roll) {
    if (this.state.frames.length < this.frameLimit) {
      roll = this.isStrike(roll);
      this.addRollToState(roll);
      this.addRollToFrame(roll);
      roll = this.checkForSpare(roll);
      this.tallyScore(roll);
    }
  }

  addRollToFrame (roll) {
    if (roll === STRIKE) {
      this.currentFrame.push(roll);
      this.currentFrame.push(0);
    }
    this.currentFrame.length <= 1 && this.currentFrame.push(roll);
    if (this.currentFrame.length > 1) {
      this.state.frames.push(this.currentFrame);
      this.currentFrame = [];
    }
  }

  addRollToState (roll) {
    this.state.rolls.push(roll);
  }

  tallyScore (roll) {
    this.state.totalScore += roll;
    console.log(this.state.totalScore);
  }

  checkForSpare (roll) {
    if (this.isEven(this.state.rolls.length)) {
      let currentFrameIndex = this.state.frames.length - 1;
      let prevFrameIndex = currentFrameIndex - 1;
      let prevFrame = this.state.frames[prevFrameIndex];
      let curFrame = this.state.frames[currentFrameIndex];

      if (prevFrame !== undefined) {
        if (prevFrame.reduce(this.reduceLastFrame) === 10) {
          roll = roll += curFrame[0];
        }
      }
    }
    return roll;
  }

  isEven (number) {
    return number%2 == 0;
  }

  reduceLastFrame (acc, cur) {
    return acc + cur;
  }

  isStrike (roll) {
    roll === 10 ?  roll = STRIKE : null;
    return roll;
  }
}

module.exports = Bowling;
