import { CirclePacking, CirclePackingOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type CirclePackingChartProps = Omit<BaseChartProps<CirclePackingOptions>, 'chart' | 'data'> &
  CirclePackingOptions;

export const CirclePackingChart = forwardRef<HTMLDivElement | null, CirclePackingChartProps>(
  (props, ref) => {
    return <BaseChart chart={CirclePacking} ref={ref} {...props} />;
  }
);

export default CirclePackingChart;
