const args = process.argv.slice(2);
const command = args[0];
console.log(`${command} is not implemented with args: ${args.slice(1).join(", ")}`);
process.exit(1);
