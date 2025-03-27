import { useRef } from 'react';

import ButtonCustom from './UI/ButtonCustom';
import Form from './UI/Form';
import Input from './UI/Input';
import {useTimerContext} from '../../Store/timer-context'

export default function AddTimer() {


  const {addTimer} = useTimerContext()

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    addTimer({name: extractedData.name, duration: +extractedData.duration })
  }

  return (
    <Form  onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <ButtonCustom>Add Timer</ButtonCustom>
      </p>
    </Form>
  );
}
