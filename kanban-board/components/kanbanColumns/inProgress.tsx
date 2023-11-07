import React from 'react';
import Cards from '../cards/cards';
import './styleSheet.scss';

interface TodoItem {
  name: string;
  description: string;
  date: string;
}

const Inprogress: React.FC = () => {
  const demoData: TodoItem[] = [
    {
      name: 'Suraj',
      description:
        'Making queries that are to be asked and also the answers that should be displayed, keywords based as the meaning should be the same, Checking the answer, i.e., the summary which is displayed in the output if it is correct factually, logically & semantically',
      date: '19/11/2023',
    },
    {
      name: 'Shubham',
      description:
        'Making queries that are to be asked and also the answers that should be displayed, keywords based as the meaning should be the same, Checking the answer, i.e., the summary which is displayed in the output if it is correct factually, logically & semantically',
      date: '19/11/2023',
    },
    {
      name: 'Saurabh',
      description:
        'Making queries that are to be asked and also the answers that should be displayed, keywords based as the meaning should be the same, Checking the answer, i.e., the summary which is displayed in the output if it is correct factually, logically & semantically',
      date: '19/11/2023',
    },
    {
      name: 'Aniket',
      description:
        'Making queries that are to be asked and also the answers that should be displayed, keywords based as the meaning should be the same, Checking the answer, i.e., the summary which is displayed in the output if it is correct factually, logically & semantically',
      date: '19/11/2023',
    },
  ];

  const showResult = () => {
    return demoData?.map((e) => (
      <Cards name={e.name} description={e.description} date={e.date} key={e.name} />
    ));
  };

  return (
    <div className='head'>
      {showResult()}
    </div>
  );
};

export default Inprogress;
