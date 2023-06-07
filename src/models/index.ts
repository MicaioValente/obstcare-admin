import { ReactNode } from 'react';

export type LayoutProps = {
    selectedKey: string;
    children: ReactNode;
};

export type User = {
    id: string;
    name: string;
    password: string;
    email: string;
};

export enum RolesEnum {
    ADMIN = 1,
}

export interface LineChartProps {
    data: number[];
    labels: string[];
}


export enum ModulesEnum {
    OBSTETRAS = "ObstetrasModule",
    GESTANTES = "GestantesModule"
}
