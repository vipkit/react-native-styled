/// <reference types="styled-components-react-native" />
import React from 'react';
import { FlexStyle, TextStyle } from 'react-native';
declare type ShortDirections = 'l' | 'r' | 't' | 'b' | 'x' | 'y' | '';
declare type LongDirections = 'left' | 'right' | 'top' | 'bottom' | 'x' | 'y' | '';
declare type WithSpace<ShortName extends string, LongName extends string> = `${ShortName}${ShortDirections}` | `${LongName}${Capitalize<LongDirections>}`;
declare type Margin = {
    [key in WithSpace<'m', 'margin'>]: number | string;
};
declare type Padding = {
    [key in WithSpace<'p', 'padding'>]: number | string;
};
declare type Space = Margin & Padding;
declare type Border = {
    borderBottomWidth: number;
    borderBottomColor: string;
    borderRadius: number;
    border: number;
    borderTop: string;
    borderLeft: string;
    borderBottom: string;
    borderRight: string;
    borderWidth: string | number;
    borderStyle: string;
    borderColor: string;
};
declare type Layout = {
    alignItems: FlexStyle['alignItems'];
    flexDirection: 'row' | 'column';
    justifyContent: FlexStyle['justifyContent'];
    alignContent: FlexStyle['alignContent'];
    flexBasis: FlexStyle['flexBasis'];
    flexWrap: FlexStyle['flexWrap'];
    flex: string | number;
    alignSelf: FlexStyle['alignSelf'];
    width: string | number;
    maxWidth: string | number;
    minWidth: string | number;
    height: string | number;
    maxHeight: string | number;
    minHeight: string | number;
    size: string | number;
    overflow: 'visible' | 'hidden' | 'scroll';
};
declare type Color = {
    bg: string;
    backgroundColor: string;
    color: string;
};
declare type Position = {
    position: 'relative' | 'absolute';
    top: string | number;
    left: string | number;
    bottom: string | number;
    right: string | number;
    zIndex: string | number;
};
declare type Shadow = {
    boxShadow: string;
    textShadow: string;
};
declare type BoxStyle = Color & Layout & Space & Border & Position & Shadow;
declare type BoxStyleProps = Partial<BoxStyle>;
export declare const View: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, Partial<BoxStyle>, never>;
export declare const Row: (props: Omit<BoxStyleProps, 'flexDirection'> & {
    children: React.ReactNode;
}) => JSX.Element;
export declare const Col: (props: Omit<BoxStyleProps, 'flexDirection'> & {
    children: React.ReactNode;
}) => JSX.Element;
export declare const Text: import("styled-components").StyledComponent<typeof import("react-native").Text, import("styled-components").DefaultTheme, Partial<BoxStyle> & Partial<{
    textAlign: TextStyle['textAlign'];
    fontWeight: TextStyle['fontWeight'];
    fontSize: string | number;
    fontFamily: string;
    lineHeight: string;
    letterSpacing: string | number;
}>, never>;
export declare const TouchableOpacity: import("styled-components").StyledComponent<typeof import("react-native").TouchableOpacity, import("styled-components").DefaultTheme, Partial<BoxStyle>, never>;
export declare const FlatList: import("styled-components").StyledComponent<typeof import("react-native").FlatList, import("styled-components").DefaultTheme, Partial<BoxStyle>, never>;
export declare const ScrollView: import("styled-components").StyledComponent<typeof import("react-native").ScrollView, import("styled-components").DefaultTheme, Partial<BoxStyle>, never>;
export declare const Image: import("styled-components").StyledComponent<typeof import("react-native").Image, import("styled-components").DefaultTheme, Partial<BoxStyle>, never>;
export {};
