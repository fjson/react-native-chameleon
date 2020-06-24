import { FC } from 'react';
import { ViewStyle } from 'react-native';

interface ProgressProps {
    animated?: boolean;
    childStyle?: ViewStyle;
    type?: 'line' | 'circle' | 'halfCircle';
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    width?: number;
    height?: number;
    color?: string;
    unfilledColor?: string;
    children?: ReactNode;
    duration?: number;
    direction?: 'clockwise' | 'counter-clockwise';
    progress?: number,
    strokeCap?: 'butt' | 'square' | 'round';
    totalValue?: number;
    thickness?: number;
    offsetRotate?: number;
    useNativeDriver?: boolean;
    loadStart?():void;
    loadStop?():void;
    onEnd?():void;
}

export declare const Progress:FC<ProgressProps>;