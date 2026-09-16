# Automation Page — Full Content

**Route:** `/automation`

---

## 1. Hero (Header)

**Badge:** Automation Services

**Main Heading:**
Stop Doing Repetitive
Work Manually

**Intro Paragraph:**
I help businesses eliminate repetitive manual work by building intelligent automation systems — from simple workflow triggers to AI-powered agents that can reason, act, and integrate with your existing tools.

**CTA Buttons:**
- Explore Services → `#services`
- How I Work → `#process`

---

## 2. Services

**Section Label:** SERVICES

**Heading:** What I Can Automate

**Subtitle:** Every service below is tied to a real capability I've shipped — not generic buzzwords.

### 01 — Workflow & Business Process Automation

**Description:** Automating repetitive operational tasks — data entry, follow-ups, notifications, and cross-platform data sync — so teams can focus on high-value work instead of manual processes.

**Tools:** n8n, Node.js, Webhooks, REST APIs

**Example:** Automated Binance P2P profile operations, eliminating 6–7 hours of manual work per day.

### 02 — CRM & Lead Management Automation

**Description:** Automating lead capture, follow-up sequences, and data updates across CRM tools — so no lead falls through the cracks and follow-ups happen instantly instead of manually.

**Tools:** n8n, Google Sheets/Airtable, WhatsApp/Email API integrations

**Example:** Built an automated SEO audit pipeline (n8n + OpenAI) that captures leads via form, emails a client-ready report within minutes, and logs every lead in Google Sheets automatically.

### 03 — AI-Powered Feature & Agent Integration

**Description:** Building AI features into existing products — from intelligent analysis systems to conversational agents that can answer questions and take action using business context and connected tools.

**Tools:** AI APIs (OpenAI/Claude), MediaPipe, Node.js

**Example:** Built an AI-powered posture analysis platform using MediaPipe Pose Detection, analyzing multiple body metrics with real-time competitive scoring.

### 04 — Custom API & Database Integrations

**Description:** Connecting fragmented systems — APIs, databases, and third-party tools — into unified automated workflows, including exposing internal data/tools to AI systems for direct querying and action.

**Tools:** Node.js, MongoDB, PostgreSQL, REST/MCP integrations

**Example:** Built a DB Management MCP server that connects AI assistants (Claude, Cursor) directly to your database — enabling live query analysis, slow-query detection, and index suggestions backed by real execution data.

### 05 — Document & Communication Automation

**Description:** Automating repetitive document-based and communication-heavy processes (emails, reports, notifications) to reduce turnaround time and manual overhead.

**Tools:** Node.js, Puppeteer, Email/Notification APIs

---

## 3. How I Work (Process)

**Section Label:** HOW I WORK

**Heading:** From Discovery to Deployment

1. **Discovery Call** — We talk through your current workflow, bottlenecks, and where the manual hours are going.
2. **Workflow Mapping** — I map the exact steps, tools, and data flow so we can design the right automation.
3. **Build & Test** — I build the automation and test it against real scenarios before anything goes live.
4. **Deploy** — The system goes live in your environment, integrated with your existing tools.
5. **Ongoing Support** — Monitoring, maintenance, and improvements so the automation keeps earning back time.

---

## 4. Featured Projects

**Section Label:** PROJECTS

**Heading:** Featured Projects

### Project 01 — AI-Powered SEO Audit Automation

**Images:** `/automation/project1.png`, `/automation/project1-2.png`

**One-line Hook:** Automates manual SEO auditing using parallel AI agents — from form submission to a client-ready report, delivered in minutes.

**Problem → Solution:** Manually auditing a website's SEO requires multiple tools and hours of work. I built a fully automated pipeline where two AI agents analyze meta data and content quality in parallel, then merge their findings into a professional report.

**How It Works:**
- Captures name, phone, and website via a simple form
- Automatically fetches the website's content
- Two AI agents work in parallel — one analyzes meta data, the other analyzes content quality
- A final AI agent merges both analyses into a structured, client-friendly report
- Report is emailed directly to the user
- Every lead is automatically logged in Google Sheets

**Tech Stack:** n8n, OpenAI API, Google Sheets API, Gmail API, Webhooks

**Impact:** Reduces a multi-tool, manual SEO audit process into a fully automated, few-minute report generation system — while capturing leads automatically.

### Project 02 — DB Management MCP Server

**Image:** `/automation/mcp.png`

**One-line Hook:** An MCP server that lets AI assistants directly diagnose and optimize database queries — no more manual EXPLAIN, guesswork, or Googling execution plans.

**Problem → Solution:** Every backend developer has faced this: a query is slow, you run EXPLAIN manually, Google the output, guess which index to add, and hope for the best. I built an MCP server that connects AI assistants (Claude, Cursor, etc.) directly to your database, so you can ask questions and get real answers backed by actual execution data — not guesses.

**Key Capabilities:**
- `analyze_query` — Analyzes a raw SQL query's execution plan to pinpoint performance issues, root causes, severity, and targeted fixes with estimated improvements
- `detect_slow_queries` — Scans live or historical queries (pg_stat_statements, performance_schema, currentOp) to surface the worst-performing queries
- `suggest_indexes` — Parses WHERE, JOIN, and ORDER BY clauses and recommends missing indexes
- `explain_query` — Runs EXPLAIN / EXPLAIN ANALYZE and returns a human-readable breakdown of bottlenecks
- `get_table_stats` — Fetches table size, row count, index size, health score, and vacuum info
- `compare_queries` — Compares two query versions side-by-side and declares a winner with reasoning

**Tech Stack:** MCP (Model Context Protocol), PostgreSQL, MySQL, MongoDB, Node.js

**Who it's for:** Database administrators, backend developers, and data engineers optimizing SQL/NoSQL workloads.

**Impact:** Turns query optimization from a manual, guesswork-heavy process into a direct AI-assisted workflow — reducing diagnosis time and improving database performance with data-driven recommendations.

---

## 5. CTA Section

**Heading:** Ready to Eliminate Repetitive Manual Work?

**Text:** Tell me which process is eating the most hours, and I'll show you exactly how it can be automated.

**Buttons:**
- Start a Project → `mailto:sabbirchowdhury40854@gmail.com`
- Back to Home → `/`

---

## 6. Footer

**Name:** Sabbir Chowdhury

**Tagline:** Full-Stack Developer & automation engineer building intelligent systems that remove repetitive manual work.

**Quick Links:** Home (`/`), Automation (`/automation`), Projects (`/project`), Learn (`/learn`)

**Contact:**
- Email: sabbirchowdhury40854@gmail.com
- Phone: +880 1617 837797
- Location: Dhaka, Bangladesh

**Copyright:** © {year} Sabbir Chowdhury. All rights reserved.