# Form Setup Guide

## Option A: Formspree (recommended – most reliable)

1. Go to **https://formspree.io** and sign up (free)
2. Create a new form for **Contact** → copy the form ID (e.g. `mwkggnqw`)
3. Create another form for **Job Applications** → copy the form ID
4. In `.env.local`, add:
   ```
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
   NEXT_PUBLIC_FORMSPREE_JOB_ID=your_job_form_id
   ```
5. Restart dev server: `Ctrl+C` then `npm run dev`
6. Test `/contact/` and `/career/apply/`

## Option B: Web3Forms (already configured)

- Your key is in `.env.local`
- **Verify your email** at web3forms.com – check inbox/Spam for activation
- Restart server after any `.env.local` change

## Troubleshooting

- **Restart required** – env changes need a server restart
- **Web3Forms** – Verify email after signup; check Spam folder
- **Formspree** – Free: 50/month; supports file uploads for job form
