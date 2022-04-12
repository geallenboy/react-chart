import { Sunburst, SunburstOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type SunburstChartProps = Omit<BaseChartProps<SunburstOptions>, 'chart' | 'data'> &
  SunburstOptions;

export const SunburstChart = forwardRef<HTMLDivElement | null, SunburstChartProps>((props, ref) => {
  return <BaseChart chart={Sunburst} ref={ref} {...props} />;
});

export default SunburstChart;