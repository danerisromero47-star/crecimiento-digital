
const whatsapp = "50493523572";
const email = "crecimientodigital2026@outlook.es";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071525] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071525]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Crecimiento Digital"
              className="h-12 w-auto object-contain"
            />

            <div className="hidden sm:block">
              <p className="font-bold text-white">Crecimiento Digital</p>
              <p className="text-xs text-slate-400">
                Soluciones digitales
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#inicio" className="text-sm text-slate-300 hover:text-white">
              Inicio
            </a>

            <a href="#servicios" className="text-sm text-slate-300 hover:text-white">
              Servicios
            </a>

            <a href="#proceso" className="text-sm text-slate-300 hover:text-white">
              Proceso
            </a>

            <a href="#proyectos" className="text-sm text-slate-300 hover:text-white">
              Proyectos
            </a>

            <a href="#nosotros" className="text-sm text-slate-300 hover:text-white">
              Nosotros
            </a>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              className="rounded-full bg-[#0D6EFD] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1d7cff]"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </nav>


      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden px-6 pb-24 pt-36"
      >
        {/* Brillos */}
        <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0D6EFD]/20 blur-[120px]" />
        <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* TEXTO */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-sm font-medium text-blue-200">
                Soluciones digitales para crecer
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Transformamos ideas en{" "}
              <span className="text-[#3FA9FF]">
                soluciones digitales.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Creamos aplicaciones, sitios web y estrategias de publicidad
              digital para ayudar a negocios y marcas a crecer en el mundo
              digital.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                className="rounded-full bg-[#0D6EFD] px-7 py-4 text-center font-bold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105 hover:bg-[#1d7cff]"
              >
                Hablemos por WhatsApp →
              </a>

              <a
                href="#servicios"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </div>


          {/* LOGO CENTRAL */}
          <div className="relative flex min-h-[520px] items-center justify-center">

            <div className="absolute h-[390px] w-[390px] rounded-full border border-blue-400/10" />

            <div className="absolute h-[300px] w-[300px] rounded-full border border-blue-400/20" />

            <div className="absolute h-[220px] w-[220px] rounded-full bg-[#0D6EFD]/10 blur-2xl" />

            <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full border border-blue-400/20 bg-[#0b2138] shadow-2xl shadow-blue-500/20">

              <img
                src="/logo.png"
                alt="Crecimiento Digital"
                className="w-44 object-contain"
              />

            </div>

            {/* Tarjeta 1 */}
            <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-[#102b47] px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-400">SERVICIO</p>
              <p className="mt-1 font-bold">Aplicaciones</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="absolute right-0 top-12 rounded-2xl border border-white/10 bg-[#102b47] px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-400">SERVICIO</p>
              <p className="mt-1 font-bold">Sitios web</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="absolute bottom-20 left-10 rounded-2xl border border-white/10 bg-[#102b47] px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-400">SERVICIO</p>
              <p className="mt-1 font-bold">Publicidad digital</p>
            </div>

          </div>
        </div>
      </section>


      {/* SERVICIOS */}
      <section id="servicios" className="border-t border-white/10 bg-[#0a1c30] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-[0.25em] text-[#3FA9FF]">
              Servicios
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Todo lo que necesitas para crecer digitalmente.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Diseñamos soluciones pensadas para que tu negocio tenga una
              presencia digital profesional y preparada para crecer.
            </p>
          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {/* CARD */}
            <div className="group rounded-3xl border border-white/10 bg-[#102b47] p-8 transition hover:-translate-y-2 hover:border-blue-400/40">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl">
                📱
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Aplicaciones
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Desarrollamos aplicaciones modernas para automatizar procesos
                y ofrecer mejores experiencias a tus clientes.
              </p>

              <div className="mt-6 text-sm font-bold text-[#3FA9FF]">
                Desarrollo digital →
              </div>
            </div>


            {/* CARD */}
            <div className="group rounded-3xl border border-white/10 bg-[#102b47] p-8 transition hover:-translate-y-2 hover:border-blue-400/40">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl">
                🌐
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Sitios web
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Creamos páginas web rápidas, modernas, profesionales y
                adaptadas a computadoras, tablets y celulares.
              </p>

              <div className="mt-6 text-sm font-bold text-[#3FA9FF]">
                Presencia online →
              </div>
            </div>


            {/* CARD */}
            <div className="group rounded-3xl border border-white/10 bg-[#102b47] p-8 transition hover:-translate-y-2 hover:border-blue-400/40">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl">
                📈
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Publicidad digital
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Creamos estrategias digitales para aumentar el alcance de tu
                marca y conectar con nuevos clientes.
              </p>

              <div className="mt-6 text-sm font-bold text-[#3FA9FF]">
                Más oportunidades →
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* PROCESO */}
      <section id="proceso" className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#3FA9FF]">
              Nuestro proceso
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              De una idea a una solución real.
            </h2>
          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-4xl font-black text-blue-400">01</p>
              <h3 className="mt-6 text-xl font-bold">Descubrimos</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Conocemos tu negocio, objetivos y necesidades.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-4xl font-black text-blue-400">02</p>
              <h3 className="mt-6 text-xl font-bold">Diseñamos</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Convertimos las ideas en una experiencia digital clara.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-4xl font-black text-blue-400">03</p>
              <h3 className="mt-6 text-xl font-bold">Desarrollamos</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Construimos la solución utilizando tecnología moderna.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-4xl font-black text-blue-400">04</p>
              <h3 className="mt-6 text-xl font-bold">Lanzamos</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Publicamos y dejamos tu proyecto listo para crecer.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* PROYECTOS */}
      <section id="proyectos" className="border-y border-white/10 bg-[#0a1c30] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-[#3FA9FF]">
                Proyectos
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Lo que podemos construir.
              </h2>
            </div>

            <p className="max-w-md text-slate-300">
              Esta sección crecerá junto con nuestros próximos proyectos y
              clientes.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#102b47]">

              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-blue-950 to-[#12375b]">

                <div className="text-center">
                  <div className="text-5xl">🚀</div>
                  <p className="mt-4 font-bold">
                    Próximo proyecto
                  </p>
                </div>

              </div>

              <div className="p-7">
                <p className="text-sm font-bold text-blue-400">
                  PROYECTO DESTACADO
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Tu proyecto puede aparecer aquí
                </h3>

                <p className="mt-3 text-slate-300">
                  Desarrollamos soluciones digitales adaptadas a cada negocio.
                </p>
              </div>

            </div>


            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#102b47]">

              <div className="flex h-72 items-center justify-center bg-gradient-to-br from-cyan-950 to-[#12375b]">

                <div className="text-center">
                  <div className="text-5xl">💡</div>
                  <p className="mt-4 font-bold">
                    Nueva idea
                  </p>
                </div>

              </div>

              <div className="p-7">
                <p className="text-sm font-bold text-blue-400">
                  PROYECTO FUTURO
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Construyamos algo juntos
                </h3>

                <p className="mt-3 text-slate-300">
                  Cuéntanos tu idea y podemos convertirla en una solución
                  digital.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* NOSOTROS */}
      <section id="nosotros" className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="font-bold uppercase tracking-[0.25em] text-[#3FA9FF]">
              Nosotros
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Tecnología con propósito.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              En Crecimiento Digital creemos que la tecnología debe servir
              para resolver problemas reales y abrir nuevas oportunidades.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Trabajamos combinando creatividad, estrategia y desarrollo
              tecnológico para crear experiencias digitales profesionales.
            </p>

          </div>


          <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-[#0D6EFD]/20 to-cyan-400/5 p-10">

            <img
              src="/logo.png"
              alt="Crecimiento Digital"
              className="mx-auto w-64 object-contain"
            />

            <div className="mt-8 border-t border-white/10 pt-8 text-center">
              <p className="text-xl font-bold">
                “Transformamos ideas en soluciones digitales”
              </p>

              <p className="mt-3 text-slate-400">
                Crecimiento Digital
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-[#0D6EFD] to-[#0750b8] p-10 sm:p-14">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-blue-100">
                ¿Tienes una idea?
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Hagámosla realidad.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">
                Estamos listos para conocer tu proyecto y ayudarte a encontrar
                la solución digital adecuada.
              </p>
            </div>


            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">

              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                className="rounded-full bg-white px-7 py-4 text-center font-bold text-[#0750b8] transition hover:scale-105"
              >
                Escribir por WhatsApp
              </a>

              <a
                href={`mailto:${email}`}
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                Enviar correo
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* CONTACTO */}
      <section className="border-t border-white/10 bg-[#0a1c30] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-[#3FA9FF]">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Hablemos de tu proyecto.
            </h2>

          </div>


          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              className="rounded-3xl border border-white/10 bg-[#102b47] p-7 transition hover:border-green-400/40 hover:bg-[#143653]"
            >
              <p className="text-sm font-bold text-green-400">
                WHATSAPP
              </p>

              <p className="mt-3 text-xl font-bold">
                +504 9352-3572
              </p>

              <p className="mt-2 text-slate-400">
                Escríbenos directamente →
              </p>
            </a>


            <a
              href={`mailto:${email}`}
              className="rounded-3xl border border-white/10 bg-[#102b47] p-7 transition hover:border-blue-400/40 hover:bg-[#143653]"
            >
              <p className="text-sm font-bold text-blue-400">
                EMAIL
              </p>

              <p className="mt-3 break-all text-xl font-bold">
                {email}
              </p>

              <p className="mt-2 text-slate-400">
                Envíanos un correo →
              </p>
            </a>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050f1b] px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Crecimiento Digital"
              className="h-10 w-auto object-contain"
            />

            <div>
              <p className="font-bold">
                Crecimiento Digital
              </p>

              <p className="text-sm text-slate-500">
                Transformamos ideas en soluciones digitales
              </p>
            </div>

          </div>

          <p className="text-sm text-slate-500">
            © 2026 Crecimiento Digital. Todos los derechos reservados.
          </p>

        </div>

      </footer>


      {/* WHATSAPP FLOTANTE */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl shadow-2xl shadow-green-500/30 transition hover:scale-110"
      >
        💬
      </a>

    </main>
  );
}