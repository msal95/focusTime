import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, METRICS} from '../../utils/AppStyle';

export default StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: METRICS.doubleSection,
    height: METRICS.doubleSection,
    marginHorizontal: METRICS.fifteen,
  },
});
