import TimerContextProvider from '../../Store/timer-context'
import Header from './Header'
import AddTimer from './AddTimer'
import Timers from './Timers'


function Parent(){
    return(
        <TimerContextProvider>

           <Header/>
           <AddTimer/>
           <Timers/>

        </TimerContextProvider>
    )
}

export default Parent