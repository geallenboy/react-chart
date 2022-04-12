import { Heatmap, HeatmapOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type HeatmapChartProps = Omit<BaseChartProps<HeatmapOptions>, 'chart' | 'data'> &
  HeatmapOptions;

export const HeatmapChart = forwardRef<HTMLDivElement | null, HeatmapChartProps>((props, ref) => {
  return <BaseChart chart={Heatmap} ref={ref} {...props} />;
});
export default HeatmapChart;
