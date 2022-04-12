import { Box, BoxOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type BoxChartProps = Omit<BaseChartProps<BoxOptions>, 'chart' | 'data'> & BoxOptions;

export const BoxChart = forwardRef<HTMLDivElement | null, BoxChartProps>((props, ref) => {
  return <BaseChart chart={Box} ref={ref} {...props} />;
});

export default BoxChart;