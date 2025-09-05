import type { Meta, StoryObj } from '@storybook/react'
import { FloorStatusTable } from './floorStatusTable'
import type { FloorStatusTableProps } from './floorStatusTable'

const meta: Meta<typeof FloorStatusTable> = {
  title: 'UI/FloorStatusTable',
  component: FloorStatusTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof FloorStatusTable>

const TableLegend = () => (
  <div className='flex flex-wrap items-center gap-x-6 gap-y-2 rounded-md border bg-white p-4 text-sm text-gray-700'>
    <div className='flex items-center gap-2'>
      <div className='h-4 w-4 rounded-full border bg-sky-100' />
      <span>淺藍色標示：該位置已有照片紀錄</span>
    </div>
    <div className='flex items-center gap-2'>
      <div className='h-4 w-4 rounded-full border bg-gray-300' />
      <span>灰色標頭：特殊區域 (全棟/公共區域)</span>
    </div>
    <div className='flex items-center gap-2'>
      <div className='h-4 w-4 rounded-full border bg-blue-500' />
      <span>藍色標示：特殊樓層 (公設/RF/BF)</span>
    </div>
  </div>
)

const mockData: FloorStatusTableProps = {
  floors: [
    'BF',
    '1F',
    '2F',
    '3F',
    '4F',
    '5F',
    '6F',
    '7F',
    '8F',
    '9F',
    '10F',
    '11F',
    '12F',
    '13F',
    '14F',
    '15F',
    'RF',
  ],
  units: ['公共區域', '全樓層', 'A1', 'A2', 'A3', 'A5', 'A6', 'A7', 'A8', 'A9'],
  cells: {
    'RF-公共區域': { status: 'available', count: 4 },
    '15F-A1': { status: 'available', count: 2 },
    '15F-A2': { status: 'available', count: 2 },
    '15F-A3': { status: 'available', count: 2, errorFlag: true },
    '14F-A1': { status: 'available', count: 2, successFlag: true },
    '14F-A2': { status: 'available', count: 2 },
    '14F-A3': { status: 'available', count: 2 },
    '10F-公共區域': { status: 'occupied', count: 1, successFlag: true },
  },
}

// Story 1: 普通版
export const Default: Story = {
  render: (args) => (
    <div className='bg-gray-100 p-6' style={{ height: '100vh' }}>
      <h2 className='mb-4 text-2xl font-bold'>工程照片查核表</h2>
      <TableLegend />
      <div className='mt-4' style={{ height: 'calc(100% - 120px)' }}>
        <FloorStatusTable {...args} />
      </div>
    </div>
  ),
  args: {
    ...mockData,
  },
}

// Story 2: 40樓版本
export const With40Floors: Story = {
  render: (args) => (
    <div className='bg-gray-100 p-6' style={{ height: '100vh' }}>
      <h2 className='mb-4 text-2xl font-bold'>工程照片查核表 (40樓版本)</h2>
      <TableLegend />
      <div className='mt-4' style={{ height: 'calc(100% - 120px)' }}>
        <FloorStatusTable {...args} />
      </div>
    </div>
  ),
  args: {
    ...mockData,
    floors: ['BF', ...Array.from({ length: 40 }, (_, i) => `${i + 1}F`), 'RF'],
  },
}
