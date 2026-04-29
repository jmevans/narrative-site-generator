# Handoff Contracts

Every agent handoff should include:

```json
{
  "from_agent": "",
  "to_agent": "",
  "task": "",
  "relevant_context": {},
  "constraints": [],
  "required_output_schema": {},
  "known_facts": [],
  "assumptions": [],
  "open_questions": []
}
```

## Required Practices

- Include only relevant context.
- Preserve claim ids when content depends on claims.
- Preserve media asset ids when design or copy references assets.
- Mark assumptions explicitly.
- Do not pass private context to code generation unless needed for filtering or exclusion.
