import type {Meta, StoryObj} from '@storybook/react';
import {Input} from './input';

const meta = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        disabled: false,
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'email',
        placeholder: 'Email',
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Password',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled',
        disabled: true,
    },
};