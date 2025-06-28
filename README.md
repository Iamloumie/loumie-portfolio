# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring smooth animations and a functional contact form.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Contact Form**: Functional contact form with email integration
- **Modern UI**: Clean, professional design with shadcn/ui components
- **Email Integration**: Contact form submissions sent via Resend API
- **Form Validation**: Client-side and server-side validation
- **Multiple Services**: Showcase of web development, UI/UX design, logo design, and virtual assistance services

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome)
- **Email Service**: Resend
- **Language**: TypeScript/JavaScript

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Resend account and API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

### Resend Setup

1. **Sign up for Resend**
   - Visit [resend.com](https://resend.com)
   - Create an account and get your API key

2. **Development Mode**
   - In development, you can only send emails to your verified email address
   - Update the recipient email in `/app/api/send-form/route.js` to your verified email

3. **Production Mode**
   - Verify your domain at [resend.com/domains](https://resend.com/domains)
   - Update the `from` address to use your verified domain
   - You can then send emails to any recipient

### Email Template

The contact form sends emails with the following information:
- First Name & Last Name
- Email Address
- Phone Number
- Selected Service
- Message

## 🎨 Customization

### Personal Information

Update your contact information in the `info` array in `/app/contact/page.jsx`:

```javascript
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "Your phone number",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "your.email@example.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Your address",
  },
]
```

### Services

Modify the services offered in the contact form select dropdown:

```javascript
<SelectItem value="web-dev">Web Development</SelectItem>
<SelectItem value="ui-ux">UI/UX Design</SelectItem>
<SelectItem value="logo">Logo Design</SelectItem>
<SelectItem value="va">Virtual Assistance</SelectItem>
```

### Styling

- **Colors**: Customize the color scheme in your Tailwind config
- **Animations**: Modify Framer Motion animations in the component files
- **Layout**: Adjust responsive breakpoints and spacing

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (default)
- Tablets (md: 768px+)
- Desktop (xl: 1280px+)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add your environment variables in Vercel dashboard
   - Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📂 Project Structure

```
portfolio-website/
├── app/
│   ├── api/
│   │   └── send-form/
│   │       └── route.js          # Email API endpoint
│   ├── contact/
│   │   └── page.jsx              # Contact page component
│   ├── resume/
│   │   └── page.jsx              # resume page component
│   ├── work/
│   │   └── page.jsx              # work page component
│   ├── services/
│   │   └── page.jsx              # services page component
│   ├── globals.css               # Global styles
│   ├── layout.jsx                # Root layout
│   └── page.jsx                  # Home page
├── components/
│   └── ui/                       # shadcn/ui components
│   ├── Header.jsx                # Header layout
│   └── MobileNav.jsx             # MobileNav layout
│   ├── Nav.jsx                   # Nav layout
│   └── PageTransition.jsx        # PageTransition layout
│   ├── Photo.jsx                 # Photo layout
│   └── Social.jsx                # Social layout
│   ├── Stairs.jsx                # Stairs layout
│   └── StairTransition.jsx                  # StairTransition layout
│   ├── Stats.jsx                 # Stat layout
│   └── WorkSlider.jsx                  # WorkSlider layout
├── public/                       # Static assets
├── .env.local                    # Environment variables
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── package.json                  # Dependencies
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your Resend API key for email functionality | Yes |

## 🐛 Troubleshooting

### Email Not Sending

1. **Check spam folder** - Automated emails often end up in spam
2. **Verify API key** - Ensure your Resend API key is correct
3. **Check Resend dashboard** - Look for error logs in your Resend account
4. **Domain verification** - For production, verify your sending domain

### Development Issues

1. **Port already in use** - Kill the process or use a different port
2. **Environment variables** - Make sure `.env.local` is in the root directory
3. **Dependencies** - Delete `node_modules` and reinstall if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Lawal Adedamola Olumide**
- Email: lawaladedamolaolumide@gmail.com
- Phone: (+234) 904 820 7534
- Address: Plot 2, Ogunromoju street, GRA Quarters, Sagamu, Ogun State, Nigeria

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### Version 1.0.0
- Initial release
- Contact form with email integration
- Responsive design
- Smooth animations
- Multiple service options

---

⭐ If you found this project helpful, please give it a star!