export function roll(sides, dice, rolls) {

    let results = [];
    for (let i = 0; i < rolls; i++) {
        let num = 0;
        for(let j = 0; j < dice; j++) {
            num += Math.floor(Math.random() * sides) + 1;
        }
        results[i] = num;
    }

    return {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    };

}