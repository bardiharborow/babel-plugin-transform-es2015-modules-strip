module.exports = function() {
  return {
    visitor: {
      ModuleDeclaration(path) {
        path.remove();
      }
    }
  };
}
