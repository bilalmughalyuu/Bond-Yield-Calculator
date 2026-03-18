import {View} from 'react-native';

type WidthGapProps = {
  width: number;
};

const WidthGap: React.FC<WidthGapProps> = ({width}) => {
  return <View style={{width: width}}></View>;
};

export default WidthGap;
