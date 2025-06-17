import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import FilePicker from './components/FilePicker';
import StreamServer from './components/StreamServer';
import QRLink from './components/QRLink';

const App = () => {
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [streamUrl, setStreamUrl] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🎬 StreamMe - Local Movie Streamer</Text>
      <FilePicker onPick={setFileUri} />
      {fileUri && <StreamServer fileUri={fileUri} onServerStarted={setStreamUrl} />}
      {streamUrl && <QRLink url={streamUrl} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#111', alignItems: 'center'
  },
  header: {
    fontSize: 20, color: '#fff', marginBottom: 20
  }
});

export default App;
