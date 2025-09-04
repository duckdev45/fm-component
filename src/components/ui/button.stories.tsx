import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './button';

const meta = {
    title: 'UI/Button', // 在 Storybook 裡的分類和名稱
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {type: 'select'},
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        },
        size: {
            control: {type: 'select'},
            options: ['default', 'sm', 'lg', 'icon'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'default',
        children: 'Primary Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive Button',
    },
};