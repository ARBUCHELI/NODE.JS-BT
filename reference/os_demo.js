// This gives us information about our environment, about our operating system.
const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime (Gives the number of seconds that your systems it's been up)
console.log(os.uptime());