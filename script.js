/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const backdrop = document.getElementById("nav-backdrop");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
    if (backdrop) backdrop.hidden = !open;
    document.body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  backdrop?.addEventListener("click", () => setOpen(false));
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 860) setOpen(false);
    },
    { passive: true }
  );
}

initMobileNav();

/* ---------- Sticky header ---------- */
const header = document.querySelector(".site-header");

function updateScrollChrome() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

updateScrollChrome();
window.addEventListener("scroll", updateScrollChrome, { passive: true });

/* ---------- Nav scroll spy ---------- */
function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  if (!links.length) return;

  const sections = links
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const match = sections.find((item) => item.section === entry.target);
        if (!match) return;
        match.link.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
  );

  sections.forEach(({ section }) => spy.observe(section));
}

initScrollSpy();

/* ---------- Contact form ---------- */
function initFormPolish() {
  const formEl = document.getElementById("contact-form");
  if (!formEl) return;

  formEl.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("focus", () => {
      field.closest("label")?.classList.add("is-focused");
    });
    field.addEventListener("blur", () => {
      field.closest("label")?.classList.remove("is-focused");
    });
  });
}

initFormPolish();

const WEB3FORMS_ACCESS_KEY = "cc60a9c9-bcc3-4c77-a3a3-5483183ca55e";
const CONTACT_EMAIL = "mailz4irfi@gmail.com";
const SEND_TIMEOUT_MS = 8000;

const form = document.getElementById("contact-form");
const formFields = document.getElementById("form-fields");
const formSuccess = document.getElementById("form-success");
const sendAnotherBtn = document.getElementById("send-another");
const statusEl = document.getElementById("form-status");
const emailInput = document.getElementById("client-email");
const emailError = document.getElementById("email-error");
const submitBtn = form?.querySelector('button[type="submit"]');

function setStatus(message, type = "") {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = `form-status${type ? ` form-status--${type}` : ""}`;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function setEmailError(message = "") {
  if (!emailInput || !emailError) return;
  if (message) {
    emailError.hidden = false;
    emailError.textContent = message;
    emailInput.classList.add("is-invalid");
    emailInput.setAttribute("aria-invalid", "true");
  } else {
    emailError.hidden = true;
    emailError.textContent = "";
    emailInput.classList.remove("is-invalid");
    emailInput.removeAttribute("aria-invalid");
  }
}

function validateEmailField({ showEmptyError = false } = {}) {
  const value = String(emailInput?.value || "").trim();

  if (!value) {
    if (showEmptyError) {
      setEmailError("Please enter your email address.");
      return false;
    }
    setEmailError("");
    return false;
  }

  if (!isValidEmail(value)) {
    setEmailError("Please enter a valid email (example: name@company.com).");
    return false;
  }

  setEmailError("");
  return true;
}

emailInput?.addEventListener("input", () => {
  if (emailInput.classList.contains("is-invalid") || emailInput.value.trim()) {
    validateEmailField({ showEmptyError: false });
  }
});

emailInput?.addEventListener("blur", () => {
  if (emailInput.value.trim()) validateEmailField({ showEmptyError: true });
});

function showSuccessState() {
  form?.reset();
  setEmailError("");
  form?.classList.add("is-sent");
  if (formFields) formFields.hidden = true;
  if (formSuccess) formSuccess.hidden = false;
  setStatus("");
}

function showFormState() {
  form?.classList.remove("is-sent");
  if (formSuccess) formSuccess.hidden = true;
  if (formFields) formFields.hidden = false;
  setStatus("");
  setEmailError("");
}

sendAnotherBtn?.addEventListener("click", () => {
  showFormState();
  form?.querySelector('input[name="name"]')?.focus();
});

function hasWeb3Key() {
  return Boolean(
    WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_ACCESS_KEY_HERE"
  );
}

function openMailtoDraft({ name, email, company, interests, message }) {
  const subject = encodeURIComponent(
    `VexaCore Technologies inquiry from ${name}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      `Inquiry type: ${interests || "Not specified"}`,
      "",
      message,
    ].join("\n")
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function readForm(formEl) {
  const data = new FormData(formEl);
  return {
    name: String(data.get("name") || "").trim(),
    company: String(data.get("company") || "").trim(),
    email: String(data.get("email") || "").trim(),
    message: String(data.get("message") || "").trim(),
    interests: data
      .getAll("interest")
      .map(String)
      .filter(Boolean)
      .join(", "),
    botcheck: data.get("botcheck") || "",
  };
}

async function sendWithWeb3Forms(fields) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `VexaCore Technologies inquiry from ${fields.name}`,
        from_name: "VexaCore Technologies website",
        name: fields.name,
        company: fields.company || "Not provided",
        email: fields.email,
        inquiry_type: fields.interests || "Not specified",
        message: fields.message,
        botcheck: fields.botcheck,
      }),
      signal: controller.signal,
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.message || "Send failed.");
    }
    return true;
  } finally {
    clearTimeout(timer);
  }
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fields = readForm(form);
  const emailOk = validateEmailField({ showEmptyError: true });

  if (!fields.name || !fields.email || !fields.message || !emailOk) {
    form.classList.add("is-shake");
    window.setTimeout(() => form.classList.remove("is-shake"), 450);
    if (!emailOk) {
      emailInput?.focus();
      setStatus("Please fix the email address and try again.", "error");
    } else if (!fields.name) {
      form.querySelector('input[name="name"]')?.focus();
      setStatus("Please enter your name.", "error");
    } else if (!fields.message) {
      form.querySelector('textarea[name="message"]')?.focus();
      setStatus("Please enter your message.", "error");
    }
    return;
  }

  if (!hasWeb3Key() || !navigator.onLine) {
    setStatus("Opening your email app with a draft…");
    openMailtoDraft(fields);
    return;
  }

  const originalLabel = submitBtn?.textContent;
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
  }
  setStatus("Sending your message…");

  try {
    await sendWithWeb3Forms(fields);
    showSuccessState();
  } catch {
    setStatus("Network is slow — opening an email draft instead…");
    openMailtoDraft(fields);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel || "Send message";
    }
  }
});
