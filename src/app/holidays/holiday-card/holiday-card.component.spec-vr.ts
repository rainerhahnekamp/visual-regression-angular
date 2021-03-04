describe('Holidays', () => {
  it('should make a single snapshot', async () => {
    await page.setViewport({width: 1280, height: 720});
    await page.goto('http://localhost:4200/holidays', {waitUntil: 'networkidle0'});
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
