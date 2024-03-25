const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];

function superbowlWin(record) {
  const winningYear = record.find((game) => game.result === "W");
  if (winningYear) {
    return winningYear.year;
  } else {
    return undefined;
  }
}

console.log(superbowlWin(record));
