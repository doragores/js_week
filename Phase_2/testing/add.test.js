require('./add')

describe('add', () => {
  it('adds 2 and 2', () => {
    expect( 2 + 2).toBe(4)
  });
  it('adds 4 and 4', () => {
    expect( 4 + 4).toBe(8)
  })
});
