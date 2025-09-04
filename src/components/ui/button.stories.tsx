import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './button';

const meta = {
    title: 'UI/Button', // 在 Storybook 裡的分類和名稱
    component: Button,
    /**
     * 把元件置中
     */
    parameters: {
        layout: 'centered'
    },
    /**
     * 自動生成 index 文件
     */
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

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost Button',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Link Button',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
};