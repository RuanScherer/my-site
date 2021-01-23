import Link from "next/link"

const WhatsAppFAB = () => (
  <Link href="https://api.whatsapp.com/send?phone=5547999254336&text=Opa%2C%20peguei%20o%20contato%20no%20seu%20site">
    <a className="p-3 shadow-xl cursor-pointer bg-white rounded-full fixed bottom-6 right-6 z-s0 transform transition hover:translate-y-1 hover:shadow-lg">
      <img width="30" src="/images/whatsapp-symbol.svg" alt="WhatsApp"/>
    </a>
  </Link>
)

export default WhatsAppFAB