import React, { forwardRef } from 'react'
import { Chord, ChordOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../base'

export type ChordChartProps = Omit<
  BaseChartProps<ChordOptions>,
  'chart' | 'data'
> &
  ChordOptions

const ChordChart = forwardRef<HTMLDivElement | null, ChordChartProps>(
  (props, ref) => {
    return <BaseChart chart={Chord} ref={ref} {...props} />
  }
)

export default ChordChart
