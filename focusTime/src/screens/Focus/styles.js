import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, METRICS} from '../../utils/AppStyle';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    padding: METRICS.md,
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: FONTSIZE.xLg,
    marginBottom: METRICS.fifteen,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    marginRight: METRICS.fifteen,
  },
  buttonContainer: {
    width: METRICS.doubleSection,
    height: METRICS.doubleSection,
  },
});
