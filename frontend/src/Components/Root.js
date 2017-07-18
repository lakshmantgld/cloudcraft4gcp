import React from 'react';
import ButtonAppBar from './Header/Header';
import CanvasComponent from './Canvas/Canvas';
import SimpleBottomNavigation from './Footer/Footer';

export default function MyComponent() {
  return (
    <div>
      <ButtonAppBar />
      <CanvasComponent />
      <SimpleBottomNavigation />
    </div>
  )
}
