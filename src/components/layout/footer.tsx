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
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-gray-900 text-sm font-bold tracking-tight">MYCOMMERCE</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Moda consciente con materiales premium. Diseñado en Buenos Aires,
              fabricado con responsabilidad.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2025 MYCOMMERCE. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="#" className="hover:text-gray-900 transition-colors">Términos</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
