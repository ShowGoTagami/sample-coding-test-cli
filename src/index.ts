const args = process.argv.slice(2);
const command = args[0];

if (command === undefined) {
    console.log("No command provided");
    process.exit(1);
}

console.log(`${command} is not implemented with args: ${args.slice(1).join(", ")}`);
process.exit(1);
