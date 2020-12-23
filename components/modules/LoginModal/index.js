import { useState } from 'react';
import CMS from '../../../cms';
import Modal from '../../ui/Modal';

const IDENTIFIER = 'identifier';
const PASSWORD = 'password';

const initialFormValues = {
  [IDENTIFIER]: '',
  [PASSWORD]: '',
};

export default function LoginModal({ close }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    const user = await CMS.login(formValues);
  }

  return (
    <Modal close={close}>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <input name={IDENTIFIER} type="text" value={formValues[IDENTIFIER]} onChange={handleChange} />
        <input name={PASSWORD} type="password" value={formValues[PASSWORD]} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </Modal>
  )
}
