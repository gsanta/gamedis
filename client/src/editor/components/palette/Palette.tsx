import DataContext from '@/editor/ui/DataContext';
import useData from '@/editor/ui/hooks/useData';
import React, { useContext } from 'react';

const colors = ['#229954', '#E74C3C', '#FDFEFE', '#17202A', '#FDFEFE'];

const Palette = () => {
  const { paletteData } = useContext(DataContext);
  const [selectedColor] = useData('paletteData', 'selectedColor');

  const setColor = (color: string) => {
    paletteData!.selectedColor = color;
  };

  const getColors = () => {
    return colors.map((color) => (
      <div className="Palette__Color" style={{ backgroundColor: color }} onClick={() => setColor(color)} />
    ));
  };

  return (
    <div className="Palette">
      {getColors()}
      <div className="Palette__Color" style={{ backgroundColor: selectedColor }} />
    </div>
  );
};

export default Palette;
