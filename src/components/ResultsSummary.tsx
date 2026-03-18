import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BondMetrics } from '../utils/finance';
import theme from '../styles/theme';
import HeightGap from './HeightGap';

interface Props {
  metrics: BondMetrics;
}

export const ResultsSummary: React.FC<Props> = ({ metrics }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Premium': return theme.colors.brightGreen;
      case 'Discount': return theme.colors.brightRed;
      default: return theme.colors.primaryColor;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={theme.layout.heading}>Summary</Text>

      <HeightGap height={16} />

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

      <HeightGap height={16} />

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

      <HeightGap height={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardColor,
    padding: theme.padding.large,
    borderRadius: theme.cardBorderRadius,
    ...theme.layout.shadowBox,
  },
  row: {
    ...theme.layout.row,
    justifyContent: 'space-between',
    gap: 12,
  },
  card: {
    ...theme.layout.container,
    backgroundColor: theme.colors.surfaceColor,
    padding: theme.padding.horizontalScreen,
    borderRadius: theme.cardBorderRadius,
    alignItems: 'center',
  },
  label: {
    color: theme.colors.grayColor,
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    color: theme.colors.headingColor,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
