export type Frequency = 'annual' | 'semi-annual';

export interface BondInputs {
  faceValue: number;
  couponRate: number; // in percentage, e.g., 5 for 5%
  marketPrice: number;
  yearsToMaturity: number;
  frequency: Frequency;
}

export interface CashFlowRow {
  period: number;
  paymentDate: string;
  couponPayment: number;
  cumulativeInterest: number;
  remainingPrincipal: number;
}

export interface BondMetrics {
  currentYield: number;
  ytm: number;
  totalInterest: number;
  tradingStatus: 'Premium' | 'Discount' | 'Par';
}

export const calculateYTM = (inputs: BondInputs): number => {
  const { faceValue, couponRate, marketPrice, yearsToMaturity, frequency } = inputs;
  
  if (marketPrice <= 0 || yearsToMaturity <= 0) return 0;

  const periodsPerYear = frequency === 'semi-annual' ? 2 : 1;
  const totalPeriods = yearsToMaturity * periodsPerYear;
  const couponPayment = (faceValue * (couponRate / 100)) / periodsPerYear;

  const calculatePV = (y: number): number => {
    if (y === 0) return (couponPayment * totalPeriods) + faceValue;
    return (couponPayment * (1 - Math.pow(1 + y, -totalPeriods)) / y) + (faceValue / Math.pow(1 + y, totalPeriods));
  };

  let y = couponPayment / marketPrice || 0.05;
  const tolerance = 1e-7;
  const maxIterations = 100;

  for (let i = 0; i < maxIterations; i++) {
    const diff = 1e-6;
    const f_y = calculatePV(y) - marketPrice;
    
    const f_prime_y = (calculatePV(y + diff) - calculatePV(y - diff)) / (2 * diff);
    
    const y_new = y - f_y / f_prime_y;
    
    if (Math.abs(y_new - y) < tolerance) {
      return y_new * periodsPerYear * 100;
    }
    
    y = y_new;
  }

  const approxYTM = ((couponPayment + (faceValue - marketPrice) / totalPeriods) / ((faceValue + marketPrice) / 2)) * periodsPerYear;
  return approxYTM * 100;
};

export const calculateBondMetrics = (inputs: BondInputs): BondMetrics => {
  const { faceValue, couponRate, marketPrice, yearsToMaturity } = inputs;

  const annualCoupon = faceValue * (couponRate / 100);
  const currentYield = marketPrice > 0 ? (annualCoupon / marketPrice) * 100 : 0;
  const totalInterest = annualCoupon * yearsToMaturity;

  let tradingStatus: 'Premium' | 'Discount' | 'Par' = 'Par';
  if (marketPrice > faceValue) {
    tradingStatus = 'Premium';
  } else if (marketPrice < faceValue) {
    tradingStatus = 'Discount';
  }

  return {
    currentYield,
    ytm: calculateYTM(inputs),
    totalInterest,
    tradingStatus,
  };
};

export const generateCashFlowSchedule = (inputs: BondInputs): CashFlowRow[] => {
  const { faceValue, couponRate, yearsToMaturity, frequency } = inputs;

  const periodsPerYear = frequency === 'semi-annual' ? 2 : 1;
  const totalPeriods = yearsToMaturity * periodsPerYear;
  const couponPayment = (faceValue * (couponRate / 100)) / periodsPerYear;

  const schedule: CashFlowRow[] = [];
  let cumulativeInterest = 0;

  for (let period = 1; period <= totalPeriods; period++) {
    cumulativeInterest += couponPayment;
    const isMaturity = period === totalPeriods;
    const remainingPrincipal = isMaturity ? 0 : faceValue;

    schedule.push({
      period,
      paymentDate: frequency === 'semi-annual' ? `Year ${period / 2}` : `Year ${period}`,
      couponPayment: couponPayment + (isMaturity ? faceValue : 0),
      cumulativeInterest,
      remainingPrincipal,
    });
  }

  return schedule;
};
