import test from "node:test";
import assert from "node:assert/strict";
import { siteConfig } from "@/config/site";
import { servicesData, portfolioData } from "@/config/content";
import { saveSubmission, getAllSubmissions } from "@/lib/submissions";

test("Site Configuration Verification", async (t) => {
  await t.test("centralized brand name is configured", () => {
    assert.equal(siteConfig.companyName, "Relay");
    assert.ok(siteConfig.contactEmail.includes("@"));
    assert.ok(siteConfig.websiteUrl.startsWith("http"));
  });

  await t.test("services configuration contains available and roadmap services", () => {
    assert.equal(siteConfig.serviceAvailability.websiteDevelopment.status, "available_now");
    assert.equal(siteConfig.serviceAvailability.voiceAgents.status, "roadmap");
  });
});

test("Services and Portfolio Content Datasets", async (t) => {
  await t.test("all services have required deliverables and non-empty features", () => {
    assert.ok(servicesData.length >= 3);
    for (const s of servicesData) {
      assert.ok(s.id.length > 0);
      assert.ok(s.title.length > 0);
      assert.ok(s.features.length >= 4);
      assert.ok(s.ctaHref.startsWith("/"));
    }
  });

  await t.test("portfolio entries are concept projects and have complete metadata", () => {
    assert.ok(portfolioData.length >= 4);
    for (const p of portfolioData) {
      assert.equal(p.conceptLabel, "CONCEPT PROJECT");
      assert.ok(p.objective.length > 10);
      assert.ok(p.keyFeatures.length >= 3);
    }
  });
});

test("Submissions Layer & Mock Delivery Mode", async (t) => {
  await t.test("saves contact submission in mock mode without throwing", async () => {
    const res = await saveSubmission("contact", {
      name: "Test User",
      email: "test@example.com",
      service: "Website development",
      message: "Looking for a high-performance business website.",
    });

    assert.equal(res.success, true);
    assert.ok(res.id.startsWith("contact_"));

    const all = getAllSubmissions();
    const found = all.find((item) => item.id === res.id);
    assert.ok(found);
    assert.equal(found.payload.name, "Test User");
  });

  await t.test("saves audit submission in mock mode", async () => {
    const res = await saveSubmission("audit", {
      businessName: "Acme Services",
      websiteUrl: "https://acmeservices.com",
      email: "owner@acmeservices.com",
      focus: "Mobile conversion",
    });

    assert.equal(res.success, true);
    assert.ok(res.id.startsWith("audit_"));
  });
});
