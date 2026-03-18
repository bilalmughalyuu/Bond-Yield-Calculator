import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ResultRowProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export const ResultRow: React.FC<ResultRowProps> = ({ label, value, highlight }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, highlight && styles.highlight]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  highlight: {
    color: '#2e8b57',
  },
});
