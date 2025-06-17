import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type Props = {
  url: string;
};

const QRLink: React.FC<Props> = ({ url }) => (
  <View style={styles.container}>
    <Text style={styles.label}>🔗 Stream this link in VLC:</Text>
    <Text selectable style={styles.url}>{url}</Text>
    <QRCode value={url} size={200} />
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 10 },
  label: { color: '#fff', marginBottom: 5 },
  url: { color: '#0f0', textAlign: 'center', marginBottom: 15 }
});

export default QRLink;
