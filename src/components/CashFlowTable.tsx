import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CashFlowRow } from '../utils/finance';

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
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 16,
    marginBottom: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 12,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  cell: {
    color: '#CCC',
    fontSize: 14,
    textAlign: 'right',
    paddingRight: 12,
  },
  headerCell: {
    color: '#888',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
  }
});
