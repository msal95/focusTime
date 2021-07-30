import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, METRICS} from '../../utils/AppStyle';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: METRICS.md,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONTSIZE.md,
    marginBottom: METRICS.fifteen,
  },
  task: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONTSIZE.xLg,
    marginBottom: METRICS.fifteen,
  },
  buttonContainer: {
    width: METRICS.doubleSection,
    height: METRICS.doubleSection,
  },
  progressBarContainer: {
    width: '100%',
    marginVertical: METRICS.doubleBase,
  },
  progressBarStyle: {
    height: METRICS.base,
  },
  timingButtonContainerr: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: METRICS.base,
  },
  cancelButton: {
    marginTop: METRICS.base,
    right: '30%',
  },
});
