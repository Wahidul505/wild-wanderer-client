import React, { useState } from 'react';
import CheckOut from './CheckOut';
import SetDate from './SetDate';

const BookService = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='w-2/3 md:w-1/2 lg:w-2/5 mx-auto flex flex-col gap-6'>
            <SetDate
                date={date}
                setDate={setDate}
            />
            <CheckOut date={date} />
        </div>
    );
};

export default BookService;