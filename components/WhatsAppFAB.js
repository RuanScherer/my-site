import Link from "next/link"

const WhatsAppFAB = () => (
  <Link href="https://wa.link/tgjlij">
    <a className="p-3 shadow-xl bg-white rounded-full fixed bottom-6 right-6 z-10 transform transition hover:translate-y-1 hover:shadow-lg">
      <img width="30" src="/whatsapp-symbol.svg" alt="WhatsApp"/>
    </a>
  </Link>
)

export default WhatsAppFAB