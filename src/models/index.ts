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

export type cardsProps = {
    name: string;
    data: string;
    value: number;
    income: number;
};

export interface LineChartProps {
    data: number[];
    labels: string[];
}


export enum ModulesEnum {
    OBSTETRAS = "ObstetrasModule",
    GESTANTES = "GestantesModule"
}
