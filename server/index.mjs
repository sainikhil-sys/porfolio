import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: "64kb" }));

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Missing SMTP env vars. Required: SMTP_HOST, SMTP_USER, SMTP_PASS (and optional SMTP_PORT)."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // common convention for SMTPS
    auth: { user, pass },
  });
}

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email, and message are required" });
    }

    const to = process.env.CONTACT_TO || "sainikhil6300725603@gmail.com";
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

    const subject = `Portfolio contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;

    const transporter = getTransporter();
    await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: msg });
  }
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Contact email server listening on port ${PORT}`);
});

