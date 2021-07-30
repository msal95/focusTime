import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, METRICS} from '../../utils/AppStyle';

export default StyleSheet.create({
  container: {
    padding: METRICS.lg,
    marginBottom: METRICS.fifteen,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONTSIZE.xxxl,
  },
});
