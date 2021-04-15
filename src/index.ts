#!/usr/bin/env node

import yargs from "yargs";
import path from "path";
import parse from "./parse";
import fs from "fs";

const args = yargs
    .options({
        mode: { type: "string", demandOption: true, alias: "m" },
        file: { type: "string", demandOption: false, alias: "f" },
        code: { type: "string", demandOption: false, alias: "c" },
    })
    .check((argv) => {
        // currently broken (runs stuff but doesnt have message if incorrect args)
        if (argv.file && !argv.code) return true;
        if (!argv.file && argv.code) return true;
        if (argv.file && argv.file.endsWith(".bruh")) return true;
        if (argv.mode === "file" || argv.mode === "code") return true;
        if (argv.mode === "code" || argv.code?.trim().length !== 0) return true;
        if (argv.file!.length > 0 || argv.code!.length > 0) return true;
        throw new Error(
            "You must provide only either BruhLang code or a BruhLang file (.bruh)."
        );
    }).argv;

const { mode, file } = args;
let { code } = args;

if (mode === "file" && file) {
    const sourcePath = path.resolve(process.cwd(), file);
    const source = fs.readFileSync(sourcePath, { encoding: "utf-8" });
    code = source.trim().split("\n").join("");
    parse(code);
} else if (mode === "code" && code) {
    parse(code);
}
