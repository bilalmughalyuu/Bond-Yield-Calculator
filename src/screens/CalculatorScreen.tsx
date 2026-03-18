import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, KeyboardAvoidingView, Platform, View, TouchableOpacity } from 'react-native';
import { BondInputForm } from '../components/BondInputForm';
import { ResultsSummary } from '../components/ResultsSummary';
import { BondInputs, calculateBondMetrics, generateCashFlowSchedule } from '../utils/finance';
import { CashFlowTable } from '../components/CashFlowTable';

export const CalculatorScreen = ({ navigation }: any) => {
  const [inputs, setInputs] = useState<BondInputs>({
    faceValue: 1000,
    couponRate: 5,
    marketPrice: 950,
    yearsToMaturity: 10,
    frequency: 'semi-annual',
  });

  const handleInputChange = (name: keyof BondInputs, value: any) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const metrics = useMemo(() => calculateBondMetrics(inputs), [inputs]);
  const schedule = useMemo(() => generateCashFlowSchedule(inputs), [inputs]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Bond Yield</Text>
          <Text style={styles.subtitle}>Calculator</Text>
        </View>

        <BondInputForm inputs={inputs} onInputChange={handleInputChange} />

        <ResultsSummary metrics={metrics} />

        {/* <CashFlowTable schedule={schedule} /> */}


        <TouchableOpacity
          style={styles.viewScheduleButton}
          onPress={() => navigation.navigate('CashFlow', { schedule })}
        >
          <Text style={styles.viewScheduleButtonText}>View Cash Flow Schedule</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    paddingVertical: 24,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '300',
    color: '#4CAF50',
    marginTop: -4,
  },
  scrollContent: {
    padding: 16,
  },
  viewScheduleButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 24,
  },
  viewScheduleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
