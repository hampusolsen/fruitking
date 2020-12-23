import { useState } from 'react';
import Modal from '../../ui/Modal';

const initialFormValues = {
  identifier: '',
  password: '',
};

export default function LoginModal() {
  const [formValues, setFormValues] = useState(initialFormValues);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formValues);
  }

  return (
    <Modal>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formValues.identifier} />
        <input type="password" value={formValues.password} />
      </form>
    </Modal>
  )
}
