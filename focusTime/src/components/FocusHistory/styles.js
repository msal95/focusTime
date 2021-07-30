import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, METRICS} from '../../utils/AppStyle';

export default StyleSheet.create({
  buttonContainer: {
    height: METRICS.ninty,
    width: METRICS.ninty,
  },
  textStyle: {
    color: COLORS.white,
    fontSize: FONTSIZE.xMd,
    fontWeight: 'bold',
    marginBottom: METRICS.fifteen,
  },
  statusComplete: {
    color: COLORS.green,
    fontSize: FONTSIZE.md,
    paddingVertical: METRICS.base,
  },
  statusCancel: {
    color: COLORS.red,
    fontSize: FONTSIZE.md,
    paddingVertical: METRICS.base,
  },
  historyContainer: {
    flex: 1,
    paddingHorizontal: METRICS.fifteen,
    alignItems: 'center',
  },
  historyListItems: {
    flex: 0.9,
    alignItems: 'center',
    marginBottom: METRICS.fifteen,
  },
});
