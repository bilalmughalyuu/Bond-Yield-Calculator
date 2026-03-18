import {View} from 'react-native';

type HeightGapProps = {
  height: number;
};

const HeightGap: React.FC<HeightGapProps> = ({height}) => {
  return <View style={{height: height}}></View>;
};

export default HeightGap;
