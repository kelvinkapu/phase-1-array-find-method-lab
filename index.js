// code your solution here
function superbowlWin(record) {
    // Use the find() method to search for a win ("W") in the record
    const win = record.find(game => game.result === "W");
  
    // If a win is found, return the year, otherwise return undefined
    return win ? win.year : undefined;
  }
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ...
  ];
  
  const winYear = superbowlWin(record);
  console.log("Superbowl Win Year:", winYear);