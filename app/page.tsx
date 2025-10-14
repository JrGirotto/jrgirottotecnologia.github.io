'use client'
import { motion } from 'framer-motion'
import { Cpu, Shield, Network, ArrowRight, Server, House, AudioLines, Code2, Plug } from 'lucide-react'
import { Button, ButtonOutline } from '@/components/ui/Button'
import { Card, CardBody, CardTitle, CardSub } from '@/components/ui/Card'

const nav = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'cases', label: 'Cases' },
  { id: 'tech', label: 'Tecnologias' },
  { id: 'contato', label: 'Contato' },
]

function Anchor({ id }: { id: string }) { return <div id={id} className="scroll-mt-24" /> }

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-p h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Cpu className="h-5 w-5" /><span>JR GIROTTO TECNOLOGIA</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n => <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground hover:text-foreground">{n.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contato" className="btn btn-primary">Solicitar Orçamento</a>
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
            <div className="aspect-video w-full rounded-2xl border bg-gradient-to-br from-muted to-background grid place-items-center">
              <div className="text-center">
                <Plug className="mx-auto h-8 w-8 mb-2" />
                <p className="text-sm text-muted-foreground">Vídeo/Imagem hero (infra • automação • código)</p>
              </div>
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
                <div className="mt-4"><a href="#contato" className="btn btn-ghost">Solicitar orçamento</a></div>
              </CardBody>
            </Card>
          ))}
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
          {[
            { tag: 'SaaS/Marketplace', title: 'BanhoPet', desc: 'Marketplace de serviços pet com split de pagamento, geolocalização e agendamento inteligente (Flutter + Nest + Postgres).' },
            { tag: 'Automação & Áudio',  title: 'Future ON', desc: 'Automação residencial e sonorização ambiente com projetos assinados por Engenheiro de Computação registrado no CREA.' },
            { tag: 'TI Corporativa',     title: 'Infraestrutura para Empresas', desc: 'Redes, servidores, segurança e suporte contínuo (SLA) para operação sem interrupções.' },
          ].map((c) => (
            <Card key={c.title}>
              <CardBody>
                <div className="flex items-center justify-between">
                  <span className="badge">{c.tag}</span>
                  <Plug className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mt-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex gap-2">
                  <ButtonOutline>Ver detalhes</ButtonOutline>
                  <Button>Solicitar similar</Button>
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
          {['NestJS','Prisma','PostgreSQL / PostGIS','Flutter','React / Vite','Tailwind','Supabase','Render','Vercel','Cloudflare','WhatsApp API','Pagar.me'].map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </section>

      <Anchor id="contato" />
      <section className="container-p py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="mb-10">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Fale conosco</div>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Conte seu projeto e receba um orçamento</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">Atendemos Marília‑SP e região. Para outras cidades/estados, consulte disponibilidade.</p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>✉️ contato@jrgirotto.com.br</p>
              <p>📞 WhatsApp Business</p>
              <p>📍 Marília-SP</p>
            </div>
          </div>
          <Card>
            <CardBody>
              <CardTitle>Briefing rápido</CardTitle>
              <CardSub>Preencha e retornamos em seguida.</CardSub>
              <form action="https://formsubmit.co/contato@jrgirotto.com.br" method="POST" className="mt-4 space-y-3">
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid grid-cols-2 gap-3">
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="Nome" name="nome" required />
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="Empresa" name="empresa" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="E-mail" type="email" name="email" required />
                  <input className="w-full rounded-xl border px-3 py-2" placeholder="WhatsApp" name="whatsapp" />
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <label className="col-span-3">Serviço de interesse</label>
                  <select className="col-span-3 rounded-xl border px-3 py-2" name="servico">
                    <option>TI Corporativa</option>
                    <option>Automação Residencial</option>
                    <option>Sonorização</option>
                    <option>Programação Full Stack</option>
                  </select>
                </div>
                <textarea className="w-full rounded-xl border px-3 py-2" placeholder="Detalhe sua necessidade" name="mensagem" rows={4} required />
                <div className="flex items-center justify-between">
                  <small className="text-muted-foreground">Ao enviar, você concorda com nossa política de contato.</small>
                  <Button type="submit">Enviar</Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </section>

      <footer className="border-t">
        <div className="container-p py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} JR Girotto Tecnologia. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.futureon.com.br" className="hover:text-foreground flex items-center gap-1">futureon.com.br</a>
            <a href="https://github.com" className="hover:text-foreground flex items-center gap-1">GitHub</a>
            <a href="https://www.linkedin.com" className="hover:text-foreground flex items-center gap-1">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
