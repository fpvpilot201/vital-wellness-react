import { chromium } from "playwright";

const BASE = "http://localhost:3088";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  let pass = 0;
  let fail = 0;

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  PASS: ${name}`);
      pass++;
    } catch (e) {
      console.log(`  FAIL: ${name} — ${e.message}`);
      fail++;
    }
  }

  // TEST 1: Hamburger position
  console.log("\nTEST 1: Hamburger position");
  await page.goto(BASE, { waitUntil: "networkidle" });
  await test("Hamburger is visible", async () => {
    const btn = page.locator("button.menu-toggle");
    await btn.waitFor({ state: "visible", timeout: 5000 });
  });
  await test("Hamburger near right edge", async () => {
    const box = await page.locator("button.menu-toggle").boundingBox();
    const rightEdge = box.x + box.width;
    const distFromEdge = 390 - rightEdge;
    console.log(`    → Button right edge: ${rightEdge}px, distance from screen edge: ${distFromEdge}px`);
    if (distFromEdge > 20) throw new Error(`${distFromEdge}px from edge, too far`);
  });

  // TEST 2: Menu opens
  console.log("\nTEST 2: Menu opens");
  await page.locator("button.menu-toggle").tap();
  await page.waitForTimeout(500);
  await test("Nav links visible after tap", async () => {
    const nav = page.locator("ul.nav-links.mobile-active");
    await nav.waitFor({ state: "visible", timeout: 3000 });
  });
  await test("All 6 menu items present", async () => {
    const items = await page.locator("ul.nav-links > li").count();
    if (items !== 6) throw new Error(`Expected 6 items, got ${items}`);
  });
  const expectedItems = ["About Us", "Admissions", "Treatment Programs", "What We Treat", "Contact Us", "Blog"];
  for (const item of expectedItems) {
    await test(`Menu item "${item}" exists`, async () => {
      const el = page.locator("ul.nav-links > li > a", { hasText: item }).first();
      await el.waitFor({ state: "visible", timeout: 2000 });
    });
  }

  // TEST 3: About Us dropdown
  console.log("\nTEST 3: About Us dropdown");
  await page.locator("ul.nav-links > li > a", { hasText: "About Us" }).first().tap();
  await page.waitForTimeout(400);
  await test("About Us dropdown expanded", async () => {
    const dropdown = page.locator("ul.nav-links > li:first-child .dropdown-content.expanded");
    await dropdown.waitFor({ state: "visible", timeout: 3000 });
  });
  const dropdownLinks = ["About Us", "Treatment Methods", "Supplemental Treatments", "Facility"];
  for (const link of dropdownLinks) {
    await test(`Dropdown has "${link}"`, async () => {
      const el = page.locator("ul.nav-links > li:first-child .dropdown-content a", { hasText: link }).first();
      await el.waitFor({ state: "visible", timeout: 2000 });
    });
  }

  // Click Treatment Methods
  await page.locator("ul.nav-links > li:first-child .dropdown-content a", { hasText: "Treatment Methods" }).first().tap();
  await page.waitForTimeout(1000);
  await test("Navigated to Treatment Methods", async () => {
    const url = page.url();
    if (!url.includes("/treatment-methods")) throw new Error(`URL is ${url}`);
  });
  await test("Menu closed after navigation", async () => {
    const isActive = await page.locator("ul.nav-links.mobile-active").count();
    if (isActive > 0) throw new Error("Menu still open");
  });

  // TEST 4: Contact Us
  console.log("\nTEST 4: Contact Us link");
  await page.locator("button.menu-toggle").tap();
  await page.waitForTimeout(500);
  await page.locator("ul.nav-links > li > a", { hasText: "Contact Us" }).first().tap();
  await page.waitForTimeout(1000);
  await test("Navigated to Contact", async () => {
    if (!page.url().includes("/contact")) throw new Error(`URL is ${page.url()}`);
  });
  await test("Menu closed after Contact", async () => {
    const isActive = await page.locator("ul.nav-links.mobile-active").count();
    if (isActive > 0) throw new Error("Menu still open");
  });

  // TEST 5: Treatment Programs → Detox → Drug Detox
  console.log("\nTEST 5: Treatment Programs submenu");
  await page.locator("button.menu-toggle").tap();
  await page.waitForTimeout(500);
  await page.locator("ul.nav-links > li > a", { hasText: "Treatment Programs" }).first().tap();
  await page.waitForTimeout(400);
  await test("Treatment Programs dropdown expanded", async () => {
    const dd = page.locator("ul.nav-links > li:nth-child(3) .dropdown-content.expanded");
    await dd.waitFor({ state: "visible", timeout: 3000 });
  });
  await page.locator(".submenu-trigger", { hasText: "Detox" }).first().tap();
  await page.waitForTimeout(400);
  await test("Detox submenu expanded", async () => {
    const sub = page.locator(".submenu-content.expanded").first();
    await sub.waitFor({ state: "visible", timeout: 3000 });
  });
  await page.locator(".submenu-content a", { hasText: "Drug Detox" }).first().tap();
  await page.waitForTimeout(1000);
  await test("Navigated to Drug Detox", async () => {
    if (!page.url().includes("/drug-detox")) throw new Error(`URL is ${page.url()}`);
  });
  await test("Menu closed after Drug Detox", async () => {
    const isActive = await page.locator("ul.nav-links.mobile-active").count();
    if (isActive > 0) throw new Error("Menu still open");
  });

  // TEST 6: Blog link
  console.log("\nTEST 6: Blog link");
  await page.locator("button.menu-toggle").tap();
  await page.waitForTimeout(500);
  await page.locator("ul.nav-links > li > a", { hasText: "Blog" }).first().tap();
  await page.waitForTimeout(1000);
  await test("Navigated to Blog", async () => {
    if (!page.url().includes("/blog")) throw new Error(`URL is ${page.url()}`);
  });
  await test("Menu closed after Blog", async () => {
    const isActive = await page.locator("ul.nav-links.mobile-active").count();
    if (isActive > 0) throw new Error("Menu still open");
  });

  // TEST 7: What We Treat dropdown
  console.log("\nTEST 7: What We Treat dropdown");
  await page.locator("button.menu-toggle").tap();
  await page.waitForTimeout(500);
  await page.locator("ul.nav-links > li > a", { hasText: "What We Treat" }).first().tap();
  await page.waitForTimeout(400);
  await test("What We Treat dropdown expanded", async () => {
    const dd = page.locator("ul.nav-links > li:nth-child(4) .dropdown-content.expanded");
    await dd.waitFor({ state: "visible", timeout: 3000 });
  });
  await page.locator(".dropdown-content a", { hasText: "Alcohol Addiction" }).first().tap();
  await page.waitForTimeout(1000);
  await test("Navigated to What We Treat", async () => {
    if (!page.url().includes("/what-we-treat")) throw new Error(`URL is ${page.url()}`);
  });
  await test("Menu closed", async () => {
    const isActive = await page.locator("ul.nav-links.mobile-active").count();
    if (isActive > 0) throw new Error("Menu still open");
  });

  console.log(`\n=============================`);
  console.log(`RESULTS: ${pass} passed, ${fail} failed`);
  console.log(`=============================\n`);

  await browser.close();
  process.exit(fail > 0 ? 1 : 0);
}

run().catch((e) => {
  console.error("Test crashed:", e);
  process.exit(1);
});
