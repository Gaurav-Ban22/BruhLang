import chalk from "chalk";

// chalk stuff
const prefix = chalk.bold.cyanBright;
const err = chalk.bold.redBright;

// export functions
export const log = (message: string): void => {
    console.log(prefix("bruh-lang:") + message.toString());
};

export const error = (message: string): void => {
    log(err(" ERROR: ") + message);
};
