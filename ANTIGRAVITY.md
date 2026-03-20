# 🧠 Antigravity Project Configuration

This project is powered by an AI "Project Brain" using the PARA method. Use this configuration to maintain context and ensure high-quality, agentic updates.

## 📁 Knowledge Base (The Brain)
- **Primary Context**: `brain/Areas/` (Company, Product, Decisions)
- **Current Work**: `brain/Projects/`
- **Resources**: `brain/Resources/`

## 🕹️ Operational Rules
1. **Fact Checking**: ALWAYS check `brain/Areas/decisions.md` and `brain/Areas/product.md` before suggesting changes to core architecture.
2. **Maintenance**: If a significant decision is made during a task, update `brain/Areas/decisions.md` as the final step.
3. **No Improvisation**: If project context is missing, look in the `brain/` directory using `grep`. If not found, ask for clarification.
4. **Style**: Follow the "Opencode Collective" style—concise, professional, and production-grade.

## 🛠️ Automated Brain Refresh
- Use `/gws` to pull updated research from Google Drive into `brain/Resources/`.
- Use Jira CLI to sync current tickets into `brain/Projects/`.

---
"Documentation is the memory of an agentic workforce."
