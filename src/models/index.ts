import { ReactNode } from 'react';

export type LayoutProps = {
    selectedKey: string;
    children: ReactNode;
};

export type User = {
    id: string
    name: string
    password: string
    email: string
}
