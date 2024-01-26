'use client';
import ClockIcon from '@/assets/images/leadslist-icons/search-clock.png';
import LeadDetails from '@/components/lead-details';
import { LEADS_DATA_TYPE, statusColor } from '@/models/global-types';
import Image from 'next/image';
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const getStatusColor: statusColor = {
  cool: 'bg-blue-200',
  hot: 'bg-[#FFD9D9]',
  warm: 'bg-[#FFEFB8]',
};

const SuggestionRow = ({ item }: { item: LEADS_DATA_TYPE }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className='relative bg-white rounded-[10px]' onClick={toggleDrawer}>
      <div className='flex justify-between items-center w-[100%] z-10 p-2 bg-white ring-1 ring-black ring-opacity-0 rounded-[10px]'>
        <div className='flex flex-col p-2 gap-1'>
          <div>
            <p className='leading-3 font-semibold text-indigo-950 text-sm'>
              {item.title}
            </p>
          </div>
          <div className='flex items-center gap-1 mt-1'>
            <div>
              <Image src={ClockIcon} alt='' width={16} height={16} />
            </div>

            <div className='text-[#9d9d9d] font-normal text-[12px] leading-[14.5px] tracking-[0] whitespace-nowrap text-capitalize inline-block'>
              {item.date}
            </div>
          </div>
          <div className='w-[25%]'>
            <p className='text-neutral-700 text-xs whitespace-nowrap font-semibold inline-block'>
              Assignee:{' '}
              <span className='text-slate-400 text-xs font-medium leading-tight'>
                {item.assignedToName}
              </span>
            </p>
          </div>
        </div>
        <div className='pr-4'>
          <span
            className={`text-[#00156A] text-[10px] font-medium ${
              getStatusColor[item.status as keyof statusColor]
            } px-[6px] py-[5px] rounded-[12px]`}>
            {item.status}
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={450}
        overlayOpacity={0}>
        <LeadDetails setIsOpen={setIsOpen} data={item} />
      </Drawer>
    </div>
  );
};

export default SuggestionRow;
