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
        children: 'Primary',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Destructive',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Link',
        className:'underline',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large',
    },
};