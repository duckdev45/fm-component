import * as React from 'react'
import { Camera, AlertTriangle, CheckCircle } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

interface CellData {
  status: 'available' | 'occupied' | 'reserved'
  count: number
  errorFlag?: boolean
  successFlag?: boolean
}

export interface FloorStatusTableProps {
  units: string[]
  floors: string[]
  cells: Record<string, CellData>
  className?: string
}

export const FloorStatusTable: React.FC<FloorStatusTableProps> = ({
  units,
  floors,
  cells,
  className,
}) => {
  const tableHeaders = ['樓層', ...units]
  const reversedFloors = React.useMemo(() => [...floors].reverse(), [floors])

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-auto rounded-lg border',
        className
      )}
    >
      <Table className='border-separate border-spacing-0'>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header, index) => {
              // 判斷是否為特殊標頭
              const isSpecialHeader =
                header === '公共區域' || header === '全樓層'

              return (
                <TableHead
                  key={header}
                  className={cn(
                    'sticky whitespace-nowrap text-center',
                    'top-0 z-20',
                    index === 0 && 'left-0 z-30',
                    // 根據 isSpecialHeader 動態給予不同顏色
                    {
                      'bg-gray-300 text-gray-800': isSpecialHeader, // 特殊標頭用灰色
                      'bg-gray-600 text-white': !isSpecialHeader, // 其他維持深色
                    }
                  )}
                >
                  {header}
                </TableHead>
              )
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {reversedFloors.map((floor) => {
            // ✨ 變動 2: 判斷是否為特殊樓層
            const isSpecialFloor = floor === 'RF' || floor === 'BF'

            return (
              <TableRow key={floor}>
                <TableCell
                  className={cn(
                    'sticky left-0 z-10 whitespace-nowrap text-center font-medium',
                    // 根據 isSpecialFloor 動態給予不同顏色
                    {
                      'bg-blue-500 text-white': isSpecialFloor, // 特殊樓層用藍色
                      'bg-neutral-800 text-white': !isSpecialFloor, // 其他維持深色
                    }
                  )}
                >
                  {floor}
                </TableCell>

                {units.map((unit) => {
                  const cellKey = `${floor}-${unit}`
                  const cellData = cells[cellKey]

                  return (
                    <TableCell key={cellKey} className='p-1.5'>
                      {cellData ? (
                        <div
                          className={cn(
                            'flex h-16 w-20 flex-col items-center justify-center rounded-md font-medium',
                            {
                              'bg-destructive text-destructive-foreground':
                                cellData.errorFlag,
                              'bg-success text-success-foreground':
                                cellData.successFlag,
                              'bg-sky-100 text-sky-800':
                                !cellData.errorFlag && !cellData.successFlag,
                            }
                          )}
                        >
                          <div className='flex items-center gap-1'>
                            {cellData.errorFlag && (
                              <AlertTriangle className='h-4 w-4' />
                            )}
                            {cellData.successFlag && (
                              <CheckCircle className='h-4 w-4' />
                            )}
                            {!cellData.errorFlag && !cellData.successFlag && (
                              <Camera className='h-4 w-4' />
                            )}
                            <span>
                              {cellData.errorFlag
                                ? '需修正'
                                : cellData.successFlag
                                  ? '已完成'
                                  : '查看'}
                            </span>
                          </div>
                          <span className='text-xs font-semibold'>
                            ({cellData.count})
                          </span>
                        </div>
                      ) : (
                        <div className='flex h-16 w-20 items-center justify-center'>
                          <span>-</span>
                        </div>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
