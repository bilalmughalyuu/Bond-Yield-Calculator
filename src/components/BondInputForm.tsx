import React from 'react';
import { View, Text, TextInput, StyleSheet, Switch } from 'react-native';
import { BondInputs } from '../utils/finance';
import HeightGap from './HeightGap';
import theme from '../styles/theme';

interface Props {
  inputs: BondInputs;
  onInputChange: (name: keyof BondInputs, value: any) => void;
}

export const BondInputForm: React.FC<Props> = ({ inputs, onInputChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bond Details</Text>

      <Text style={styles.label}>Face Value ($)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputs.faceValue.toString()}
        onChangeText={(val) => onInputChange('faceValue', parseFloat(val) || 0)}
      />

      <HeightGap height={16} />

      <Text style={styles.label}>Annual Coupon Rate (%)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputs.couponRate.toString()}
        onChangeText={(val) => onInputChange('couponRate', parseFloat(val) || 0)}
      />

      <HeightGap height={16} />

      <Text style={styles.label}>Market Price ($)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputs.marketPrice.toString()}
        onChangeText={(val) => onInputChange('marketPrice', parseFloat(val) || 0)}
      />

      <HeightGap height={16} />

      <Text style={styles.label}>Years to Maturity</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputs.yearsToMaturity.toString()}
        onChangeText={(val) => onInputChange('yearsToMaturity', parseFloat(val) || 0)}
      />

      <HeightGap height={24} />

      <Text style={styles.label}>Payment Frequency</Text>
      <View style={styles.row}>
        <Text style={inputs.frequency === 'annual' ? styles.activeText : styles.inactiveText}>Annual</Text>
        <Switch
          value={inputs.frequency === 'semi-annual'}
          onValueChange={(val) => onInputChange('frequency', val ? 'semi-annual' : 'annual')}
          trackColor={{ false: '#767577', true: '#4CAF50' }}
          thumbColor={inputs.frequency === 'semi-annual' ? '#81C784' : '#f4f3f4'}
        />
        <Text style={inputs.frequency === 'semi-annual' ? styles.activeText : styles.inactiveText}>Semi-Annual</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2A2A2A',
    color: '#FFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  switchGroup: {
    marginTop: 8,
  },
  row: {
    ...theme.layout.row,
    ...theme.layout.crossAxisAlignment,
    gap: 12,
  },
  activeText: {
    color: '#FFF',
    fontWeight: '600',
  },
  inactiveText: {
    color: '#666',
  }
});
