#!/usr/bin/env node

import yargs from "yargs";
import path from "path";
import parse from "./parse";
import fs from "fs";
import * as log from "./log";

const args = yargs
    .options({
        file: { type: "string", demandOption: false, alias: "f" },
        code: { type: "string", demandOption: false, alias: "c" },
    })
    .check((argv) => {
        // check if file/code is truthy even if trimmed
        const codeExists =
            argv.code?.trim() !== "" && argv.code !== undefined ? true : false;
        const fileExists =
            argv.file?.trim() !== "" && argv.file !== undefined ? true : false;
        const { code, file } = argv;

        // if it is a file
        if (!fileExists && argv.file !== undefined) {
            log.error("No file provided.");
            process.exit(1);
        }
        if (fileExists) {
            if (!file?.endsWith(".bruh")) {
                log.error("Input file was not a BruhLang file.");
                process.exit(1);
            }
            if (!fs.existsSync(path.resolve(process.cwd(), file))) {
                log.error("Input file does not exist");
                process.exit(1);
            }
            return true;
        }

        // if it is code
        if (!codeExists && argv.code !== undefined) {
            log.error("No code provided.");
            process.exit(1);
        }
        return true;
    }).argv;

const { file, code } = args;

let sourceCode: string;

if (file) {
    const sourcePath = path.resolve(process.cwd(), file);
    const source = fs.readFileSync(sourcePath, { encoding: "utf-8" });
    sourceCode = source.trim().split("\n").join("");
} else if (code) {
    sourceCode = code.trim();
} else {
    log.error("Something went wrong, please report this error.");
    process.exit(1);
}

parse(sourceCode);
