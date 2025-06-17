import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

type Props = {
  onPick: (uri: string) => void;
};

const FilePicker: React.FC<Props> = ({ onPick }) => {
  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({ type: [DocumentPicker.types.video] });
      onPick(res.uri);
    } catch (err) {
      console.warn('File pick cancelled or error', err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="📂 Choose Video File" onPress={pickFile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
export default FilePicker;
