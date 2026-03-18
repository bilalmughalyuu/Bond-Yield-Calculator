import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BondMetrics } from '../utils/finance';

interface Props {
  metrics: BondMetrics;
}

export const ResultsSummary: React.FC<Props> = ({ metrics }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Premium': return '#4CAF50';
      case 'Discount': return '#F44336';
      default: return '#2196F3';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.label}>Current Yield</Text>
          <Text style={styles.value}>{metrics.currentYield.toFixed(2)}%</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>YTM</Text>
          <Text style={styles.value}>{metrics.ytm.toFixed(2)}%</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.label}>Total Interest</Text>
          <Text style={styles.value}>${metrics.totalInterest.toFixed(2)}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Trading At</Text>
          <Text style={[styles.value, { color: getStatusColor(metrics.tradingStatus) }]}>
            {metrics.tradingStatus}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  label: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
