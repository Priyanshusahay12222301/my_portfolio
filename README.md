# Full Stack Portfolio (Frontend + Backend)

## Structure
```
frontend/  # Static client (vanilla HTML/CSS/JS now; can add Tailwind or frameworks later)
backend/   # Express server handling contact form email
```

## Frontend
- Static HTML in `frontend/src/index.html`
- Basic responsive CSS in `frontend/src/styles.css`
- Dynamic rendering & form submission in `frontend/src/scripts.js`
- Dev server: live-server (run `npm install` first)

### Run Frontend
```bash
cd frontend
npm install
npm run dev
```
Serves at http://127.0.0.1:3000 (or reported port).

## Backend
Express API with `/api/contact` POST route.

### Environment Variables (`backend/.env`)
```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password   # Use Google App Password (not raw password)
PORT=5000
```
Copy from `backend/.env.example` and fill values.

### Run Backend
```bash
cd backend
npm install
npm run dev
```
Health check: http://localhost:5000/api/health

### Contact Endpoint
`POST /api/contact`
```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Hello there"
}
```
Success response:
```json
{ "message": "Message sent successfully!" }
```

## Update Frontend API URL
In `frontend/src/scripts.js` replace `http://localhost:5000` with your deployed backend URL when deploying.

## Deployment Suggestions
- Frontend: Netlify / Vercel (drag-drop `frontend/src` or create build pipeline)
- Backend: Render / Railway / Fly.io (set env vars securely)

## Hardening Ideas
- Add validation library (zod / joi) for contact input
- Rate limiting (express-rate-limit)
- CAPTCHA (hCaptcha or Cloudflare Turnstile) to prevent spam
- Logging (pino or morgan) & monitoring
- HTTPS enforcement and CORS origin restriction

## Future Enhancements
- Tailwind CSS build pipeline
- Dark/light theme toggle
- Resume PDF & Open Graph image
- Blog / articles section
- Convert to Next.js for SSR/SEO

## License
Personal portfolio template – reuse & modify freely.
# my_portfolio
