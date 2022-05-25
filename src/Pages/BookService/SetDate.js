import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const SetDate = ({date, setDate}) => {
    return (
        <div className='w-full bg-green-200 rounded-xl flex justify-center'>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />
        </div>
    );
};

export default SetDate;