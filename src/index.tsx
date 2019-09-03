import {
  Renderer,
  View,
  Text,
  Window,
  PlainTextEdit,
} from "@nodegui/react-nodegui";
import path from "path";
import React, { useState } from "react";

const fixedSize = { width: 1200, height: 800 };

const App = () => {
  return (
    <Window styleSheet={styleSheet} maxSize={fixedSize} minSize={fixedSize}>
      <View id="container" styleSheet={containerStyles}>
        <View id="notes">
          <Text>Notes here</Text>
        </View>
        <PlainTextEdit id="editor" />
      </View>
    </Window>
  );
};

const styleSheet = `
  #container {
    background-color: '#FFF';
    flex: 1;
    flex-direction: 'row';
    min-height: '100%';
    align-items: 'center';
    justify-content: 'center';
    min-width: '100%';
  }
`;

const containerStyles = `
  #notes {
    background-color: '#EEE';
    height: '100%';
    width: '20%';
  }

  #editor {
    height: '100%';
    width: '80%';
  }
`;

Renderer.render(<App />);
