import { newE2EPage } from '@stencil/core/testing';

describe('long-press-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<long-press-button></long-press-button>');

    const element = await page.find('long-press-button');
    expect(element).toHaveClass('hydrated');
  });
});
