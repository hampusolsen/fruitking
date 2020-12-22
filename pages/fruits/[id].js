import { useRouter } from 'next/router'

export default function FruitSpecific() {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div>
      specific fruit {id}
    </div>
  )
}