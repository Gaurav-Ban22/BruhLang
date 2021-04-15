import * as log from "./log";
import parse from "./parse";

let filename: string | null = process.argv[2];
let mode: string = "file";
let code: string = "";

if (!filename) {
    log.error("No input file.")
    process.exit(1);
}

if (filename === "-s") {
    mode = "string";
    filename = null;
    code = process.argv[3] || "";
}

if (mode === "file") {
    // unimplemented
} else if (mode === "string") {
    parse(code);
}