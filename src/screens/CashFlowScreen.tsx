import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { CashFlowTable } from '../components/CashFlowTable';
import theme from '../styles/theme';

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
    ...theme.layout.container,
    backgroundColor: theme.colors.backgroundColor,
  },
  content: {
    padding: theme.padding.horizontalScreen,
    paddingBottom: 40,
  }
});
