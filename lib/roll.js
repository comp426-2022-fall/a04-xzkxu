export function roll(sides, dice, rolls) {
    var results = [];

    for (var i = 0; i < rolls; i++) {
        results[i] = 1 + Math.floor(Math.random() * sides);
    }

    return {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    };

}