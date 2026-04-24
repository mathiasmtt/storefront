import Link from "next/link"

const footerLinks = {
  Tienda: [
    { href: "/productos", label: "Todos los productos" },
    { href: "/productos?cat=remeras", label: "Remeras" },
    { href: "/productos?cat=pantalones", label: "Pantalones" },
    { href: "/productos?cat=calzado", label: "Calzado" },
    { href: "/productos?cat=accesorios", label: "Accesorios" },
  ],
  Empresa: [
    { href: "#", label: "Sobre nosotros" },
    { href: "#", label: "Sustentabilidad" },
    { href: "#", label: "Tiendas físicas" },
    { href: "#", label: "Trabaja con nosotros" },
  ],
  Ayuda: [
    { href: "#", label: "Preguntas frecuentes" },
    { href: "#", label: "Envíos y devoluciones" },
    { href: "#", label: "Guía de talles" },
    { href: "#", label: "Contacto" },
  ],
}

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold tracking-tight mb-4">MYCOMMERCE</h3>
            <p className="text-sm leading-relaxed">
              Moda consciente con materiales premium. Diseñado en Buenos Aires, 
              fabricado con responsabilidad.
            </p>
            <p className="text-xs mt-4 text-gray-600">
              Prototipo con MedusaJS
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 MYCOMMERCE. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs">
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
