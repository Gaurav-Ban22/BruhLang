import * as log from "./log";

export default function parse(code: string, malloc: number = 128): void {
    const lines = code.split("");
    const memory: number[] = new Array(malloc).fill(0);
    let pointer = 0;
    lines.forEach((line) => {
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
            default:
                log.error(`Symbol ${line} not found.`);
                process.exit(1);  
        }
    });
}

// <> (move pointer left/right) +- (add/sub pointer value) % (print current pointer value)
// /<|>|+|-|%/g