import React from 'react';

// Define the props type for the component
interface SVGIconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  fillColor?: string;
  width?: string;
  height?: string;
  className?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  Icon,
  fillColor = 'currentColor', // Default fill color
  width = '24px',
  height = '24px',
  className,
  ...props
}) => {
  return (
    <Icon
      width={width}
      height={height}
      fill={fillColor}
      className={className}
      {...props}
    />
  );
};

export default SVGIcon;
