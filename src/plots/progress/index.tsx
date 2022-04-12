import { Progress, ProgressOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type ProgressChartProps = Omit<BaseChartProps<ProgressOptions>, 'chart' | 'data'> &
  ProgressOptions;

export const ProgressChart = forwardRef<HTMLDivElement | null, ProgressChartProps>((props, ref) => {
  return <BaseChart chart={Progress} ref={ref} {...props} />;
});

export default ProgressChart;