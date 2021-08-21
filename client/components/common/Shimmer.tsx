import React from 'react';

export const Shimmer = ({
    width,
    height,
    marginBottom,
    marginTop,
    marginRight,
    marginLeft,
    className,
}: {
    width: string | number;
    height: string | number;
    marginBottom?: string | number;
    marginTop?: string | number;
    marginRight?: string | number;
    marginLeft?: string | number;
    className?: string;
}) => {
    return (
        <div
            className={className + ' shimmer-effect'}
            style={{
                width: width,
                height: height,
                marginBottom: marginBottom,
                marginTop: marginTop,
                marginRight: marginRight,
                marginLeft: marginLeft,
            }}
        />
    );
};
