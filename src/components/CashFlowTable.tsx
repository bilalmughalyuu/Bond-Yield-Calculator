import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CashFlowRow } from '../utils/finance';
import theme from '../styles/theme';

interface Props {
  schedule: CashFlowRow[];
}

export const CashFlowTable: React.FC<Props> = ({ schedule }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cash Flow Schedule</Text>
      
      <ScrollView horizontal bounces={false}>
        <View>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.headerCell, { width: 40 }]}>#</Text>
            <Text style={[styles.cell, styles.headerCell, { width: 80 }]}>Date</Text>
            <Text style={[styles.cell, styles.headerCell, { width: 100 }]}>Payment ($)</Text>
            <Text style={[styles.cell, styles.headerCell, { width: 120 }]}>Cum. Int. ($)</Text>
            <Text style={[styles.cell, styles.headerCell, { width: 110 }]}>Principal ($)</Text>
          </View>

          {schedule.map((row) => (
            <View key={row.period} style={styles.tableRow}>
              <Text style={[styles.cell, { width: 40 }]}>{row.period}</Text>
              <Text style={[styles.cell, { width: 80 }]}>{row.paymentDate}</Text>
              <Text style={[styles.cell, { width: 100 }]}>{row.couponPayment.toFixed(2)}</Text>
              <Text style={[styles.cell, { width: 120 }]}>{row.cumulativeInterest.toFixed(2)}</Text>
              <Text style={[styles.cell, { width: 110 }]}>{row.remainingPrincipal.toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardColor,
    padding: theme.padding.large,
    borderRadius: theme.cardBorderRadius,
    marginBottom: 40,
    ...theme.layout.shadowBox,
  },
  header: {
    ...theme.layout.heading,
    marginBottom: 16,
  },
  tableHeader: {
    ...theme.layout.row,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderColor,
    paddingBottom: 12,
    marginBottom: 8,
  },
  tableRow: {
    ...theme.layout.row,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGray,
  },
  cell: {
    color: theme.colors.textColor,
    fontSize: 14,
    textAlign: 'right',
    paddingRight: 12,
  },
  headerCell: {
    color: theme.colors.grayColor,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
  }
});
