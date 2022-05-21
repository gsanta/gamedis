import Layer from '@/core/models/Layer';
import PDocument from '@/core/models/PDocument';
import PixelUtils from '@/core/utils/PixelUtils';
import QueueLinearFloodFiller from './QueueLinearFloodFiller';

describe('QueueLinearFloodFiller', () => {
  it('fills', () => {
    // eslint-disable-next-line prettier/prettier
    const pixels = Uint32Array.from([
      0, 0, 1, 0,
      0, 0, 0, 0,
      0, 1, 1, 0,
      1, 1, 1, 1,
      1, 0, 0, 0
    ]);

    const document = new PDocument(4, 5);
    document.layers[0] = new Layer(pixels);
    const pixel = PixelUtils.getIndexAtGridPosition(2, 2, document.canvasWidth);

    const floodFiller = new QueueLinearFloodFiller();
    floodFiller.floodFill(pixel, 2, document, 0);

    // eslint-disable-next-line prettier/prettier
    expect(Array.from(pixels)).toEqual([
      0, 0, 1, 0,
      0, 0, 0, 0,
      0, 2, 2, 0,
      2, 2, 2, 2,
      2, 0, 0, 0
    ])
  });
});
