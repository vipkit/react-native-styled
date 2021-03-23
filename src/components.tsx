import React from 'react'
import styled from 'styled-components/native'

import {
  space,
  color,
  layout,
  typography,
  flexbox,
  position,
  border,
  shadow,
  compose,
} from 'styled-system'
import { FlexStyle, TextStyle } from 'react-native'

const boxStyles = compose(
  space,
  flexbox,
  position,
  layout,
  border,
  color,
  shadow
)

type ShortDirections = 'l' | 'r' | 't' | 'b' | 'x' | 'y' | ''
type LongDirections = 'left' | 'right' | 'top' | 'bottom' | 'x' | 'y' | ''

type WithSpace<ShortName extends string, LongName extends string> =
  | `${ShortName}${ShortDirections}`
  | `${LongName}${Capitalize<LongDirections>}`

type Margin = { [key in WithSpace<'m', 'margin'>]: number | string }
type Padding = { [key in WithSpace<'p', 'padding'>]: number | string }

type Space = Margin & Padding

type Border = {
  borderBottomWidth: number
  borderBottomColor: string
  borderRadius: number
  border: number
  borderTop: string
  borderLeft: string
  borderBottom: string
  borderRight: string
  borderWidth: string | number
  borderStyle: string
  borderColor: string
}

type Layout = {
  alignItems: FlexStyle['alignItems']
  flexDirection: 'row' | 'column'
  justifyContent: FlexStyle['justifyContent']
  alignContent: FlexStyle['alignContent']
  flexBasis: FlexStyle['flexBasis']
  flexWrap: FlexStyle['flexWrap']
  flex: string | number
  alignSelf: FlexStyle['alignSelf']
  width: string | number
  maxWidth: string | number
  minWidth: string | number
  height: string | number
  maxHeight: string | number
  minHeight: string | number
  size: string | number
  overflow: 'visible' | 'hidden' | 'scroll'
}

type Color = {
  bg: string
  backgroundColor: string
  color: string
}

type Position = {
  position: 'relative' | 'absolute'
  top: string | number
  left: string | number
  bottom: string | number
  right: string | number
  zIndex: string | number
}

type Shadow = {
  boxShadow: string
  textShadow: string
}

type BoxStyle = Color & Layout & Space & Border & Position & Shadow

type BoxStyleProps = Partial<BoxStyle>

type TextStyleProps = Partial<{
  textAlign: TextStyle['textAlign']
  fontWeight: TextStyle['fontWeight']
  fontSize: string | number
  fontFamily: string
  lineHeight: string
  letterSpacing: string | number
}>

export const View = styled.View<BoxStyleProps>(boxStyles)

export const Row = (
  props: Omit<BoxStyleProps, 'flexDirection'> & {
    children: React.ReactNode
  }
) => <View {...props} flexDirection="row" />

export const Text = styled.Text<BoxStyleProps & TextStyleProps>(
  boxStyles,
  typography
)

export const TouchableOpacity = styled.TouchableOpacity<BoxStyleProps>(
  boxStyles
)
export const FlatList = styled.FlatList<BoxStyleProps>(boxStyles)
export const ScrollView = styled.ScrollView<BoxStyleProps>(boxStyles)

export const Image = styled.Image<BoxStyleProps>(boxStyles)






