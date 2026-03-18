import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { CashFlowTable } from '../components/CashFlowTable';

export const CashFlowScreen = ({ route }: any) => {
  const { schedule } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <CashFlowTable schedule={schedule} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  }
});
