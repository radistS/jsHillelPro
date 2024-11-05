let ladder = {
  step: 0,
  up: () => (ladder.step++, ladder),
  down: () => (ladder.step--, ladder),
  showStep: () => (console.log(ladder.step), ladder)
};

ladder.up().up().down().up().showStep();
