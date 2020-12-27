const { deepConsole } = require("../utils");

function LinkedList(...params) {
  const [item, ...restParams] = params;

  if (params.length === 1) {
    return {
      item,
      next: null,
    };
  }

  return {
    item,
    next: LinkedList(...restParams),
  };
}

deepConsole(LinkedList(1, 2, 3, 4));
