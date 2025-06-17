import React, { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import StaticServer from 'react-native-static-server';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

type Props = {
  fileUri: string;
  onServerStarted: (url: string) => void;
};

const StreamServer: React.FC<Props> = ({ fileUri, onServerStarted }) => {
  useEffect(() => {
    const startServer = async () => {
      const path = Platform.OS === 'android' ? fileUri.replace('file://', '') : fileUri;
      const server = new StaticServer(8080, RNFS.DocumentDirectoryPath, { localOnly: true });

      await RNFS.copyFile(path, `${RNFS.DocumentDirectoryPath}/video.mp4`);
      const url = await server.start();
      onServerStarted(`${url}/video.mp4`);
    };

    startServer();
  }, [fileUri, onServerStarted]);

  return <Text style={styles.statusText}>🚀 Starting local server...</Text>;
};

const styles = StyleSheet.create({
  statusText: {
    color: '#fff',
    marginBottom: 20,
  },
});

export default StreamServer;
