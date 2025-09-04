import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface CascaderSelectProps {
  data: Record<string, string[]>
  onCountyChange?: (county: string) => void
  onDistrictChange?: (district: string) => void
  county?: string
  district?: string
}

export const CascaderSelect: React.FC<CascaderSelectProps> = ({
  data,
  onCountyChange,
  onDistrictChange,
  county: controlledCounty,
  district: controlledDistrict,
}) => {
  const [open, setOpen] = React.useState(false)

  const [internalCounty, setInternalCounty] = React.useState(
    controlledCounty || ''
  )
  const [internalDistrict, setInternalDistrict] = React.useState(
    controlledDistrict || ''
  )

  React.useEffect(() => {
    if (controlledCounty !== undefined) {
      setInternalCounty(controlledCounty)
    }
  }, [controlledCounty])

  React.useEffect(() => {
    if (controlledDistrict !== undefined) {
      setInternalDistrict(controlledDistrict)
    }
  }, [controlledDistrict])

  const handleCountySelect = (county: string) => {
    setInternalCounty(county)
    setInternalDistrict('')
    if (onCountyChange) {
      onCountyChange(county)
    }
    if (onDistrictChange) {
      onDistrictChange('')
    }
  }

  const handleDistrictSelect = (district: string) => {
    setInternalDistrict(district)
    if (onDistrictChange) {
      onDistrictChange(district)
    }
    setOpen(false)
  }

  const counties = Object.keys(data)
  const districts = internalCounty ? data[internalCounty] || [] : []

  const displayValue = internalCounty
    ? `${internalCounty} / ${internalDistrict || '請選擇地區'}`
    : '請選擇縣市 / 地區'

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[240px] justify-between'
        >
          {displayValue}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <div className='flex'>
          <div
            className='flex-1 overflow-y-auto p-2'
            style={{ maxHeight: '300px' }}
          >
            {counties.map((county) => (
              <div
                key={county}
                onClick={() => handleCountySelect(county)}
                className={cn(
                  'cursor-pointer rounded-sm px-2 py-1.5 text-sm hover:bg-accent',
                  internalCounty === county && 'bg-accent'
                )}
              >
                {county}
              </div>
            ))}
          </div>
          {internalCounty && (
            <div
              className='flex-1 overflow-y-auto border-l p-2'
              style={{ maxHeight: '300px' }}
            >
              {districts.map((district) => (
                <div
                  key={district}
                  onClick={() => handleDistrictSelect(district)}
                  className={cn(
                    'cursor-pointer rounded-sm px-2 py-1.5 text-sm hover:bg-accent',
                    internalDistrict === district && 'bg-accent'
                  )}
                >
                  {district}
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
