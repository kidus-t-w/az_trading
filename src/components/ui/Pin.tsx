import { Mail, MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pin() {
  return (
    <div className="w-20  border border-red-200 p-2 rounded-lg fixed top-1/2 left-1/5 mr-4 bg-white z-40 right-0">
    <Link to='/' className="flex flex-col text-xs items-center mb-2 gap-2"><MessageCircleMore /><p>Whats App</p></Link>
    <Link to='/' className="flex flex-col text-xs items-center mb-2 gap-2"><Mail /><p>E-mail</p></Link>
    <Link to='/' className="flex flex-col text-xs items-center mb-2 gap-2"><MessageCircleMore /><p>WeChat</p></Link>
    </div>
  )
}
