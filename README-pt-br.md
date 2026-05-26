<div align="center">
  <br />
  <img src="./public/favicon.ico" alt="LavaRápido Logo" width="80" />
  <h1 align="center">LavaRápido</h1>
  <p align="center">
    <strong>Plataforma Moderna de Agendamento para Lava-Rápidos</strong>
    <br />
    Aplicação web mobile-first para agendamento de serviços automotivos online.
    <br />
    Desenvolvida para o mercado brasileiro com experiência localizada.
  </p>

  <p align="center">
    <a href="#-sobre">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-stack-tecnológica">Stack</a> •
    <a href="#-estrutura-do-projeto">Estrutura</a> •
    <a href="#-como-rodar">Como Rodar</a> •
    <a href="#-sistema-de-design">Design</a> •
    <a href="#-roadmap">Roadmap</a>
  </p>

  <p align="center">
    <a href="./README.md">🇺🇸 English</a>
  </p>

  <br />
</div>

---

## 📋 Sobre

O **LavaRápido** é uma aplicação web moderna e mobile-first que permite aos clientes agendar serviços de lavagem automotiva online. Desenvolvido inicialmente como **Fase 1 — Frontend**, conta com um wizard de agendamento multi-etapas completo, painel do cliente e uma landing page focada em conversão.

> **Status:** Fase 1 (Frontend com dados mock). Veja o [Roadmap](#-roadmap) para a próxima fase de integração com backend.

---

## ✨ Funcionalidades

### Landing Page
- **Hero Section** — Hero com gradiente, estatísticas e CTAs
- **Serviços & Preços** — Cards de serviços com categorias, descrições, duração e preços em R$
- **Depoimentos** — Avaliações de clientes com estrelas
- **Agendamento** — CTA integrado em toda a página

### Fluxo de Agendamento (Wizard Multi-etapas)

| Etapa | Descrição |
|---|---|
| **1 — Veículo** | Selecione o tipo: Moto, Hatch/Sedan ou SUV/Pick-up |
| **2 — Serviço** | Escolha o serviço filtrado por tipo de veículo |
| **3 — Data & Horário** | Selecione data (próximos 7 dias) e horário disponível |
| **4 — Dados do Cliente** | Nome completo, telefone/WhatsApp, placa do veículo |
| **5 — Resumo & Pagamento** | Resumo do pedido com QR Code Pix mock ou "Pagar no Local" |

### Painel do Cliente (`/dashboard`)
- Visualizar agendamentos confirmados (próximos)
- Histórico de agendamentos (concluídos / cancelados)
- Link rápido para novo agendamento

---

## 🛠 Stack Tecnológica

<table>
  <thead>
    <tr>
      <th>Camada</th>
      <th>Tecnologia</th>
      <th>Finalidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Framework</strong></td>
      <td><a href="https://nextjs.org/">Next.js 16</a> (App Router)</td>
      <td>Framework React com roteamento baseado em arquivos</td>
    </tr>
    <tr>
      <td><strong>Linguagem</strong></td>
      <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
      <td>Segurança de tipos e experiência de desenvolvimento</td>
    </tr>
    <tr>
      <td><strong>Estilização</strong></td>
      <td><a href="https://tailwindcss.com/">Tailwind CSS 4</a></td>
      <td>Estilização responsiva utility-first</td>
    </tr>
    <tr>
      <td><strong>Ícones</strong></td>
      <td><a href="https://lucide.dev/">Lucide React</a></td>
      <td>Conjunto de ícones consistente e leve</td>
    </tr>
    <tr>
      <td><strong>Estado</strong></td>
      <td>React Context</td>
      <td>Estado global do agendamento (Fase 1)</td>
    </tr>
    <tr>
      <td><strong>Fonte</strong></td>
      <td><a href="https://vercel.com/font">Geist</a></td>
      <td>Tipografia moderna sans-serif da Vercel</td>
    </tr>
  </tbody>
</table>

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css              # Estilos globais e configuração do tema Tailwind
│   ├── layout.tsx               # Layout raiz (Navbar, Footer, BookingProvider)
│   ├── page.tsx                 # Landing page (Hero + Serviços + Agendamento + Depoimentos)
│   └── dashboard/
│       └── page.tsx             # Painel do cliente
├── components/
│   ├── ui/
│   │   ├── Button.tsx           # Botão reutilizável (primary/outline/ghost/tamanhos)
│   │   └── Card.tsx             # Container de card reutilizável
│   ├── layout/
│   │   ├── Navbar.tsx           # Navbar fixa responsiva com menu mobile
│   │   └── Footer.tsx           # Rodapé com contato, horários e redes sociais
│   ├── landing/
│   │   ├── Hero.tsx             # Seção hero com gradiente e CTA
│   │   ├── Services.tsx         # Grade de serviços e preços
│   │   └── Testimonials.tsx     # Cards de depoimentos de clientes
│   └── booking/
│       └── BookingWizardWrapper.tsx  # Wizard de agendamento em 5 etapas
├── context/
│   └── BookingContext.tsx       # Estado global do agendamento
├── data/
│   └── mock.ts                  # Dados mock (serviços, horários, depoimentos)
└── types/
    └── index.ts                 # Interfaces e tipos TypeScript
```

---

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** 18+ (LTS recomendado)
- **npm** 9+

### Instalação

```bash
# Acesse a pasta do projeto
cd "Lava rapido Projeto"

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

---

## 🎨 Sistema de Design

### Paleta de Cores

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#0D9488` (teal-600) | Botões, acentos, elementos interativos |
| `primary-dark` | `#0F766E` (teal-700) | Estados hover |
| `secondary` | `#1E293B` (slate-800) | Títulos, textos |
| `surface` | `#F8FAFC` (slate-50) | Fundos de seção |
| `muted` | `#94A3B8` (slate-400) | Textos secundários |

### Tipografia

- **Fonte:** Geist (Vercel) — carregada via `next/font`
- **Escala:** Tipografia responsiva mobile-first com Tailwind

### Localização (pt-BR)

- **Moeda:** Real Brasileiro (R$) com separador decimal vírgula (ex.: `R$ 49,90`)
- **Data:** Formato DD/MM/AAAA (ex.: `25/05/2026`)
- **Idioma:** Todos os textos em português brasileiro
- **Telefone:** Formato brasileiro (11) 99999-8888

---

## 🧭 Roadmap

- [x] **Fase 1 — Frontend** (atual)
  - Dados mock e UI estática
  - Wizard de agendamento multi-etapas
  - Painel do cliente
- [ ] **Fase 2 — Integração Backend**
  - API REST (Next.js API Routes ou externa)
  - Banco de dados (PostgreSQL / Supabase)
  - Autenticação (login do cliente)
  - Gateway de pagamento real (API Pix, cartão)
  - Painel administrativo para o dono do negócio
- [ ] **Futuro**
  - Notificações push (lembretes via WhatsApp)
  - Agendamento recorrente (planos semanais/mensais)
  - Programa de fidelidade

---

## 📄 Licença

Este projeto é para fins educacionais e de portfólio.

---

<div align="center">
  <p>
    Feito com ❤️ para o mercado de lava-rápidos brasileiro.
    <br />
    <a href="./README.md">🇺🇸 Read in English</a>
  </p>
</div>
