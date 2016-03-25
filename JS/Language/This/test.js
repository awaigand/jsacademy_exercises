describe("this-Binding-Exercise", function() {
    it("Think of the current scope!", function() {
      expect(makeAllTrue[0]).to.be.true;
    });

    it("What does 'this' default to?", function() {
      expect(makeAllTrue[1]).to.be.true;
    });
});
