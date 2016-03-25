describe("Lexical-Scope-Exercise", function() {
    it("Think of closure scope, especially for the third one!", function() {
      expect(makeAllTrue[0]).to.be.true;
    });

    it("Basenumber and the iterator variable were changed. Think of the closure scopes!", function() {
      expect(makeAllTrue[1]).to.be.true;
    });
    
    it("For the lexical scope, the only thing that matters is where the function was defined.", function() {
      expect(makeAllTrue[2]).to.be.true;
    });
});
