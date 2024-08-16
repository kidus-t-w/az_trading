import { Mail, MessageCircleMore } from 'lucide-react'

export default function Pin() {
  return (
    <div className="w-18  border border-red-200 p-2 rounded-lg fixed top-1/2 left-1/5 mr-4 bg-white z-40 right-0">
      <a
        href="https://wa.me/251962488640"
        className="flex flex-col text-xs items-center mb-2 gap-2"
        target='_blank' 
      >
        <MessageCircleMore />
        <p>Whats App</p>
      </a>
      <hr className='my-2'/>
      <a
        href="mailto:kidustilahunet@gmail.com"
        className="flex flex-col text-xs items-center mb-2 gap-2"
        target='_blank'
      >
        <Mail />
        <p>E-mail</p>
      </a>
    </div>
  )
}
