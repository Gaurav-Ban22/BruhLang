export const log = (message: string): void => {
    console.log(`bruh-lang: ${message}`);
}

export const error = (message: string): void => {
    log("ERROR: " + message);
}