import * as log from "./log";

export default function parse(code: string, malloc: number = 2 ** 16): void {
    const lines = code.split("");
    const memory: number[] = new Array(malloc).fill(0);
    let pointer = 0;
    let currentNum = 0;
    lines.forEach((line) => {
        if (!isNaN(parseInt(line))) {
            currentNum = currentNum * 10 + parseInt(line);
            return;
        }
        if (isNaN(parseInt(line))) {
            memory[pointer] = currentNum;
            currentNum = 0;
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
                if (memory[pointer] > 255 || memory[pointer] < 0) {
                    log.error("Invalid char code. (0-255 only)");
                    process.exit(1);
                }
                console.log(String.fromCharCode(memory[pointer]));
                break;
            case "^":
                memory[pointer] = memory[pointer] ** 2;
                break;

            default:
                log.error(`Symbol ${line} not found.`);
                process.exit(1);
        }
    });
}
