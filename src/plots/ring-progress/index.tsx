import { RingProgress, RingProgressOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type RingProgressChartProps = Omit<BaseChartProps<RingProgressOptions>, 'chart' | 'data'> &
  RingProgressOptions;

export const RingProgressChart = forwardRef<HTMLDivElement | null, RingProgressChartProps>(
  (props, ref) => {
    return <BaseChart chart={RingProgress} ref={ref} {...props} />;
  }
);

export default RingProgressChart;