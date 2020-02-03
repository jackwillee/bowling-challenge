describe("frame", function(){
  describe("#roll", function(){
    it(" Rolling adds to the frame score", function() {
      var frame = new Frame();
      frame.roll(5);
      expect(frame.getScore()).toBe(5);
    })
  })
})