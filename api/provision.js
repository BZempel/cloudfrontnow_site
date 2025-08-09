// api/provision.js
export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

    const { shopName, subdomain, email, phone, template } = req.body || {};
    if (!shopName || !subdomain || !email || !phone || !template) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    if (!/^[a-z0-9-]{3,40}$/.test(subdomain)) {
      return res.status(400).json({ error: 'Invalid subdomain' });
    }

    // For now, do nothing fancy—just pretend we provisioned it.
    // (We’ll wire Claude & GitHub in Step 2 later.)
    return res.json({
      ok: true,
      message: 'Form received. Provisioning stub ok.',
      host: `${subdomain}.cloudfrontnow.com`
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
