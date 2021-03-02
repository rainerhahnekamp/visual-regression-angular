describe('Holidays', () => {
  const gridGenerator: [string, number, number][] = [
    ['iPad', 768, 1024],
    ['iPhone 8', 414, 736],
    ['HD Ready', 1280, 720],
    ['Full HD', 1920, 1080],
    ['UHD', 3840, 2160]
  ];

  it.each(gridGenerator)('should make a screenshot of %s', async (_, width, height) => {
    await page.setViewport({ width, height });
    await page.goto('http://localhost:4200/holidays', { waitUntil: 'networkidle0' });
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('should make a single snapshot', async () => {
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('http://localhost:4200/holidays', { waitUntil: 'networkidle0' });
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});
