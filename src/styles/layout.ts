import {Platform, TextStyle, ViewStyle} from 'react-native';
import colors from './colors';

interface LayoutStyles {
  container: ViewStyle;
  center: ViewStyle;
  mainAxisAlignemnt: ViewStyle;
  crossAxisAlignment: ViewStyle;
  card: ViewStyle;
  row: ViewStyle;
  column: ViewStyle;
  shadowBox: ViewStyle;
  heading: TextStyle;
  subheading: TextStyle;
  normalText: TextStyle;
  subtitle: TextStyle;
  caption: TextStyle;
  smallText: TextStyle;
  errorText: TextStyle;
}

const layout: LayoutStyles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainAxisAlignemnt: {
    justifyContent: 'center',
  },
  crossAxisAlignment: {
    alignItems: 'center',
  },
  card: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        shadowColor: '#00000066',
      },
    }),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  shadowBox: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
        shadowColor: '#00000066',
      },
    }),
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.headingColor,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.headingColor,
  },
  normalText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.headingColor,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.headingColor,
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.headingColor,
  },
  smallText: {
    fontSize: 10,
    fontWeight: 'normal',
    color: colors.headingColor,
  },
  errorText: {
    color: colors.brightRed,
    marginTop: 6,
    marginLeft: 6,
  },
};

export default layout;
