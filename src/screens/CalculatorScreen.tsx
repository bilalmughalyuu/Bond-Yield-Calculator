import React, { useState, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, KeyboardAvoidingView, Platform, View, TouchableOpacity } from 'react-native';
import { BondInputForm } from '../components/BondInputForm';
import { ResultsSummary } from '../components/ResultsSummary';
import { BondInputs, calculateBondMetrics, generateCashFlowSchedule } from '../utils/finance';
import theme from '../styles/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeightGap from '../components/HeightGap';

export const CalculatorScreen = ({ navigation }: any) => {

  const padding = useSafeAreaInsets();

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
        <View style={[styles.headerContainer, { paddingTop: padding.top }]}>
          <Text style={styles.title}>Bond Yield</Text>
          <Text style={styles.subtitle}>Calculator</Text>
        </View>

        <HeightGap height={12} />

        <BondInputForm inputs={inputs} onInputChange={handleInputChange} />

        <HeightGap height={20} />

        <ResultsSummary metrics={metrics} />

        <HeightGap height={20} />

        <TouchableOpacity
          style={styles.viewScheduleButton}
          onPress={() => navigation.navigate('CashFlow', { schedule })}
        >
          <Text style={theme.layout.normalText}>View Cash Flow Schedule</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    ...theme.layout.container,
    backgroundColor: theme.colors.backgroundColor,
  },
  headerContainer: {
    ...theme.layout.center,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: theme.colors.primaryColor,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '300',
    color: theme.colors.secondaryColor,
    marginTop: -4,
  },
  scrollContent: {
    padding: theme.padding.horizontalScreen,
  },
  viewScheduleButton: {
    backgroundColor: theme.colors.primaryColor,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 24,
  },
});
