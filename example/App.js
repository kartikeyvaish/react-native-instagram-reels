import React from 'react';
import Reels from 'react-native-instagram-reels';

import videos from './src/Reels/utils/videos';

function App(props) {
  return <Reels videos={videos} />;
}

export default App;
