import { newSpecPage } from '@stencil/core/testing';
import { LongPressButton } from '../long-press-button';

describe('long-press-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LongPressButton],
      html: `<long-press-button></long-press-button>`,
    });
    expect(page.root).toEqualHtml(`
      <long-press-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </long-press-button>
    `);
  });
});
