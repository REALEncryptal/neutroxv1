import React from 'react';
import logo from '../../assets/Logo.png'; 

type LogoProps = {
    size: number;
};

export function Logo({ size }: LogoProps) {
    return (
        <img style={{ width: size, height: size }} src={logo} />
    );
}