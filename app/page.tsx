'use client'
import { useEffect, useRef, type FormEvent } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Shield, Network, ArrowRight, Server, House, AudioLines, Code2, MessageCircle, CircuitBoard, Cpu, CloudCog, Radio } from 'lucide-react'
import { Button, ButtonOutline } from '@/components/ui/Button'
import { Card, CardBody, CardTitle, CardSub } from '@/components/ui/Card'

const nav = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'industria', label: 'Indústria Conectada' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'cases', label: 'Cases' },
  { id: 'tech', label: 'Tecnologias' },
  { id: 'contato', label: 'Contato' },
]
const featuredCases = [
  {
    tag: 'SaaS/Marketplace',
    title: 'BanhoPet',
    desc: 'Marketplace de serviços pet com split de pagamento, geolocalização e agendamento inteligente (Flutter + Nest + Postgres).',
    logo: '/logo_banhopet.png',
    logoAlt: 'BanhoPet',
  },
  {
    tag: 'Automação & Áudio',
    title: 'Future ON',
    desc: 'Automação residencial e sonorização ambiente com projetos assinados por Engenheiro de Computação registrado no CREA.',
    logo: '/logo-futureon.svg',
    logoAlt: 'Future ON',
  },
  {
    tag: 'TI Corporativa',
    title: 'Infraestrutura para Empresas',
    desc: 'Redes, servidores, segurança e suporte contínuo (SLA) para operações sem interrupções.',
    logo: '/logo-ti-corporativa.svg',
    logoAlt: 'Infraestrutura corporativa',
  },
] as const

const techBadges = [
  { icon: '⚛️', label: 'React / React Native' },
  { icon: '🟢', label: 'Node.js / npm' },
  { icon: '🧱', label: 'NestJS' },
  { icon: '🧩', label: 'Prisma ORM' },
  { icon: '🐘', label: 'PostgreSQL / PostGIS' },
  { icon: '🟥', label: 'Redis' },
  { icon: '🔥', label: 'Firebase' },
  { icon: '☁️', label: 'Google Cloud' },
  { icon: '🟧', label: 'AWS' },
  { icon: '📦', label: 'Docker' },
  { icon: '📱', label: 'Flutter' },
  { icon: '🤖', label: 'Android' },
  { icon: '💜', label: 'Kotlin' },
  { icon: '🪐', label: 'TypeScript' },
  { icon: '🟨', label: 'JavaScript' },
  { icon: '🐍', label: 'Python' },
  { icon: '🧪', label: 'Cypress / Jest' },
  { icon: '🧭', label: 'Git / GitHub' },
  { icon: '🖥️', label: 'Visual Studio / VS Code' },
  { icon: '🎨', label: 'Adobe Photoshop / Illustrator' },
  { icon: '🎬', label: 'Adobe Premiere Pro' },
  { icon: '📐', label: 'Figma / Adobe XD' },
  { icon: '🧮', label: 'Raspberry Pi / Arduino' },
  { icon: '🔌', label: 'MQTT / Zigbee' },
] as const

const industrialHighlights = [
  { icon: CircuitBoard, title: 'PCBs e gateways sob medida', desc: 'Prototipagem rápida, design de placas e montagem de lotes pilotos com conformidade EMC.' },
  { icon: Cpu, title: 'Firmware e automação embarcada', desc: 'Desenvolvimento em C/C++, Python e Node-RED para PLCs, microcontroladores e edge devices.' },
  { icon: CloudCog, title: 'Integração com nuvem e analytics', desc: 'Gateways seguros, APIs e dashboards para supervisão em tempo real e manutenção preditiva.' },
  { icon: Radio, title: 'Telemetria industrial resiliente', desc: 'LoRaWAN, Zigbee, NB-IoT, 4G/LTE e protocolos Modbus/MQTT para conectar ativos distribuídos.' },
] as const

const industrialStacks = [
  'Edge Linux + Docker + Yocto',
  'LoRaWAN / Zigbee / MQTT',
  'APIs REST / GraphQL',
  'Dashboards Power BI / Superset',
  'Integração ERP (SAP, TOTVS, Bling)',
  'Alertas via WhatsApp Business API',
] as const

const WHATSAPP_NUMBER = '5514997040256'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
function Anchor({ id }: { id: string }) { return <div id={id} className="scroll-mt-24" /> }

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const openWhatsApp = (text?: string) => {
    if (typeof window === 'undefined') {
      return
    }
    const query = text ? `?${new URLSearchParams({ text }).toString()}` : ''
    const url = `${WHATSAPP_LINK}${query}`
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    if (!popup) {
      window.location.href = url
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    const attemptPlayback = () => {
      if (video.paused) {
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay might require a user gesture; ignore errors and retry on interaction.
          })
        }
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        attemptPlayback()
      }
    }

    video.defaultMuted = true
    video.muted = true
    video.playsInline = true

    video.addEventListener('canplay', attemptPlayback)
    video.addEventListener('pointerdown', attemptPlayback)
    video.addEventListener('touchstart', attemptPlayback, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    attemptPlayback()

    return () => {
      video.removeEventListener('canplay', attemptPlayback)
      video.removeEventListener('pointerdown', attemptPlayback)
      video.removeEventListener('touchstart', attemptPlayback)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const getValue = (key: string) => (formData.get(key)?.toString().trim() ?? '')

    const nome = getValue('nome')
    const whatsapp = getValue('whatsapp')
    const empresa = getValue('empresa')
    const cidade = getValue('cidade')
    const servico = getValue('servico')
    const mensagem = getValue('mensagem')

    const lines = [
      'Olá, tenho interesse em um orçamento com a JR Girotto Tecnologia.',
      nome && `Nome: ${nome}`,
      empresa && `Empresa: ${empresa}`,
      cidade && `Cidade/Estado: ${cidade}`,
      whatsapp && `WhatsApp: ${whatsapp}`,
      servico && `Serviço: ${servico}`,
      mensagem && `Detalhes: ${mensagem}`,
    ].filter((value): value is string => Boolean(value))

    const text = lines.join('\n')
    openWhatsApp(text)
    form.reset()
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-p h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Image
              src="/jrgirotto_tecnologia.png"
              alt="JR Girotto Tecnologia"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n => <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground hover:text-foreground">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Falar no WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="container-p py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-bold tracking-tight">
              Engenharia e Tecnologia que Conectam o Futuro
            </motion.h1>
            <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}} className="mt-4 text-muted-foreground text-lg">
              Soluções em <strong>TI Corporativa</strong>, <strong>Automação & Sonorização</strong> e <strong>Desenvolvimento Full Stack</strong> — com a segurança de um Engenheiro de Computação registrado no CREA.
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#servicos" className="btn btn-primary flex items-center gap-2">Ver serviços <ArrowRight className="h-4 w-4"/></a>
              <a href="#cases" className="btn btn-ghost">Conheça os cases</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> CREA-SP • ART</div>
              <div className="flex items-center gap-2"><Network className="h-4 w-4" /> Marília-SP e região</div>
            </div>
          </div>
          <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{duration:0.6,delay:0.1}} className="relative">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border shadow-lg">
              <video
                className="h-full w-full object-cover"
                src="/JRGIROTTO.mp4"
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                preload="metadata"
                poster="/jrgirotto_tecnologia.png"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <Anchor id="servicos" />
      <section className="container-p py-16">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">O que fazemos</div>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Serviços para empresas e residências, do projeto ao suporte.</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">Unimos engenharia, automação, TI e desenvolvimento para entregar soluções completas e seguras.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {icon:<Server className="h-6 w-6"/>,title:"Serviços de TI para Empresas",blurb:"Field Service, redes, servidores, segurança e suporte 24/7 para pequenas, médias e grandes empresas.",bullets:["Redes corporativas, Wi‑Fi, switches e firewalls","Servidores, backup e nuvem","Monitoramento e SLA sob medida"]},
            {icon:<House className="h-6 w-6"/>,title:"Automação Residencial",blurb:"Iluminação, persianas, climatização, Alexa/Google, integrações e cenários inteligentes com ART.",bullets:["Projeto, instalação e comissionamento","Home Assistant / Matter / Zigbee / Z‑Wave","Documentação técnica e segurança"]},
            {icon:<AudioLines className="h-6 w-6"/>,title:"Sonorização • Cinema e Ambiente",blurb:"Projetos de Home Cinema e áudio ambiente corporativo com cobertura uniforme e potência correta.",bullets:["Acústica, dimensionamento e DSP","Linhas 70/100V e multizonas","Racks e proteção elétrica"]},
            {icon:<Code2 className="h-6 w-6"/>,title:"Programação Full Stack",blurb:"SaaS/Marketplace, APIs, dashboards e integrações de pagamento com engenharia de software profissional.",bullets:["Frontend: Flutter, React, Vite, Tailwind","Backend: NestJS, Prisma, PostgreSQL","Infra: Render, Vercel, Supabase, Cloudflare"]},
          ].map((s) => (
            <Card key={s.title}>
              <CardBody>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border p-2">{s.icon}</div>
                  <CardTitle>{s.title}</CardTitle>
                </div>
                <CardSub className="pt-2">{s.blurb}</CardSub>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {s.bullets.map((b:string) => <li key={b} className="list-disc list-inside">{b}</li>)}
                </ul>
                <div className="mt-4"><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Falar agora</a></div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Anchor id="industria" />
      <section className="container-p py-16 bg-muted/30">
        <div className="grid gap-10 items-start lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Indústria conectada</div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Hardware personalizado e IoT para a sua operação</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">Do conceito ao comissionamento, conectamos máquinas, sensores e sistemas corporativos com automação embarcada, telemetria segura e integrações em nuvem.</p>
            <div className="mt-6 space-y-4">
              {industrialHighlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border bg-background">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button
                type="button"
                onClick={() => openWhatsApp('Olá, quero falar sobre projetos de indústria conectada e IoT.')}
              >
                Discutir projeto IoT
              </Button>
            </div>
          </div>
          <Card>
            <CardBody className="space-y-4">
              <CardTitle>Arquitetura completa</CardTitle>
              <CardSub>Integramos hardware, firmware e nuvem para visibilidade em tempo real.</CardSub>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {industrialStacks.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border bg-background p-4 text-xs text-muted-foreground">
                <p><strong>Laboratório móvel:</strong> impressão 3D, soldagem SMD, instrumentação e testes EMC.</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <Anchor id="sobre" />
      <section className="container-p py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="mb-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Quem assina</div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">JR GIROTTO – Engenheiro de Computação (CREA-SP)</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">Projetos com responsabilidade técnica (ART), segurança e qualidade. Experiência prática em automação, TI e desenvolvimento de software.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium">Foco</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Automação residencial & áudio</li>
                  <li>TI corporativa e redes</li>
                  <li>Desenvolvimento de sistemas</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Diferenciais</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Responsabilidade técnica CREA</li>
                  <li>Clean Architecture / SOLID</li>
                  <li>Entrega ponta‑a‑ponta</li>
                </ul>
              </div>
            </div>
          </div>
          <Card>
            <CardBody>
              <CardTitle>Como trabalhamos</CardTitle>
              <CardSub>Processo simples, transparente e mensurável.</CardSub>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><strong>1. Descoberta:</strong> diagnóstico técnico e escopo.</li>
                <li><strong>2. Projeto:</strong> arquitetura, memorial e ART.</li>
                <li><strong>3. Execução:</strong> instalação, comissionamento e testes.</li>
                <li><strong>4. Suporte:</strong> monitoramento, ajustes e evolução contínua.</li>
              </ol>
            </CardBody>
          </Card>
        </div>
      </section>

      <Anchor id="cases" />
      <section className="container-p py-16">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Resultados</div>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Projetos em destaque</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">Alguns cases que representam nosso padrão de engenharia, integração e acabamento.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredCases.map((c) => (
            <Card key={c.title}>
              <CardBody>
                <span className="badge">{c.tag}</span>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-background">
                    <Image src={c.logo} alt={c.logoAlt} width={44} height={44} className="max-h-10 w-auto" />
                  </div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex gap-2">
                  <ButtonOutline>Ver detalhes</ButtonOutline>
                  <Button
                    type="button"
                    onClick={() => openWhatsApp(`Ola, tenho interesse em um projeto similar a ${c.title}.`)}
                  >
                    Solicitar similar
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Anchor id="tech" />
      <section className="container-p py-16">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Stack</div>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Tecnologias que dominamos</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">Ferramentas modernas com ecossistema sólido para acelerar entregas sem abrir mão de qualidade.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {techBadges.map((tech) => (
            <span key={tech.label} className="badge flex items-center gap-2">
              <span aria-hidden="true">{tech.icon}</span>
              <span>{tech.label}</span>
            </span>
          ))}
        </div>
      </section>

      <Anchor id="contato" />
      <section className="container-p py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="mb-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Fale conosco</div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Agende agora mesmo uma reunião</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">Atendemos Marília-SP e região. Para outras cidades ou estados, consulte disponibilidade.</p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href={WHATSAPP_LINK}
                className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Contate-nos</span>
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Network className="h-4 w-4" />
                <span>Atendemos Marília-SP e região</span>
              </p>
            </div>
          </div>
          <Card>
            <CardBody>
              <CardTitle>Briefing rápido</CardTitle>
              <CardSub>Preencha e continue o atendimento pelo WhatsApp.</CardSub>
              <form onSubmit={handleWhatsAppSubmit} className="mt-4 space-y-3">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="Nome" name="nome" required />
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="WhatsApp para contato" name="whatsapp" type="tel" required />
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="Empresa (opcional)" name="empresa" />
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="Cidade ou Estado" name="cidade" />
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <label className="col-span-3">Serviço de Interesse</label>
                  <select className="col-span-3 rounded-xl border px-3 py-2" name="servico">
                    <option>TI Corporativa</option>
                    <option>Automação Residencial</option>
                    <option>Sonorização</option>
                    <option>Programação Full Stack</option>
                  </select>
                </div>
                <textarea className="w-full rounded-xl border px-3 py-2" placeholder="Detalhe sua necessidade" name="mensagem" rows={4} required />
                <div className="flex items-center justify-between">
                  <small className="text-muted-foreground">Abriremos uma conversa no WhatsApp com estes dados.</small>
                  <Button type="submit">Abrir conversa</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </section>

      <footer className="border-t">
        <div className="container-p py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} JR GIROTTO TECNOLOGIA. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.futureon.com.br" className="hover:text-foreground flex items-center gap-1">futureon.com.br</a>
            <a href="https://www.linkedin.com/in/jrgirotto" className="hover:text-foreground flex items-center gap-1">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
