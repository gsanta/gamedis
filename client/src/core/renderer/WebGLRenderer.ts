import Program from '@/../engine/models/Program';
import DocumentStore from '@/features/document/DocumentStore';
import ColorUtils from '../utils/ColorUtils';
import PixelUtils from '../utils/PixelUtils';

class WebGLRenderer {
  private documentStore: DocumentStore;

  private program: Program;

  constructor(documentStore: DocumentStore, program: Program) {
    this.documentStore = documentStore;
    this.program = program;
  }

  render(): void {
    const { activeDocument } = this.documentStore;
    const { backgroundLayer } = activeDocument;

    this.program.setPositions(PixelUtils.getClipPositions(backgroundLayer));

    const colors: number[] = [];
    // colors.push(1);
    // colors.push(0);
    // colors.push(0);
    // colors.push(1);
    // colors.push(1);
    // colors.push(0);
    // colors.push(0);
    // colors.push(1);
    // colors.push(1);
    // colors.push(0);
    // colors.push(0);
    // colors.push(1);
    // colors.push(1);
    // colors.push(0);
    // colors.push(0);
    // colors.push(1);
    for (const item of backgroundLayer.colors) {
      const rgba = ColorUtils.toRGBAColor(item);
      colors.push(...rgba);
      colors.push(...rgba);
      colors.push(...rgba);
      colors.push(...rgba);
      // const colors = backgroundLayer.colors.map<string>((color) => 'a');
    }

    this.program.setColors(colors);

    this.program.drawScene();
  }
}

export default WebGLRenderer;
