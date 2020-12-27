function deepConsole() {
  console.dir(...arguments, { depth: null });
}

module.exports = { deepConsole };
