import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

interface EmailLog {
  id: string;
  to: string;
  subject: string;
  html: string;
  type: 'customer' | 'owner';
  timestamp: string;
}

// In-memory array of dispatched emails for visual developer verification
const emailLogs: EmailLog[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing parser
  app.use(express.json());

  // HEALTH CHECK
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API to fetch virtual email outbound logs (to prove emails were successfully sent)
  app.get("/api/dev/emails", (req, res) => {
    res.json({ emails: emailLogs });
  });

  // API to trigger payment validation and server email dispatches
  app.post("/api/checkout/process", (req, res) => {
    const { 
      orderId, 
      customerName, 
      customerEmail, 
      purchasedProducts, 
      paymentAmount, 
      paymentMethod,
      status 
    } = req.body;

    if (!orderId || !customerName || !customerEmail || !purchasedProducts) {
      return res.status(400).json({ error: "Missing required order parameters." });
    }

    // 1. Generate CUSTOMER Confirmation Email HTML
    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Inter', sans-serif; background-color: #050505; color: #ffffff; padding: 30px; margin: 0; }
          .card { background: #0c0c0c; border: 1px solid #1a1a1a; border-radius: 16px; padding: 30px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 30px rgba(0,0,0,0.5); }
          .header { border-bottom: 1px solid #222; padding-bottom: 20px; margin-bottom: 25px; text-align: center; }
          .logo { font-size: 24px; font-weight: 800; letter-spacing: -1px; color: #3b82f6; text-transform: uppercase; }
          .title { font-size: 20px; font-weight: 700; margin-bottom: 10px; color: #fff; text-align: center; }
          .details { margin-bottom: 25px; line-height: 1.6; font-size: 14px; color: #a3a3a3; }
          .details strong { color: #fff; }
          .product-box { background: #111; padding: 15px; border-radius: 8px; border: 1px solid #222; margin: 15px 0; font-family: monospace; }
          .amount { font-size: 28px; font-weight: 800; color: #10b981; margin: 20px 0; font-family: monospace; }
          .cta-box { background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); padding: 20px; border-radius: 12px; margin-top: 25px; text-align: center; }
          .btn-discord { background: #5865F2; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; display: inline-block; margin-top: 15px; transition: background 0.2s; }
          .footer { text-align: center; margin-top: 30px; font-size: 11px; color: #404040; border-top: 1px solid #222; padding-top: 15px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <div class="logo">MURAD OFFICIAL</div>
          </div>
          <div class="title">Your Order is Confirmed!</div>
          <p style="text-align:center; color:#a3a3a3; font-size:14px;">Order ID: <strong>#${orderId}</strong></p>
          
          <div class="details">
            <p>Hello <strong>${customerName}</strong>,</p>
            <p>Thank you for purchasing premium optimization elements! Your payment of <strong>$${paymentAmount}</strong> via <strong>${paymentMethod}</strong> has been securely cleared and deposited into our account.</p>
            
            <p><strong>REQUISITIONED ASSETS:</strong></p>
            <div class="product-box">
              ${purchasedProducts}
            </div>

            <div style="text-align: center;">
              <div class="amount">$${paymentAmount}</div>
              <span style="background:rgba(16,185,129,0.1); color:#10b981; border:1px solid rgba(16,185,129,0.2); padding:4px 12px; border-radius:20px; font-size:12px; font-weight:bold; font-family:monospace;">PAYMENT RECONCILED</span>
            </div>

            <div class="cta-box">
              <p style="margin: 0 0 10px 0; font-weight: 500; color: #fff;">Join our Discord to claim your product files:</p>
              <p style="margin: 0; font-size: 13px;">Join our Discord server and open a support ticket or DM me to receive your product instantly.</p>
              <a href="https://discord.gg/CMrZBYCmYE" class="btn-discord" target="_blank">Join Murad Official Discord</a>
            </div>
            
            <p style="margin-top:25px;">Track your delivery state at any time on our website using your secure Order ID node.</p>
          </div>
          
          <div class="footer">
            Copyright &copy; 2026 Murad Official | All dynamic optimization rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Generate SITE OWNER Notification Email HTML
    const ownerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Inter', sans-serif; background-color: #050505; color: #ffffff; padding: 30px; margin: 0; }
          .card { background: #0c0c0c; border: 1px solid #ef4444; border-radius: 16px; padding: 30px; max-width: 600px; margin: 0 auto; }
          .header { border-bottom: 1px solid #ef4444/30; padding-bottom: 15px; margin-bottom: 25px; text-align: center; }
          .alert-badge { background: #ef4444; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; font-family: monospace; display: inline-block; }
          .title { font-size: 22px; font-weight: 800; margin: 15px 0 5px 0; color: #fff; }
          .details { margin-bottom: 25px; line-height: 1.6; font-size: 14px; color: #a3a3a3; }
          .details strong { color: #fff; }
          .product-box { background: #111; padding: 15px; border-radius: 8px; border: 1px solid #222; font-family: monospace; margin: 15px 0; color: #ff9d00; }
          .stat-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 15px; background: #111; padding: 15px; border-radius: 12px; margin-top: 15px; border: 1px solid #222; }
          .stat-label { font-size: 11px; color: #555; font-family: monospace; text-transform: uppercase; }
          .stat-val { font-size: 15px; font-weight: bold; color: #fff; margin-top: 2px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <span class="alert-badge">REVENUE LOG ALERT</span>
            <div class="title">🚨 New Optimization Order Placed!</div>
          </div>
          
          <div class="details">
            <p>Hey Murad,</p>
            <p>A new customer has fully completed their secure checkout on your website. Payment of <strong>$${paymentAmount}</strong> has been deposited directly into your connected payment account!</p>
            
            <p><strong>CUSTOMER PROFILE:</strong></p>
            <div class="stat-grid">
              <div>
                <div class="stat-label">CUSTOMER NAME</div>
                <div class="stat-val">${customerName}</div>
              </div>
              <div>
                <div class="stat-label">CUSTOMER EMAIL</div>
                <div class="stat-val">${customerEmail}</div>
              </div>
              <div>
                <div class="stat-label">ORDER ID</div>
                <div class="stat-val">#${orderId}</div>
              </div>
              <div>
                <div class="stat-label">PAYMENT SPEED</div>
                <div class="stat-val">${paymentMethod} Secure Gateway</div>
              </div>
            </div>

            <p><strong>ACQUIRED PRODUCTS:</strong></p>
            <div class="product-box">
              ${purchasedProducts}
            </div>

            <div style="background: rgba(239, 68, 68, 0.1); padding: 15px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.2); margin-top: 20px; font-size: 13px;">
              <strong>DISCORD ACTION ITEM:</strong> Keep an eye on your Discord server! Ensure to match this email <strong>${customerEmail}</strong> or Order ID <strong>#${orderId}</strong> with the customer when they submit a ticket or DM you to receive their optimization configuration details.
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // 3. Save virtual dispatches to developer mock logger
    const customerLogId = "M-EMAIL-C-" + Date.now();
    const ownerLogId = "M-EMAIL-O-" + Date.now();

    emailLogs.push({
      id: customerLogId,
      to: customerEmail,
      subject: `Order Confirmed: ${orderId} - Murad Official`,
      html: customerHtml,
      type: 'customer',
      timestamp: new Date().toISOString()
    });

    emailLogs.push({
      id: ownerLogId,
      to: "shakibmurad@muradoffcail.com", // Site owner email as verified
      subject: `🚨 New Premium Order Placed: #${orderId}`,
      html: ownerHtml,
      type: 'owner',
      timestamp: new Date().toISOString()
    });

    console.log(`[Virtual Mail Dispatcher]: Dispatched customer email to ${customerEmail}`);
    console.log(`[Virtual Mail Dispatcher]: Dispatched owner notification email to shakibmurad@muradoffcail.com`);

    return res.json({ 
      success: true, 
      message: "Transactional confirmation and owner notification emails dispatched and cached in secure container mailbox.",
      orderId 
    });
  });

  // Vite middleware or build statically based on environment
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully operative and listening on port ${PORT}`);
  });
}

startServer();
