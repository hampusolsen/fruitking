import { useState } from 'react'
import { useAddToCart, useUpdateCartAmount } from '../../../contexts/cart'
import { useCloseModal, useModalContext } from '../../../contexts/modal'
import Modal from '../../ui/Modal'

export default function AddCartItemModal () {
  const { type, product } = useModalContext()
  const addToCart = useAddToCart()
  const closeModal = useCloseModal()
  const [amount, setAmount] = useState(product?.amount || 1)
  const updateCartAmount = useUpdateCartAmount()

  function handleSubmit (e) {
    e.preventDefault()
    if (type === 'add') {
      addToCart(product, amount)
    } else {
      updateCartAmount(product, amount)
    }
    closeModal()
  }

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            max="255"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  )
}
