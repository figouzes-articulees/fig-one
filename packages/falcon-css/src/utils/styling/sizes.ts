import { CssSize, SizeUnit } from '$types'

import { cssSize } from './parsers'
import { cssProperty } from './properties'

export const em = (size: number): CssSize => [size, SizeUnit.Em]
export const px = (size: number): CssSize => [size, SizeUnit.Px]
export const percent = (size: number): CssSize => [size, SizeUnit.Percent]
export const rem = (size: number): CssSize => [size, SizeUnit.Rem]
export const vh = (size: number): CssSize => [size, SizeUnit.Vh]
export const vw = (size: number): CssSize => [size, SizeUnit.Vw]

export const height = cssProperty<CssSize>(cssSize)('height')
export const minHeight = cssProperty<CssSize>(cssSize)('min-height')
export const maxHeight = cssProperty<CssSize>(cssSize)('max-height')

export const width = cssProperty<CssSize>(cssSize)('width')
export const minWidth = cssProperty<CssSize>(cssSize)('min-width')
export const maxWidth = cssProperty<CssSize>(cssSize)('max-width')
