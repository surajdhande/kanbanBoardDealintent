import Image from 'next/image';
import './globals.scss';
import Navbar from '@/components/navbar/navbar';
import Todo from '@/components/kanbanColumns/todo';
import Inprogress from '@/components/kanbanColumns/inProgress';
import Completed from '@/components/kanbanColumns/completed';
export default function Home() {
  return (
    <main className='main'>
      <div className='header'>
        <Navbar />
      </div>
      <div className='sections'>
        <div className='sections-options'>
          <div>Timeline</div>
          <div style={{color:"blue"}}>Kanban Board</div>
          <div>Reports </div>
          <div>Issues</div>
          <div>Components</div>

        </div>
        <div className='sections-board'>
        <span className="title"> To Do</span>

          <section className='board'>

            <Todo></Todo>
            

          </section>
        </div>
        <div className='sections-board'>
        <span className="title"> In Progress</span>

          <section className='board'>

           <Inprogress/>
            

          </section>
        </div>
        <div className='sections-board'>
        <span className="title">Completed</span>

          <section className='board'>

<Completed/>            

          </section>
        </div>
        

      </div>
    </main>
  );
}
