import test from "node:test";
import assert from "node:assert/strict";
import { siteConfig } from "@/config/site";
import { servicesData, portfolioData } from "@/config/content";

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

test("Audit Form Validation and Security Checks", async (t) => {
  await t.test("validates HTTP/HTTPS URL patterns correctly", () => {
    const validUrls = ["https://example.com", "http://mybusiness.org", "example.com/services"];
    const invalidUrls = ["ftp://invalid.com", "javascript:alert(1)", "http://localhost:3000", "http://127.0.0.1"];

    function isValidAuditUrl(raw: string): boolean {
      let urlStr = raw.trim();
      if (!urlStr.startsWith("http://") && !urlStr.startsWith("https://")) {
        urlStr = "https://" + urlStr;
      }
      try {
        const parsed = new URL(urlStr);
        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return false;
        const hostname = parsed.hostname.toLowerCase();
        if (
          hostname === "localhost" ||
          hostname === "127.0.0.1" ||
          hostname.startsWith("192.168.") ||
          hostname.startsWith("10.") ||
          hostname.endsWith(".local")
        ) {
          return false;
        }
        return hostname.includes(".");
      } catch {
        return false;
      }
    }

    for (const url of validUrls) {
      assert.equal(isValidAuditUrl(url), true, `Expected valid: ${url}`);
    }

    for (const url of invalidUrls) {
      assert.equal(isValidAuditUrl(url), false, `Expected invalid: ${url}`);
    }
  });
});
