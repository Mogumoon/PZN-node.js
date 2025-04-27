import fs from "fs/promises";

const buffer = await fs.readFile("NodeJS/6. file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello NodeJS");