import test from "node:test";
import assert from "node:assert/strict";
import { enforceHardGates } from "./decision.js";
test("hard gate always blocks",()=>{const r=enforceHardGates({subjectId:"x",subjectType:"AGENT_ACTION",trustScore:99,hardPolicyFailures:[{policyId:"p",severity:"LOW",reason:"x",hardGate:true}],evidenceState:"OBSERVED",observedAt:"2026-01-01T00:00:00.000Z",auditEventId:"a"});assert.equal(r.decision,"BLOCK");});