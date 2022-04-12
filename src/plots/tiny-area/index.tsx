import { TinyArea, TinyAreaOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type TinyAreaChartProps = Omit<BaseChartProps<TinyAreaOptions>, 'chart' | 'data'> &
  TinyAreaOptions;

export const TinyAreaChart = forwardRef<HTMLDivElement | null, TinyAreaChartProps>((props, ref) => {
  return <BaseChart chart={TinyArea} ref={ref} {...props} />;
});

export default TinyAreaChart;