import * as log from "./log";

export default function parse(code: string, malloc: number = 128): void {
    const lines = code.trim().split("");
    const memory: number[] = new Array(malloc).fill(0);
    let pointer = 0;
    // const numRegex = /[0-9]/; unneeded atm
    lines.forEach((line) => {
        if (!isNaN(parseInt(line))) {
            memory[pointer] = parseInt(line);
            return;
        }
        switch (line) {
            case "<":
                pointer--;
                break;
            case ">":
                pointer++;
                break;
            case "+":
                memory[pointer]++;
                break;
            case "-":
                memory[pointer]--;
                break;
            case "%":
                console.log(memory[pointer]);
                break;
            case "$":
                if (memory[pointer] > 127 || memory[pointer] < 0) {
                    log.error("Invalid char code. (0-127 only)");
                    process.exit(1);
                }
                console.log(String.fromCharCode(memory[pointer]));
                break;
            default:
                log.error(`Symbol ${line} not found.`);
                process.exit(1);
        }
    });
}

// <> (move pointer left/right) +- (add/sub pointer value) % (print current pointer value)
// /<|>|+|-|%/g
